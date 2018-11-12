<?
$config = require (  dirname(__DIR__, 1 ) .
  DIRECTORY_SEPARATOR . 'app' . DIRECTORY_SEPARATOR . 'config.php');
require ($config['jsonDataModel']);

$data = new jsonDataModel($config);

foreach ( $data->getVoteArray() as $key => $value ) {
  echo '<li>
            <input type="radio"
                   class="vote-input"
                   name="vote"
                   value="' . $key. '">
                   <span>' . $key . '</span></li>';

}
