<?php
class JsonDataModel {
  private $configFile;
  private $filePath;
  private $voteArray;

  public function __construct( $configFile)
  {
    if ( empty( $configFile )) {
      throw new Exception( "Empty config options" );
    }
    $this->configFile = $configFile;
    $this->filePath = $this->configFile['data_path'];
    $this->readJsonFile();
  }

  public function addVote ( $voteName ) {
    $this->readJsonFile();

    if ( array_key_exists( $voteName , $this->voteArray )) {

      foreach( $this->voteArray as $key => $value ) {

        if ( $key === $voteName ) {
          $this->voteArray[$key]++;
        }
      }
    }

    $this->writeJsonFile();
  }

  public function getGooglePieChartData() {
    $pieChartArray[] = ['name', 'value'];

    foreach( $this->voteArray as $key => $value ) {
      $pieChartArray[] = [$key, $value];
    }

    return json_encode( $pieChartArray );
  }

  public function getVoteJson() {

    return json_encode( $this->voteArray );
  }

  private function checkFileExists(){

    if ( !file_exists( $this->filePath )) {
      return false;
    }

    return true;
  }

  private function initJsonFile() {
    $jsonBase = $this->configFile['jsonBase'];
    $this->voteArray = array_fill_keys( $jsonBase , 0 );
    $this->writeJsonFile();
  }


  private function readJsonFile () {
    if ( !$this->checkFileExists() ){
      $this->initJsonFile();
    }

    if ( is_readable( $this->filePath )) {
      $json = file_get_contents( $this->filePath, false );
    } else {
      throw new Exception( 'The file is not readable!');
    }

    $decodeArray = json_decode( $json, true );

    if  ( json_last_error() ) {
      throw new Exception('Data is not the correct format.' );
    }

    $this->voteArray =  $decodeArray;

    return $decodeArray;
  }

  private function writeJsonFile () {

    if ( file_exists( $this->filePath ) &&
         !is_writable( $this->filePath )) {
      throw new Exception( 'File is not exist or writable.' );
    }

    if ( empty( $this->voteArray )) {
      throw new Exception( 'Can not write an empty array.' );
    }

    $jsonData = json_encode( $this->voteArray, JSON_PRETTY_PRINT );
    file_put_contents( $this->filePath, $jsonData );
  }
}
