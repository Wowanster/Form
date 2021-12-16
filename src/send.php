<?php
$name = $_POST['FirstName'];
$SecondName = $_POST['SecondName'];
$Country = $_POST['Country'];
$Phone = $_POST['Phone'];
$password = $_POST['password'];
$email = $_POST['email'];

$to = "wowa.andrej@gmail.com";
$date = date("d,m,y");
$time = date("h:i");
$from = $email;
$subject = "Заявка с сайта";

$msg="
Имя: $name /n
Телефон: $Phone /n
Фамилие: $SecondName /n
Страна: $Country /n
Проль: $password /n
Емайл: $email";
mail($to, $subject, $msg, "from:$from");
?>