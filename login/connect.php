<?php
    $Email = $_POST['Email'];
    $Password = $_POST['Password'];

    // Database connection

    $conn = new mysqli('localhost', 'root','','login form database');
    if($conn->connect_error){
        die('Connection Failed : '.$conn->connect_error);

    } else{
        $stmt = $conn->prepare("insert into registration(Email, Password) values(?,?)");
        $stmt->bind_param("ss",$Email, $Password);
        $smst->execute();
        echo "registration Successfully....";
        $stmt->close();
        $conn->close();
    }
?>