<?php
include_once('classes/sendmail.php');
include_once('config.php');

header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: Content-Type');
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

if( empty($_POST['name']) && empty($_POST['email']) ) {
    echo json_encode(
        [
           "sent" => false,
           "message" => $SendMailEmptyerrorMessage
        ]
    ); 
    exit();
}

  // pobieranie danych z formularza
  $name = htmlspecialchars($_POST['name']);
  $email = htmlspecialchars($_POST['email']);
  $message = htmlspecialchars($_POST['msg']);
  $parcel = htmlspecialchars($POST_['radiobtn']);
  $phone = htmlspecialchars($POST_['phone']);

if ($_POST){
    //@important: Please change this before using
    http_response_code(200);
    $subject = 'Contact from: ' . $_POST['name'];
    $body = '<h2>Wiadomość z formularza</h2>
	<h4>Imię użytkownika</h4><p>'.$name.'</p>
	<h4>Email:</h4><p>'.$email.'</p>
	<h4>Telefon kontaktowy:</h4><p>'.$phone.'</p>
	<h4>Treść wiadomości:</h4><p>'.$message.'</p>
	<h4>Paczka:</h4><p>'.$parcel.'</p>
	<h4>Wiadomość wysłana ze strony: </h4><p>'.$_SERVER['HTTP_HOST'].'</p>';
    $from = $_POST['email'];
    $message = $_POST['msg'];  
        
    //Actual sending email
    $sendEmail = new Sender($adminEmail, $from, $subject,$body, $message);
    $sendEmail->send();
} else {
 // tell the user about error
 echo json_encode(
     [
        "sent" => false,
        "message" => $SendMailFailederrorMessage
     ]
 );
}