<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['formData'])) {$formData = $_POST['formData'];}
    if (isset($_POST['name'])) {$name = $_POST['name'];}
    if (isset($_POST['phone'])) {$phone = $_POST['phone'];}
    if (isset($_POST['message'])) {$message = $_POST['message'];}
    $to = "rostelecom1001@gmail.com"; /*Укажите ваш адрес электронной почты*/
    $headers = "Content-type: text/plain; charset = utf-8";
    $subject = "$formData";
    $message = "$formData\n\nОтправитель: $name \n\nТелефон: $phone \n\nСообщение: $message";
    $send = mail ($to, $subject, $message, $headers);
    if ($send == 'true')
    {
    echo "<center><p class='add__message'>Спасибо за отправку вашего сообщения!<br>Наши специалисты свяжутся с вами в течение часа.</p></center><style>.add__message{background: yellow;padding-top: 30px;padding-bottom: 30px; font-size: 10px;color: #000;text-aligh: center;}</script>";
    }
    else 
    {
    echo "<center><b>Ошибка. Сообщение не отправлено! Проверьте правильность введенных данных</b></center>";
    }
} else {
    http_response_code(403);
    echo "Попробуйте еще раз";
}
?>