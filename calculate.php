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
  $mail->Subject = "Расчет стоимости";

  //Тело письма

  $body = "<h2>Запрос на расчет стоимости из формы на сайте</h2>";

  if (trim(!empty($_POST["formtitle"]))) {
    $body.="<p><strong>Вид запроса:</strong> ".$_POST["formtitle"]."</p>";
  }

  if (trim(!empty($_POST["namecalculate"]))) {
    $body.="<p><strong>Имя клиента:</strong> ".$_POST["namecalculate"]."</p>";
  }

  if (trim(!empty($_POST["phonecalculate"]))) {
    $body.="<p><strong>Номер телефона клиента:</strong> ".$_POST["phonecalculate"]."</p>";
  }

  if (trim(!empty($_POST["mailcalculate"]))) {
    $body.="<p><strong>Электронная почта клиента:</strong> ".$_POST["mailcalculate"]."</p>";
  }

  if (trim(!empty($_POST["numberofsetscalc"]))) {
    $body.="<p><strong>Количество комплектов:</strong> ".$_POST["numberofsetscalc"]."</p>";
  }

    //Прикрепление файла
  if (!empty($_FILES["file"]["tmp_name"])) {
      //путь загрузки
      $filePath = __DIR__ . "/files" . $_FILES["file"]["name"];
      //грузим файл
      if (copy($_FILES["file"]["tmp_name"], $filePath)) {
        $fileAttach = $filePath;
        $body.="<p>Фото прикреплено</p>";
        $mail->addAttachment($fileAttach);
      }
  };

  if (!empty($_FILES['file']['name'][0])) {
    foreach ($_FILES['file']['name'] as $key => $value) {
      $out_files[] = array("name"=>$_FILES['file']['name'][$key], "tmp_name" => $_FILES['file']['tmp_name'][$key]);
    }
      $filesSend = true;
  } else {
      $filesSend = false;
  }
  if ($filesSend) {
    foreach ($out_files as $k=>$v) {
        $mail->AddAttachment($out_files[$k]['tmp_name'], $out_files[$k]['name']);
    }
  };

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
