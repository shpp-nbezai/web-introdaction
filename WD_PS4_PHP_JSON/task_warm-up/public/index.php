<?php
session_start();
session_destroy();
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="./styles/css/index.css">
  <link rel="stylesheet" href="./styles/css/normalize.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="js/main.js"></script>
  <title>Тестируем PHP</title>
</head>
<body onload="setActiveTask('<?= $_SESSION['activeTask'] ?? null ?>')">
<div class="flex-container">
  <section class="header">
    <div class="container">
      <h1>PHP Warm-up</h1>
      <div class="nav">
        <div class="dropdown-container">
          <div id="flip">
            <div class = "active-task">
              please select a task...
            </div>
            <div class = "triangle-ico">
              <i class="fa fa-caret-down"></i>
            </div>
          </div>
          <ul id="panel" class="dropdown"></ul>
        </div>
      </div>
    </div>
  </section>
  <section class="section-task-01 is-hidden">
    <div class="container">
      <form action="action.php" method="post" >
        <div>
          <p>посчитать сумму чисел от -1000 до 1000</p>
          <br>
          <?php
          if ( isset($_SESSION['task 01'] )) :
            echo 'результат: ' . $_SESSION['task 01'];
          endif;?>
        </div>
        <input type="text" hidden name="taskName" value="task_1">
        <p><input type="submit" class="section-submit-button"/></p>
      </form>
    </div>
  </section>
  <section class="section-task-02 is-hidden">
    <div class="container">
      <form action="action.php" method="post" >
        <div>
          <p>посчитать сумму чисел от -1000 до 1000,
            суммируя только числа которые заканчиваются на 2, 3 и 7
          </p>
          <br>
          <?php
          if ( isset($_SESSION['task 02'] )) :
            echo 'результат: ' . $_SESSION['task 02'];
          endif;?>
        </div>
        <input type="text" hidden name="taskName" value="task_2">
        <p><input type="submit" class="section-submit-button"/></p>
      </form>
    </div>
  </section>
  <section class="section-task-03 is-hidden">
    <div class="container">
      <form action="action.php" method="post" >
        <div>
          <p>вывести на страницу список из 50 элементов вида</p>
          <br>
          <?php
          if ( isset($_SESSION['task 03'] )) :
            echo 'результат: ' . $_SESSION['task 03'];
          endif;?>
        </div>
        <input type="text" hidden name="taskName" value="task_3">
        <p><input type="submit" class="section-submit-button"/></p>
      </form>
    </div>
  </section>
  <section class="section-task-04 is-hidden">
    <div class="container">
      <form action="action.php" method="post" >
        <div>
          <p>отрисовать шахматную доску согласно указанных размеров.</p>
          <div>
            <label>Введите размер шахматной доски:</label>
          </div>
          <div class="section-task-04_input">
            <label>Рядов:</label>
            <input type="text" name="chessboard_row" value="8">
          </div>
          <div class="section-task-04_input">
            <label>Колонок:</label>
            <input type="text" name="chessboard_col" value="8">
          </div>
          <input type="text" hidden name="taskName" value="task_4">
          <p><input type="submit"
                    value="Отрисовать"
                    class="section-submit-button"
            /> </p>
          <br>
          <div id = "resultTask04">
            <?php if ( isset($_SESSION['task 04'] )) :
                  echo $_SESSION['task 04'];
            endif;?>
          </div>
        </div>
      </form>
    </div>
  </section>
  <section class="section-task-05 is-hidden">
    <div class="container">
      <form action="action.php" method="post" >
        <div>
          <p>Найти сумму цифр введённого числа.</p>
          <div>
            <label>Введите число:</label>
          </div>
          <div>
            <input type="text" name="numberToSum" value="12345">
          </div>
          <br>
          <div>
            <?php
            if ( isset($_SESSION['task 05'] )) :
              echo $_SESSION['task 05'];
            endif;?>
          </div>
          <input type="text" hidden name="taskName" value="task_5">
          <p><input type="submit"
                    value="Сумма цыфр:"
                    class="section-submit-button"/> </p>
        </div>
      </form>
    </div>
  </section>
  <section class="section-task-06 is-hidden">
    <div class="container">
      <form action="action.php" method="post" >
        <div>
          <p>Сгенерировать массив рандомных целых
            чисел от 1 до 10, длинна массива 100.
            Убрать из массива повторы, отсортировать и ревертнуть.</p>
          <input type="text" hidden name="taskName" value="task_6">
          <p><input type="submit"
                    value="Результат:"
                    class="section-submit-button"/> </p>
          <div>
            <?php
            if ( isset($_SESSION['task 06'] )) :
              echo $_SESSION['task 06'];
            endif;?>
          </div>
        </div>
      </form>
    </div>
  </section>
</div>
</body>
</html>
