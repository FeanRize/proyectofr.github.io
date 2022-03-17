<?php 
$destinatario = "yo@felipevanegas.com"; 
$asunto = "Mensaje enviado desde la web"; 
$cuerpo = ' 
<html> 
<head> 
   <title>Envío de correo</title> 
</head> 
<body>';
$cuerpo .= "Nombre: " . $_POST['nombre']."<br />";
$cuerpo .= "Correo: " . $_POST['correo']."<br />";
$cuerpo .= "Empresa: " . $_POST['empresa']."<br />";
$cuerpo .= "Teléfono: " . $_POST['telefono']."<br />";
$cuerpo .= "Mensaje: " . nl2br($_POST['mensaje'])."<br />";
$cuerpo .= '</body> 
</html> 
'; 

//para el envío en formato HTML 
$headers = "MIME-Version: 1.0\r\n"; 
$headers .= "Content-type: text/html; charset=UTF-8\r\n"; 

//dirección del remitente 
$headers .= "From:". $_POST['mail'] ."\r\n"; 

mail($destinatario,$asunto,$cuerpo,$headers);

header( 'Location: index.html' );

?>