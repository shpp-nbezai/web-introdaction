<?php
    session_start();
    require('../app/functions.php');
    $taskId = $_POST['taskName'];
    switch ($taskId){
        case 'task_1':
            $_SESSION['task 01'] = getResultTask01();
            $_SESSION['activeTask'] = 'Task 01';
            header('location: index.php');
            break;
        case 'task_2':
            $_SESSION['task 02'] = getResultTask02();
            $_SESSION['activeTask'] = 'Task 02';
          header('location: index.php');
            break;
        case 'task_3':
            $_SESSION['task 03'] = getResultTask03();
            $_SESSION['activeTask'] = 'Task 03';
            header('location: index.php');
            break;
        case 'task_4':
            $_SESSION['task 04'] = getResultTask04();
            $_SESSION['activeTask'] = 'Task 04';
            header('location: index.php');
            break;
        case 'task_5':
            $_SESSION['task 05'] = getResultTask05();
            $_SESSION['activeTask'] = 'Task 05';
            header('location: index.php');
            break;
        case 'task_6':
            $_SESSION['task 06'] = getResultTask06();
            $_SESSION['activeTask'] = 'Task 06';
            header('location: index.php');
            break;
    }
    session_write_close();

