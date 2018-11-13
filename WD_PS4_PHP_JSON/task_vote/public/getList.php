<?php
$config = require (  dirname(__DIR__, 1 ) .
  DIRECTORY_SEPARATOR . 'app' . DIRECTORY_SEPARATOR . 'config.php');
require ($config['JsonDataModel']);

$data = new JsonDataModel( $config );
echo $data->getVoteJson();
