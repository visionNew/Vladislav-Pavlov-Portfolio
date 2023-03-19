<?php
    header('Content-Type: application/json');

    $data = json_decode(file_get_contents('php://input'), true);

    if (isset($data['name']) && !empty($data['name']) &&
        isset($data['email']) && !empty($data['email']) &&
        isset($data['message']) && !empty($data['message']) &&
        filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {

        $to = "vlad.z.pavlov@gmail.com";
        $subject = $data['name'];
        $message = $data['message'];
        $headers = "From: " . $data['email']; 


        if (mail($to, $subject, $message, $headers)) {
        $response = array('status' => 'success');
        } else {
        $response = array('status' => 'error');
        }
    } else {
        $response = array('status' => 'error');
    }

    echo json_encode($response);
?>
