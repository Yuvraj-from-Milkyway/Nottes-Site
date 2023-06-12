<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <?php include 'includes/head.php'; ?>
  </head>
  <body>
    <?php include 'includes/header.php'; ?>

    <div class="containerr">
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
             //echo "Sorry, We dont have anything for you at this moment.";
             //echo $dirr.'<br>'.$dir;
           }
           //echo $linkpath;
           //var_dump(is_dir('c'));
           //echo "</ul>";
          ?>
        </ul>
          <!--<ul>
            <li>hasi</li>
            <li>aseuifwjemf</li>
            <li>gSEUfhuaienf</li>
            <li>ahnf23ujensdkmkvbdf</li>
            <li>wu3yrfjsdvjs</li>
          </ul>-->
            <?php
              /*
              echo "<ul>";
              foreach (new DirectoryIterator($dirr) as $fn) {
                //print $fn->getFilename();
                if(strlen($fn->getFilename())>2){
                  echo "<li>";
                  echo $fn->getFilename().'<br>'.$fn->getATime();
                  echo "</li>";
                }
              }Nottes-[%SVvfUXVfnZBYE6Em8gS]Options All -Indexes
              echo "</ul>";*/
            ?>
          <?php
           if (isset($err)) {
             ?>
             <div style="display: flex;height: 100px;width:100%;justify-content: center; text-align:center;" class="c-err-temp">
               <h3><?php echo (isset($err)) ? $err : '' ;  ?></h3>
             </div>
             <?php
           }
           ?>

        </div>
      </div>
    </div>

    <?php include 'includes/footer.php'; ?>
  </body>
</html>
