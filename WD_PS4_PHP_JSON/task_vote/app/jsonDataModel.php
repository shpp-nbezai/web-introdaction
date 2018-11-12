<?
class jsonDataModel {
  var $configFile;
  var $voteName;
  var $filePath;
  var $voteArray;

  function __construct( $configFile)
  {
    if (empty( $configFile )) {
      throw new Exception( "Empty config options");
    }
    $this->configFile = $configFile;
    $this->filePath = $this->configFile['data_path'];
    $this->readJsonFile();
  }

  function addVote ( $voteName ) {
    $this->readJsonFile();

    if (array_key_exists( $voteName , $this->voteArray)) {
      foreach( $this->voteArray as $key => $value) {
        if ($key === $voteName) {
          $this->voteArray[$key]++;
        }
      }
    }
    $this->writeJsonFile();
  }

  function checkFileExists(){
    if ( !file_exists( $this->filePath )) {
      $jsonBase = $this->configFile['jsonBase'];
      $this->voteArray = array_fill_keys( $jsonBase , 0);
      $this->writeJsonFile();
    }
  }

  function readJsonFile () {
    $this->checkFileExists();
    if ( is_readable ( $this->filePath )) {
      $json = file_get_contents( $this->filePath, false );
    } else {
      throw new Exception( 'The file is not readable!');
    }
    $decodeArray = json_decode( $json, true );
    if (json_last_error()) {
      throw new Exception('Data is not the correct format.');
    }
    $this->voteArray =  $decodeArray;
    return $decodeArray;
  }

  function writeJsonFile () {
    if (file_exists( $this->filePath ) &&
       !is_writable( $this->filePath )) {
      throw new Exception( 'File is not exist or writable.');
    }
    if ( empty( $this->voteArray )) {
      throw new Exception( 'Can not write an empty array.');
    }
    $jsonData = json_encode( $this->voteArray, JSON_PRETTY_PRINT );
    file_put_contents( $this->filePath, $jsonData);
  }

  function getGooglePieChartData() {
    $pieChartArray[] = ['name', 'value'];
    foreach( $this->voteArray as $key => $value) {
      $pieChartArray[] = [ $key, $value];
    }
    return json_encode($pieChartArray);
  }

  function getVoteArray(){
    return $this->voteArray;
  }
}
