<?php
$connection_error = 'Sorry, we are experiencing Downtime .';
$mysql = mysqli_connect('localhost','root') or die($connection_error);
mysqli_select_db($mysql,'notes') or die($connection_error);
session_start();

/*function dbconnect()
{
  $mysql = mysqli_connect('localhost','root');
  mysqli_select_db($mysql,'notes');
  return $mysql;
}*/
