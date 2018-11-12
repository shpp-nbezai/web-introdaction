<?php

function getResultTask01() {
  return array_sum(range(-1000,1000));
}
function getResultTask02() {
  $sumResult = 0;
  for ($i = -1000; $i <= 1000; $i++) {
    $lastDigit = abs($i % 10);
    if (in_array($lastDigit, [2,3,7])){
      $sumResult += $i;
    }
  }
  return $sumResult;
}
function getResultTask03() {
  $triangleStr = '<br>';
  for ($i = 0; $i < 50; $i++) {
    $triangleStr .= str_repeat( '*', $i) . '<br>';
  }
  return $triangleStr;
}
function getResultTask04() {
  define("CHESS_BOARD_SIZE", 480.00);
  $chessBoard = '';
  if ( !is_numeric( $_POST['chessboard_row'] ) ||
       !is_numeric( $_POST['chessboard_col']) ){
      return "Введите пожалуйста число!";
  }
  $row = htmlspecialchars($_POST['chessboard_row']);
  $col = htmlspecialchars($_POST['chessboard_col']);
  $colorFlag = true;
  $chessPlateSIze = ( $row < $col ) ? CHESS_BOARD_SIZE / $col : CHESS_BOARD_SIZE / $row;
  $rowDiv = '<div id="rowDiv" style="min-height: ' . $chessPlateSIze . 'px;" class="chessBoardRow">';
  for ($i = 0; $i < $row; $i ++) {
    $chessBoard .= $rowDiv;
    for ($j = 0; $j < $col; $j++) {
      if ( $j % 2 ) {
        $colorFlag ? $color = 'white' : $color = 'black';
      } else {
        $colorFlag ? $color = 'black' : $color = 'white';
      }
      $chessBoard .= '<div id="colDiv" class="chessBoardCol" style="height: ' . $chessPlateSIze . 'px; width: ' . $chessPlateSIze . 'px; background-color: ' . $color . ';"></div>';
    }
    if ( $colorFlag ) {
      $colorFlag = false;
    } else {
      $colorFlag = true;
    }
    $chessBoard .= '</div>';
  }

  return $chessBoard;
}

function getResultTask05() {
  if ( !is_numeric( $_POST['numberToSum'] )) {
    return "Введите пожалуйста число!";
  }
  $numberToSum = htmlspecialchars( abs($_POST['numberToSum']) );
  $result = 'Сумма цыфр ' . $numberToSum . ' составляет: ' . array_sum(str_split($numberToSum));
  return $result;
}

function getResultTask06() {
  $resultArray = array();
  for ($i = 0; $i < 100; $i++ ) {
    $resultArray[] = mt_rand(1, 10);
  }
  $resultArray = array_unique($resultArray);
  asort($resultArray);
  $resultArray = array_reverse($resultArray);
  return implode( ' | ', $resultArray);
}
