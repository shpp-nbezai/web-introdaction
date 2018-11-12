<?
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
  <title>Vote form</title>
  <script>
    function showList() {
      let xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          document.getElementById("voteList").innerHTML = this.responseText;
        }
      };
      xmlhttp.open("GET", "getList.php" ,true);
      xmlhttp.send();
    }
  </script>
</head>
<body onload="showList()">
<div class="flex-container">
  <header>
    <h1>The most effective weapon</h1>
  </header>
  <section class="section-vote">
    <div class="container" >
      <form action="action.php"
            method="post"
            id="vote-form">
        <ul  class="vote-inputs" id="voteList">

        </ul>
      </form>
      <button type="submit"
              class="vote-form_submit-button"
              form="vote-form"
              value="submit">Голосовать</button>
    </div>
    <p>
      <?
      if (isset($_SESSION["errorMsg"])) {
        echo $_SESSION["errorMsg"];
      } ?>
    </p>
  </section>
</div>
</body>
</html>
