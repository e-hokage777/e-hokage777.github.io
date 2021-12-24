<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

$fname = trim($_POST["fname"]);
$lname = trim($_POST["lname"]);
$email = trim($_POST["email"]);
$message = trim($_POST["message"]);

if($fname == "")
	echo "fname_null";
else if(strlen($fname) < 2)
	echo "fname_short";
else if($lname == "")
	echo "lname_null";
else if(strlen($lname) < 2)
	echo "lname_short";
else if($email == "")
	echo "email_null";
else if(!filter_var($email, FILTER_VALIDATE_EMAIL))
	echo "email_invalid";
else if($message == "")
	echo "message_null";
else if(strlen($message) < 2)
	echo "message_short";
else{
	require 'phpmailer/src/Exception.php';
	require 'phpmailer/src/PHPMailer.php';
	require 'phpmailer/src/SMTP.php';

	$mail = new PHPMailer;
	$mail->isSMTP();
	$mail->Host = "smtp.gmail.com";
	$mail->SMTPsecure = "tls";
	$mail->SMTPAuth = true;
	$mail->Username = ""; //can use my gmail address
	$mail->Password = ""; // can use my gmail password
	$mail->Port = 587;

	$mail->addReplyTo($email);
	$mail->setFrom($email);
	$mail->FromName = $name;
	$mail->addAddress("e.hokage777@gmail.com");

	$mail->isHTML(true);
	$mail->Subject = "subject";
	$mail->Body = $message;
	$mail->AltBody = "this is the body in plain text";

	if(!$mail->send()) {
		echo "Message could not be sent.";
		echo "Mailer Error: " .$mail->ErrorInfo;
	}
	else {
		echo "true";
	}
}
?>