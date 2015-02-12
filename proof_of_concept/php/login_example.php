<!-- *originally created for IT-P/A, CVTC - 2010 -->
<?php 
session_start();

// if login form has been submitted, try to authenticate user
if (isset($_POST[clickIt])) {
    // Acquire username and password from the form
    $uName = trim($_POST[userName]);
    $pWord = trim($_POST[passWord]);

    if ($uName == "" || $pWord == "") { // if username, password blank, prompt
        print "<h3 style=\"color:orange\">You must enter both a username and password</h3>";
    }
    else { // Proceed with account check
        // Connect to the database
        require 'dbConnect.php';

        // Encrypt the entered password from the form
        $pWord = sha1($pWord);

        // Query the users table to obtain user data
        $result = @mysql_query("SELECT * FROM users
                                WHERE uName='$uName' AND pWord='$pWord'");

        // Check if query failed
        if (!$result) {
            exit("<p style=\"color:red\">Error retrieving account info</p>\n");
        }

        // Check if input matches stored data
        if (mysql_num_rows($result) > 0) {
            // Reset login tries
            $_SESSION[failCount] = 0;

            $_SESSION[authenticated] = true;

            // if user came from a page, redirect back there
            if (isset($_SESSION[targetURL])) {
                $gotoURL = $_SESSION[targetURL];
                print "<p>Hello</p>";
            }
            else { // else redirect to admin page
                $gotoURL = "adminPage.php";
            }

            // Redirect
            //header("Location: $gotoURL");
            header("Location: $gotoURL");
            print "<h3>\$gotoURL = $gotoURL *** targetURL = $_SESSION[targetURL]</h3>";

        } // end if "input matches stored data"
        else { // Input doesn't match stored data
            $_SESSION[failCount]++;
            print "<h3 style=\"color:red\">Invalid credentials = please try again</h3>\n\n";
        }
        

    } // end else "username, password submitted"

}
else { // login form not submitted
    // user has been to another page and is coming her from a redirection

    // Check if user wishes to log out
    if ($_GET[logOut] == 1) {
        // Unauthenticate
        unset($_SESSION[authenticated]);

        // if register_globals is turned ON, also do this:
        unset($authenticated);
    }

    // Remember URL from page
    print "<h3>\$_GET[url] contains $_GET[url]</h3>";
    $_SESSION[targetURL] = $_GET[url];
}
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Quotes CMS Login Page</title>
    </head>
    <body>
        <h2 id="myh2">Please login to gain administrative access</h2>
        <form action="<?php print $_SERVER[PHP_SELF] ?>" method="POST">
            <label>Username:</label>
            <input type="text" name="userName" id="userName" value="praetorian" />
            <br /><br />
            <label>Password:</label>
            <input type="password" name="passWord" id="passWord" />
            <br /><br />
            <input type="submit" name="clickIt" value="Log In" />
        </form>
    </body>
</html>
