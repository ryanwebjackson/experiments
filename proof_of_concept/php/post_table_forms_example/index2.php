<!-- Created by Ryan Jackson, 4 Januaray 2010 -->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
	<title>post_table_forms example</title>
</head>

<body>
<?php
// server options for debugging
error_reporting(E_ALL);

// declare variables
$name = $_POST['name'];
$age = $_POST['age'];
$email = $_POST['email'];

if($age == 1){
$age = '1-10';}
elseif($age == 2){
$age = '11-20';}
elseif($age == 3){
$age = '21-30';};

echo <<<OUTPUT
<table border="0" cellspacing="0" cellpadding="3">
<tr ><td>Your name: $name</td></tr>
<tr ><td>Your email: $email</td></tr>
<tr ><td>Your relative age: $age</td></tr>
</table>
OUTPUT;
?>
</body>
</html>