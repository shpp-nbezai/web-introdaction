<?
session_start();
$config = require (  dirname(__DIR__, 1 ) .
  DIRECTORY_SEPARATOR . 'app' . DIRECTORY_SEPARATOR . 'config.php');
require ($config['jsonDataModel']);

if ( !isset( $_POST['vote'] )) {
  $_SESSION["errorMsg"] = 'Выберите вариант.';
  header('location: index.php');
} else {
  $dataModel = new jsonDataModel($config);
  $voteResult = $_POST['vote'];
  $dataModel->addVote( $voteResult );
  $_SESSION['jsonData'] = $dataModel->getGooglePieChartData();
  $_SESSION['vote'] = $voteResult;

  header('location: schedule.php');
}
session_write_close();
