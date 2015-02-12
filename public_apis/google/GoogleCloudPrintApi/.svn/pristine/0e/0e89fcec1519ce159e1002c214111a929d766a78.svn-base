function authorize(config) {

	// Config

	// Values ultimately derive from Google Developer Console. *Where, What is this?*
	var clientId = config.ClientId,
		apiKey = config.ApiKey,  
		scopes = config.Scopes; // 'scopes' should be in URI format.

	var defaultAuthOptions = {client_id: clientId, scope: scopes, immediate: true};


	// Callbacks
	function handleClientLoad() {
		gapi.client.setApiKey(apiKey); // TODO: Inject 'gapi' client lib.
		window.setTimeout(checkAuth, 1); // Try passing in 'options' here. If working, pass down the callback chain.
	}

	function checkAuth(options) {
		var authOptions = options ||
			{client_id: clientId, scope: scopes, immediate: true};
		gapi.auth.authorize(authOptions, handleAuthResult);
	}

	function handleAuthResult(authResult, authBtnId) {
		var id = authBtnId || 'authorize-button';
		var authorizeButton = document.getElementById(id);
		if (authResult && !authResult.error) {
			authorizeButton.style.visibility = 'hidden';
			makeApiCall();
		} else {
			authorizeButton.style.visibility = '';
			authorizeButton.onclick = handleAuthClick;
		}
	}

	function handleAuthClick(event, options) {
		var authOptions = options || 
			{client_id: clientId, scope: scopes, immediate: false};
		gapi.auth.authorize(authOptions, handleAuthResult);
		return false;
	}


	// App-specific logic:
	//   1. Load API client.
	//   2. Make API call.
	//   3. Display results.
	//
	function makeApiCall() {
		gapi.client.load('plus', 'v1', function() {

			var request = gapi.client.plus.people.get({
				'userId': 'me'
			});

			request.execute(function(response) {
				var heading = document.createElement('h4');
				var image = document.createElement('img');
				image.src = response.image.url;
				heading.appendChild(image);
				heading.appendChild(document.createTextNode(response.displayName));

				document.getElementById('content').appendChild(heading);
			});

		});
	}

}
