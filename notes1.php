<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Notes</title>
    <link rel="stylesheet" href="css/style.css">
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="script/jquery-2.1.3.min.js" charset="utf-8"></script>
    <script src="script/master.js" charset="utf-8"></script>
    <link href="https://fonts.googleapis.com/css2?family=Mali:wght@300&display=swap" rel="stylesheet">
  </head>
  <body>
    <header>
      <div class="logo">
        Notes : )
      </div>
      <nav>
        <ul>
          <li><a href="http://localhost/tests/00notes/index1.html">Home</a></li>
        </ul>
      </nav>
    </header>

    <div class="sb-container">
      <div class="wrapper notes-wrapper">

        <div class="d-container n-c">

          <div class="c-inner">
            <div class="c-temp">
              <ul>
                <?php
                   session_start();
                   $dirr = $_SESSION['fdir']; //C:/xampp/htdocs/tests/00notes/Data/bsc/Maths/6
                   $dir = $_SESSION['rdir']; //bsc/Maths/6
                   if (is_dir($dirr)) {
                     if ($dh = opendir($dirr)) {
                        $c = 0;
                         while (($file = readdir($dh)) !== false) {
                           if ( ($file <> ".") && ($file <> "..") ) {
                               $linkpath = "http://localhost/tests/00notes/Data/"."$dir"."/".$file; //http://localhost/tests/00notes/Data/bsc/Maths/6/WA-DOC-.pdf
                               $dirpath = $dirr."/".$file;
                               //var_dump(is_dir($dirpath));
                               //echo '|'.$dh.'|';

                               if (is_dir($dirpath)) {
                                 $subname = $file;
                                 echo "<h3><u>$file</u></h3>";
                                 $dh1 = opendir($dirpath);
                                 //$c1 = 0;
                                 while (($file1 = readdir($dh1)) !== false) {
                                   if ( ($file1 <> ".") && ($file1 <> "..") ) {
                                     $linkpath1 = $linkpath."/".$file1;
                                     echo "<li><a href='$linkpath1' target='blank'>".$file1."</a></li>";
                                   }
                                   //$c1++;
                                 }

                               } else {
                                 echo "<li><a href='$linkpath' target='blank'>".$file."</a></li>";
                               }
                               //echo "filename: $file";

                           }
                           $c++;
                         }
                         closedir($dh);
                         ($c>2) ? $err = "" : $err = "Sorry, We have Nothing for you!" ;
                     }
                   }else {
                     $err = "Sorry, We dont have anything for you at this moment.";
                   }
                ?>
              </ul>
              <ul>
                <?php
                 if (isset($err)) {
                   ?>
                     <h3><?php echo (isset($err)) ? $err : '' ;  ?></h3>
                   <?php
                 }
                 ?>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </div>



    <footer>
      <div class="ft">
        <div class="ft-inner">
          © 2004-2020 UV.in - Nooottteeesss .
        </div>
      </div>
    </footer>

  </body>
</html>
