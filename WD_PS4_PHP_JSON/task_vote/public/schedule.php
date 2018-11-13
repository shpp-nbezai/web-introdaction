<?php
session_start();
session_destroy();
?>
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="styles/css/index.css">
  <link rel="stylesheet" href="./styles/css/normalize.css">
  <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
  <script type="text/javascript">
    google.charts.load( 'current', {'packages':['corechart']} );
    google.charts.setOnLoadCallback( drawChart );

    function drawChart() {
      let jsonData = google.visualization.arrayToDataTable(
                     JSON.parse( '<?= $_SESSION["jsonData"]; ?>' ));
      let options = {
        title: 'The most effective weapon'
      };
      let chart = new google.visualization.PieChart( document.getElementById( 'piechart' ));
      chart.draw( jsonData, options );
    }
  </script>
  <title>Vote form</title>
</head>
<body>
<div class="flex-container">
  <header>
    <h1>The most effective weapon</h1>
  </header>
  <section class="section-vote-schedule">
    <div id="piechart" style="width: 900px; height: 500px;"></div>
    <a href="index.php"> Return to vote</a>
  </section>
</div>
</body>
</html>
