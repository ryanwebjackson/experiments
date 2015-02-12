using Google.Apis.Auth.OAuth2;
using Drive = Google.Apis.Drive.v2;
using Google.Apis.Drive.v2.Data;
using Google.Apis.Services;

using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading;
using System.Web;

using Newtonsoft.Json;

namespace GoogleCloudPrintApiDotNet
{
	class Program
	{
		private static string mSource = "Custom-GcpApiDotNet-v1"; // name of the app ('Chrome' when called from browser)
		private static string mAuthToken = string.Empty;
		private static UserCredential mCredential = null;

		private static readonly List<string> SCOPES = new List<string>() 
		{
			"https://www.googleapis.com/auth/drive.readonly",
			"https://www.googleapis.com/auth/cloudprint" 

			/*
			 // TODO: Get this scope working (with file upload). More sematic than 'printing' to Drive.
			 "https://www.googleapis.com/auth/drive.file", // access files created by this app
			*/
		};

		static void Main()
		{
			UserSettings userSettings = ObtainUserSettings();

			ClientSecrets secrets;
			ObtainGoogleApiSettings(out secrets);

			// Google Authorization for given credentials and scopes.
			AuthorizeUser(secrets, SCOPES, userSettings).Wait();
			Console.WriteLine("User authenticated for scopes: " + string.Join(", ", SCOPES.ToArray()));
			
			Console.WriteLine("Searching for saved or default printer...");
			// Obtain printer options / Perform '/search' GCP call
			//var printOptions = SearchGapiForPrinter(); 
			Console.WriteLine("Printer found.");

			Console.WriteLine("Listing Drive files, and selecting one to print...");
			RequestDriveFileListAndPrintFile(mCredential, printOptions); // todo: handle errors
			Console.WriteLine("Check printer for document.");
			
			// Keep Console window open
			Console.ReadLine();
		}

		private static void ObtainGoogleApiSettings(out ClientSecrets secrets)
		{
			Console.WriteLine("Obtaining Google Developer Console / API settings...");

			secrets = GetClientSecrets();

			Console.WriteLine("Google settings obtained.");
		}

		private static UserSettings ObtainUserSettings()
		{
			Console.WriteLine("Obtaining user settings...");

			UserSettings userSettings = new UserSettings();

			Console.WriteLine("Enter your Google Account user name (email address):");
			userSettings.Name = Console.ReadLine();

			Console.WriteLine("User settings obtained.");
			return userSettings;
		}

		private class UserSettings 
		{
			public string Name { get; set; }
		}

		private static ClientSecrets GetClientSecrets()
		{
			// note: these settings could be requested from another web service
			GoogleWebAuthorizationBroker.Folder = "GoogleCloudPrintApiDotNet";
			var stream = new FileStream("client_secrets.json", FileMode.Open, FileAccess.Read); // separate for debug
			ClientSecrets secrets = GoogleClientSecrets.Load(stream).Secrets;
			return secrets;
		}

		/// <summary>
		/// Calls the Google Cloud Print (GCP) service, to search for a printer with the specified settings.  
		/// Requires the printer to either be "cloud ready" or attached to a client computer with the Cloud Print Connector (usually Google Chrome).  
		/// Cannot be performed before Google Account Authorization for 'cloudprint' scope.
		/// </summary>
		/// <returns>object with printer ID and capabilities</returns>
		/// <exception>1. Making HTTP request for printer options. 2. Converting response to JSON.</exception>
		private static object SearchGapiForPrinter(string printerName = "", string type = "", string connectionStatus = "", bool? useCdd = null, IEnumerable<string> extraFields = null)
		{
			dynamic printOptions;

			// Create request
			HttpWebRequest request = null;

			const string uriString = "https://www.google.com/cloudprint/search";

			StringBuilder queryString = new StringBuilder();
			if (!string.IsNullOrEmpty(printerName))
				queryString.Append("&q=" + HttpUtility.UrlEncode(printerName));
			if (!string.IsNullOrEmpty(type))
				queryString.Append("&type=" + HttpUtility.UrlEncode(type));
			if (!string.IsNullOrEmpty(connectionStatus))
				queryString.Append("&connection_status=" + HttpUtility.UrlEncode(connectionStatus));
			if (useCdd != null)
				queryString.Append("&use_cdd=" + HttpUtility.UrlEncode(useCdd.ToString().ToLower()));
			if (extraFields != null) {
				var extraFieldsString = String.Join(",", extraFields.ToArray<string>());
				queryString.Append("&extra_fields=" + HttpUtility.UrlEncode(extraFieldsString));
			}

			Uri requestUri = new Uri(uriString + queryString);

			request = (HttpWebRequest)WebRequest.Create(requestUri);
			request.Method = "GET";

			request.Headers.Add("X-CloudPrint-Proxy", mSource);
			//request.Headers.Add("Authorization", "OAuth oauth_token=" + mAuthToken); // not sure if this is needed

			// Get response
			HttpWebResponse response = (HttpWebResponse)request.GetResponse();
			string responseContent = new StreamReader(response.GetResponseStream()).ReadToEnd();

			dynamic jsonResponse = JsonConvert.DeserializeObject(responseContent);
			var printers = new List<dynamic>(jsonResponse.printers);
			printOptions = printers.First( p => ((string)p.name.Value).Contains("MOCKUP") ); // pass in setting, ultimately from user input
			// code smell - shouldn't have to parse for printer that has already been specified

			return printOptions;
		}

		private static void RequestDriveFileListAndPrintFile(UserCredential userCredential, dynamic printOptions)
		{
			//debug
			Console.WriteLine("userCredential: " + userCredential);

			if (IsGoodCredential(userCredential))
			{
				FileList fileList = RetrieveFileListFromGoogleDrive(userCredential);

				Drive.Data.File fileToPrint = SelectFileForPrinting(fileList);

				var result = PrintDriveFile(fileToPrint, printOptions);
				Console.WriteLine("result of 'PrintDriveFile': " + result); //debug
			}
			else
			{ // invalid credential - Clean this up for production.
				StringBuilder message = 
					new StringBuilder("ERROR: Bad credential." + Environment.NewLine);
				message.AppendLine(String.Format("credential: {0}{1}", userCredential, Environment.NewLine));

				// should be 'GoogleAuthorizationException'
				throw new Exception(message.ToString());
			}
		}

		private static Drive.Data.File SelectFileForPrinting(FileList fileList)
		{
			Drive.Data.File result = new Drive.Data.File();

			if (IsGoodFileList(fileList))
			{
				Console.WriteLine("Files from Drive: " + Environment.NewLine);

				foreach (var file in fileList.Items)
				{
					Console.WriteLine("title: " + file.Title);
					Console.WriteLine("mimetype: " + file.MimeType);

					if (file.MimeType.Contains("pdf"))
					{
						result = file;
						break;
					}
				}
			}
			else
			{
				throw new Exception("Bad FileList from Drive.");
			}

			return result;
		}

		private static FileList RetrieveFileListFromGoogleDrive(UserCredential userCredential)
		{
			FileList result = new FileList();

			// Instantiate an 'IClientService'
			var driveService = new Drive.DriveService(new BaseClientService.Initializer()
			{
				HttpClientInitializer = userCredential,
				ApplicationName = Constants.ApplicationName
			});
			var listRequest = new Drive.FilesResource.ListRequest(driveService);
			result = listRequest.Execute(); // todo: handle errors

			return result;
		}

		private static bool IsGoodCredential(UserCredential credential)
		{
			return credential != null && credential.Token != null && !credential.Token.IsExpired(Google.Apis.Util.SystemClock.Default);
		}

		private static bool IsGoodFileList(FileList fileList)
		{
			return fileList != null && fileList.Items.Count > 0;
		}

		private static dynamic PrintDriveFile(Drive.Data.File fileToPrint, dynamic printOptions)
		{
			// debug
			Console.WriteLine("fileToPrint: " + fileToPrint);
			Console.WriteLine("printOptions: " + printOptions);


			// Create .NET HttpRequest for GCP
			HttpWebRequest request = (HttpWebRequest)WebRequest.Create("https://www.google.com/cloudprint/submit?output=json");
			request.Method = "POST";

			StringBuilder queryString = new StringBuilder();
			if (!string.IsNullOrEmpty(printOptions.id.Value))
				queryString.Append("&printerid=" + HttpUtility.UrlEncode(printOptions.id.Value));
			if (printOptions.capabilities != null)
				queryString.Append("&capabilities=" + HttpUtility.UrlEncode(printOptions.capabilities.First.ToString()));
			if (!string.IsNullOrEmpty(fileToPrint.MimeType))
				queryString.Append("&contentType=" + HttpUtility.UrlEncode(fileToPrint.MimeType));
			if (!string.IsNullOrEmpty(fileToPrint.Title))
				queryString.Append("&title=" + HttpUtility.UrlEncode(fileToPrint.Title));
			if (!string.IsNullOrEmpty(fileToPrint.Id)) {
				queryString.Append("&content=" + HttpUtility.UrlEncode(fileToPrint.Id));
			}

			byte[] data = new ASCIIEncoding().GetBytes(queryString.ToString());

			request.Headers.Add("X-CloudPrint-Proxy", mSource);
			//request.Headers.Add("Authorization", "OAuth oauth_token=" + mAuthToken); // not sure if this is needed

			request.ContentType = "application/x-www-form-urlencoded";
			request.ContentLength = data.Length;

			// Write query string to request stream
			Stream stream = request.GetRequestStream();
			stream.Write(data, 0, data.Length);
			stream.Close();

			// Get response
			HttpWebResponse response = (HttpWebResponse)request.GetResponse();
			string responseContent = new StreamReader(response.GetResponseStream()).ReadToEnd();


			//debug
			Console.WriteLine("response: " + response);
			Console.WriteLine("responseContent: " + responseContent);
			Console.WriteLine("response.StatusCode = " + response.StatusCode);


			if (response.StatusCode == HttpStatusCode.OK && !string.IsNullOrEmpty(responseContent))
				return true;
			else
				return false;

		}

		private static async System.Threading.Tasks.Task<bool> AuthorizeUser(ClientSecrets secrets, IList<string> scopes, UserSettings userSettings)
		{
			bool result = false;

			// check this HTTP response for the auth code
			mCredential = await GoogleWebAuthorizationBroker.AuthorizeAsync(secrets, scopes, userSettings.Name, CancellationToken.None);

			if (mCredential.Token.IsExpired(Google.Apis.Util.SystemClock.Default))
				await mCredential.RefreshTokenAsync(CancellationToken.None);

			// note: Validating 'authCode' should fix the "QUEUED" print job problem.
			if (IsGoodCredential(mCredential))
				result = true;

			//mAuthToken = RequestAuthentication(userSettings.Name);
			mAuthToken = mCredential.Token.AccessToken; // not sure if this makes sense

			return result;
		}

		// Note: Method should be extensible,  
		//   but limited to returning auth code for the given user.
		private static string RequestAuthentication(string userName)
		{
			string authCode = string.Empty; // Population signifies successful authentication. Use to obtain Token.

			const string requestBase = "https://accounts.google.com/o/oauth2/auth";

			// TODO: Pass these and other, optional request params in to this method.
			string clientId = "296753244004-6kt08r1r9ajgqahn9ajqhlnr5rn6dc6i.apps.googleusercontent.com";
			string scopeString = Uri.EscapeUriString(string.Join(" ", SCOPES.ToArray<string>()));
			string origin = "http://localhost";
			string state = "1774614450%7C0.3042178624";

			string queryString = BuildAuthQueryString(clientId, scopeString, origin, state);

			string urlString = requestBase + queryString;
			HttpWebRequest request = (HttpWebRequest)WebRequest.Create(urlString);
			request.Method = "GET";

			HttpWebResponse response = (HttpWebResponse)request.GetResponse();
			string responseContent = new StreamReader(response.GetResponseStream()).ReadToEnd();

			authCode = GetAuthCodeFromResponseContent(responseContent);

			if (authCode == string.Empty)
			{
				// For debugging - Consider throwing 'Exception' here
				Console.WriteLine("'Auth' not found in result.");
				Console.WriteLine("responseContent: " + responseContent);
			}

			return authCode;
		}

		private static string BuildAuthQueryString(string clientId, string scopeString, string origin, string state)
		{
			StringBuilder queryString = new StringBuilder("?");

			if (!string.IsNullOrEmpty(clientId))
				queryString.AppendFormat("client_id={0}", clientId);
			if (!string.IsNullOrEmpty(scopeString))
				queryString.AppendFormat("&scopes={0}", scopeString);
			queryString.Append("&immediate=true");
			queryString.Append("&include_granted_scopes=true");
			queryString.Append("&proxy=oauth2relay709893805");
			queryString.Append("&redirect_uri=postmessage");
			if (!string.IsNullOrEmpty(origin))
				queryString.AppendFormat("&origin={0}", origin);
			queryString.Append("&response_type=code");
			if (!string.IsNullOrEmpty(state))
				queryString.AppendFormat("&state={0}", state);
			queryString.Append("&authuser=0");

			return queryString.ToString();
		}

		private static string GetAuthCodeFromResponseContent(string responseContent)
		{
			string authCode = string.Empty;

			string[] split = responseContent.Split('\n');
			foreach (string s in split)
			{
				string[] nvsplit = s.Split('=');
				if (nvsplit.Length == 2)
				{
					if (nvsplit[0] == "Auth")
					{
						authCode = nvsplit[1];
					}
				}
			}

			return authCode;
		}

	}

	public static class Constants
	{
		public readonly static string ApplicationName = "GoogleCloudPrintApiFromGDrive";
		// Obtain the following from 'ClientSecrets', if possible.
		public readonly static string TokenServerUrl = "https://accounts.google.com/o/oauth2/token";
		public readonly static string AuthorizationServerUrl = "https://accounts.google.com/o/oauth2/auth";
		public readonly static string RedirectUri = "urn:ietf:wg:oauth:2.0:oob";
	}

}
