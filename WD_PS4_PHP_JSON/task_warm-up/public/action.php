<?php
    session_start();
    require dirname(__DIR__) . DIRECTORY_SEPARATOR . 'app' . DIRECTORY_SEPARATOR . 'functions.php';
    $taskId = $_POST['taskName'];
    switch ($taskId){
        case 'task_1':
            $_SESSION['task 01'] = getResultTask01();
            $_SESSION['activeTask'] = 'Task 01';
            break;
        case 'task_2':
            $_SESSION['task 02'] = getResultTask02();
            $_SESSION['activeTask'] = 'Task 02';
            break;
        case 'task_3':
            $_SESSION['task 03'] = getResultTask03();
            $_SESSION['activeTask'] = 'Task 03';
            break;
        case 'task_4':
            $_SESSION['task 04'] = getResultTask04();
            $_SESSION['activeTask'] = 'Task 04';
            break;
        case 'task_5':
            $_SESSION['task 05'] = getResultTask05();
            $_SESSION['activeTask'] = 'Task 05';
            break;
        case 'task_6':
            $_SESSION['task 06'] = getResultTask06();
            $_SESSION['activeTask'] = 'Task 06';
            break;
    }
    header('location: index.php');
    session_write_close();

