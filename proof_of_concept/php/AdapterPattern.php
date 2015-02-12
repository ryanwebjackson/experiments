<?php
/*
From "PHP Design Patterns" - Aaron Saray (Wrox Press)
Author: Ryan Jackson
Created: 28 Aug 2012
*/

class errorObject {
	private $__error;
	
	public function __construct($error) {
		$this->__error = $error;
	}
}

class logToConsole {

	private $__errorObject;
	
	public function __construct($errorObject) {
		$this->__errorObject = $errorObject;
	}
	
	public function write() {
		fwrite(STDERR, $this->__errorObject->getError());
	}
}

/** Create new 404 error object **/
$error = new errorObject("404:Not Found");

/** Write the error to the console **/
$log = new logToConsole($error);
$log->write();

// Shouldn't these two logger classes inherit from a base class? - 082812 07:42
class logToCSV {
	const CSV__LOCATION = 'log.csv';
	
	private $__errorObject;
	
	public function __construct($errorObject) {
		$this->__$errorObject = $errorObject;
	}
	
	public function write() {
		$line = $this->__errorObject->getErrorNumber();
		$line .= ',';
		$line .= $this->__errorObject->getErrorText();
		$line .= "\n";
		
		file_put_contents(self::CSV_LOCATION, $line, FILE_APPEND);
	}
}

// Note that typically adapters will implement a common interface - 082812
class logToCSVAdapter extends errorObject {
	private $__errorNumber, $__errorText;
	
	public function __construct($error) {
		parent::__construct($error);
		
		$parts = explode(':', $this->getError());
		
		$this->__errorNumber = $parts[0];
		$this->__errorText = $parts[1];
	}
	
	public function getErrorNumber() {
		return this->__errorNumber;
	}
	
	public function getErrorText() {
		return this->__errorText;
	}
}

// implementation of adapter:

/** Create the new 404 error object adapted for CSV **/
$error = new logToCSVAdapter("404:Not Found");

// This part of the code does not change.
//   This is what makes the adapter pattern truly useful.

/** Write the error to CSV file **/
$log = new logToCSV($error);
$log->write();

?>