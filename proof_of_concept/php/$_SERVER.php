<?php
// $_SERVER is an associative superglobal array contains information
// passed by the webserver software (IIS, Apache, etc.)
print "<br /><br />\n";
// clean-up and display $_SERVER
print "<table border=\"2px\">";
foreach ($_SERVER as $key => $value) {
	print "<tr>\n";
	print " <td>$key</td>\n";
	print " <td>$value</td>\n";
	print "</tr>\n";
}
print "</table>\n";
?>