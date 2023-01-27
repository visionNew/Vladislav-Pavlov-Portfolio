<?php
    $to = 'snowcho88@gmail.com';
    $subject = 'Message Recieved';
    $message =  '<h3>Name: '.htmlentities($_POST['name']).'</h3>'.
                '<p>Email: '.htmlentities($_POST['email']).'</p>'.
                '<p>Message: '.htmlentities($_POST['message']).'</p>';
   
    $headers =  "From: " . $email . "\r\n".
                "Reply-To: ". $email . "\r\n".
                "Content-Type: text/html; charset=ISO-8859-1\r\n".
                "MIME-Version: 1.0\r\n".
                'X-Mailer: PHP/'.phpversion();

    mail($to, $subject, $message, $headers);
?>