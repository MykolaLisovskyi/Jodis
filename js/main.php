<?php

/* https://api.telegram.org/bot971254816:AAFhWcDRVyCRVsygTr5Kjzf48TgIjmI0FX8/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$to = "wheatgrassdetox2017@gmail.com";
$subject = "Письмо с сайта";
$charset = "utf-8";
$headerss ="Content-type: text/html; charset=$charset\r\n";
$headerss.="MIME-Version: 1.0\r\n";
$headerss.="Date: ".date('D, d M Y h:i:s O')."\r\n";


$msg = "Jodis \r\n";
$msg .= "<br>".$_POST["nameForm"]."\r\n";
$msg .= "<br> Ім'я:".$_POST["name"]."\r\n";
$msg .= "<br> Телефон: ".$_POST["telephone"]."\n";

mail($to, $subject, $msg, $headerss);

?>
