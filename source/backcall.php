<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/Exception.php';

  $mail = new PHPMailer(true);
  $mail->CharSet = "UTF-8";
  $mail->setLanguage("ru", "phpmailer/language");
  $mail->IsHTML(true);

  //Отправитель
  $mail->setFrom("info@impulse-sport.pro","Impulse sport");
  //Получатель
  $mail->addAddress("implulsesportpro@gmail.com");
  //Тема письма
  $mail->Subject = "Заказ обратного звонка";

  //Тело письма
  
  $body = "<h2>Заказ обратного звонка из формы на сайте</h2>";
  
  if (trim(!empty($_POST["username"]))) {
    $body.="<p><strong>Имя клиента:</strong> ".$_POST["username"]."</p>";
  }

  if (trim(!empty($_POST["email"]))) {
    $body.="<p><strong>E-mail клиента:</strong> ".$_POST["email"]."</p>";
  }
  
  if (trim(!empty($_POST["tel"]))) {
    $body.="<p><strong>Номер телефона клиента:</strong> ".$_POST["tel"]."</p>";
  }
  
   $mail->Body = $body;

  //Отправка
  if (!$mail->send()) {
    $message = "Ошибка";
  } else {
    $message = "Данные отправлены";
  }

  $response = ["message" => $message];

  header("Content-type: application/json");
  header("Access-Control-Allow-Origin: *");
  header("Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT");
  header("Access-Control-Max-Age: 0");
  header("Content-Security-Policy: default-src *; connect-src *; script-src *; object-src *;");
  header("X-Content-Security-Policy: default-src *; connect-src *; script-src *; object-src *;");
  header("X-Webkit-CSP: default-src *; connect-src *; script-src 'unsafe-inline' 'unsafe-eval' *; object-src *;");
  echo json_encode($response);
?>
