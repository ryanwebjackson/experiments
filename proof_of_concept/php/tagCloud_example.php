<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title></title>
    </head>
    <body>
        <?php
        //php tag cloud function
        function tag_cloud($tags){
            //set the text max size
            $maxsize = 60;
            //set the text min size
            $minsize = 20;

            //get the max value of the array
            $maxvalue = max(array_values($tags));
            //get the min value of the array
            $maxvalue = min(array_values($tags));

            $spread = ($maxvalue - $minvalue);

            $step = (($maxsize - $minsize) / $spread);

            // processing, cloud creation

            foreach($tags as $key => $value){
            $size = round($minsize + (($value - $minvalue) * $step));
            echo '<a href="#" style="font-size: '.$size.'px">'.$key.'</a>';
            }
        } //end php tag cloud function

        //set some tags
        $tags = array(' PHP '=>14,' ASP '=>10,' Java '=>18,' VB.NET '=>12,' JavaScript '=>14);

        //call tag cloud function
        tag_cloud($tags);
        ?>
    </body>
</html>
