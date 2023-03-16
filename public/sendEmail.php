<?php
    $to = 'vlad.z.pavlov@gmail.com';
    $subject = 'Message Recieved';
    $message =  '<h3>Name: '.htmlentities($_POST['name']).'</h3>'.
                '<p>Email: '.htmlentities($_POST['email']).'</p>'.
                '<p>Message: '.htmlentities($_POST['message']).'</p>';

    $headers =  "From: " . $to . ";\r\n".
                "Reply-To: ". $to . ";\r\n".
                "Content-Type: text/html; charset=utf-8;\r\n".
                "Content-Tranfer-Encoding: 8bit;";

    mail($to, $subject, $message, $headers);
?>