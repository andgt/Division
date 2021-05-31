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
  $mail->setFrom("main@divizionsport.ru", "Divizion sport");
  //Получатель
  $mail->addAddress("divizionsport@yandex.ru");
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
  echo json_encode($response);
?>
