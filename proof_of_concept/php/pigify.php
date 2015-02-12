<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Pig Latin Translator</title>
    </head>
    <body>
        <?php
        $thePen = <<<THEPEN
   <form id="form" name="form" method="post" action="$_SERVER[PHP_SELF]">
       <textarea id="strInput" name="strInput" rows="20" cols="40"></textarea>
       <br />
       <input type="submit" name="submit" value="pigify" />
   </form>
THEPEN;
        if(!isset($_POST[submit])) {
            // if form not submitted, display form
            print $thePen;
        }
        else {
            // form has been submitted, translate text to pig latin

            // convert string to lower case as per spec
            $lowerInput = strtolower($_POST[strInput]);
            // seperate string into key/value pairs for data manipulation
            $arrInput = explode(" ", $lowerInput);

            foreach ($arrInput as $word) {
                // trim spaces on current word
                $word = rtrim(trim($word),".");
                // seperate the first letter from the rest of the word
                $firstletter = substr($word,0,1);
                $restofword = substr($word,1,strlen($word));
                // check to see if the first letter is a vowel
                if(!strstr($firstletter,"a") && !strstr($firstletter,"e")
                        && !strstr($firstletter,"i") && !strstr($firstletter,"o")
                        && !strstr($firstletter,"u")) {
                    // if first letter is not a vowel, move it to the end of
                    // the word, and append "ay"
                    $strOutput = $strOutput . " " . $restofword . $firstletter
                        . "ay";
                }
                else {
                    // first letter is a vowel, simply append "way"
                    $strOutput = $strOutput . " " . $word . "way";


                } // end first letter decision construct
            } // end looping $arrInput

            // trim leading and trailing spaces from output string
            $strOutput = trim($strOutput);
            // output new string
            print $strOutput;

        } // end else "form has been submitted"
        ?>
    </body>
</html>
