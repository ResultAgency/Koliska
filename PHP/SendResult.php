<?php
/**
 * Created by PhpStorm.
 * User: Администратор
 * Date: 26.10.2015
 * Time: 20:09
 */

$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "result.agency/lead_add");
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $_POST);

curl_exec($ch);
curl_close($ch);

//$to      = 'vtlkru@ex.ua';
//$subject = 'Колиска';
//$message = $_POST['name'].'|'.$_POST['email'].'|'.$_POST['telephone'];
//$headers = 'From: result@agency.com' . "\r\n" .
//    'Reply-To: vtlkru@ex.ua' . "\r\n" .
//    'X-Mailer: PHP/' . phpversion();
//
//mail($to, $subject, $message, $headers);
