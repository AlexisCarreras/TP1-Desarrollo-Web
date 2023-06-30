<?php
  // Recuperar los datos enviados por el formulario
  $nombre = $_POST["Nombre"];
  $correo = $_POST["CorreoElectrónico"];
  $motivo = $_POST["Motivo"];
  $mensaje = $_POST["Mensaje"];

  // Configurar el correo electrónico
  $destinatario = "alexiscarreras@hotmail.com";
  $asunto = "Presupuesto de proyecto";
  $cuerpo = "Nombre: $nombre\nCorreo electrónico: $correo\nMotivo: $motivo\nMensaje: $mensaje";

  // Enviar el correo electrónico
  if (mail($destinatario, $asunto, $cuerpo)) {
    echo "Mensaje enviado correctamente";
  } else {
    echo "Hubo un problema al enviar el mensaje";
  }
?>
