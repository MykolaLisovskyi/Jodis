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
$msg .= "<br>".$_POST["nameForm2"]."\r\n";
$msg .= "<br> Ім'я та фамілія: ".$_POST["name2"]."\r\n";
$msg .= "<br> Адрес: ".$_POST["address2"]."\r\n";
$msg .= "<br> Email: ".$_POST["email2"]."\r\n";
$msg .= "<br> Телефон: ".$_POST["telephone2"]."\n";

mail($to, $subject, $msg, $headerss);

?>
