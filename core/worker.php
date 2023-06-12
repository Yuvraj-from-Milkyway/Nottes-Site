<?php
include_once 'connect.php';
include_once 'functions.php';

if (isset($_POST['refer'])) {
  if ($_POST['refer'] === 'item') {
    if(isset($_POST['dt']) && !empty($_POST['dt'])){
      $sub = $_POST['dt'];
      //print_r(explode(",",$sub));
      $subs = explode(",",$sub);
      $reqdir = $subs[0].'/'.$subs[1].'/'.$subs[2];
      $fulldir = 'C:/xampp/htdocs/tests/00notes/Data'.'/'.$reqdir;
      $_SESSION['fdir'] = $fulldir;
      $_SESSION['rdir'] = $reqdir;
      //header('location: http://localhost/tests/00notes/notes.php');
      //$dirr = $fulldir;
      echo $fulldir.'<br>';
      echo $reqdir;
      //$opt = get_sub($subs);
      //header('location: http://localhost/tests/00notes/notes.php');
      //print_r($subs);
      //json_encode($opt);
      //echo json_encode($opt);
    }
    //explode(",",$sub)
    //echo $opt;
  } else {
    echo "Something Went Wrong!";
  }

} elseif(isset($_FILES['files']) || isset($_POST['stream']) || isset($_POST['up_sem']) || isset($_POST['up_sbj'])){
  if (empty($_POST['up_sem']) || empty($_POST['up_sbj']) || empty($_POST['stream'])) {
    $error[] = "Please Choose all fields";
    //echo "Please Choose all fields";
  } else {
    echo "done".$_FILES['files']['size'][0].', sem-'.$_POST['up_sem'].$_POST['up_sbj'];
    print_r($_FILES['files']['size']);

    $st = $_POST['stream']; $sb = $_POST['up_sbj']; $sm = $_POST['up_sem'];
    $dir = $st."\\".$sb."\\".$sm;
    echo "<br>".$dir."</br>";

    $uploaddir = 'C:\xampp\htdocs\tests\00notes\Data'.'\\'.$dir.'\\ ';

    foreach ($_FILES['files']['name'] as $key => $value) {
      //echo $filename.' | '.$filename.'<br>';

      echo "<pre>";
      print_r($_FILES['files']['name'][$key]);
      echo ' |'.($_FILES['files']['size'][$key])/(1024*1024);
      echo "</pre>";
      if ( ( ($_FILES['files']['size'][$key])/(1024*1024) ) < 8 ) {
        $uploadfile = $uploaddir. basename($_FILES['files']['name'][$key]);

        if (file_exists($uploadfile)) {
          $error[] = "WARNING , file already exists.";
          echo "WARNING , file already exists."."\n";
        }
        echo '<pre>';
        if(move_uploaded_file($_FILES['files']['tmp_name'][$key], $uploadfile)) {
            $_SESSION['error'] = "All Done, File Uploaded";
            echo "File is valid, and was successfully uploaded.\n The Directory Where the file Is Uploaded - ".$uploaddir;
            echo 'Here is some more debugging info: ';
            print_r($_FILES['files']);
        }else {
            $error[] = "Something went Wrong. Try again!";
            echo "Possible file upload attack!\n";
        }
      }else {
        $_SESSION['error'] = "Max limit reached";
        echo "Max limit reached";
      }

    }
    $_SESSION['error'] = $error;
    //header("Location: ../index.php");
  }
}else {
  echo "Nothing Uploaded";
}

/*function dbconnect()
{
  $mysql = mysqli_connect('localhost','root');
  mysqli_select_db($mysql,'notes');
  return $mysql;
}
function get_sub($sub)
{
  $str = $sub[0]
  $mysql = dbconnect();
  $db = "select $sub[0] from sub";
  $query = mysqli_query($mysql,$db);
  while ( $row = mysqli_fetch_assoc($query)){
    //$dbdata[] = array('data' => $row);
    $mails[] = $row[$str];
  }
  return $mails;
}
*/
