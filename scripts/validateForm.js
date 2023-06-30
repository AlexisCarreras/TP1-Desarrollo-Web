// Obtener referencia al formulario
var form = document.getElementById("contactForm");

// Manejar el evento de envío del formulario
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Evitar el envío del formulario

  // Obtener los valores de los campos
  var nombre = document.getElementById("Nombre").value;
  var email = document.getElementById("CorreoElectrónico").value;
  var motivo = document.getElementById("Motivo").value;
  var mensaje = document.getElementById("Mensaje").value;

  // Validar los campos
  var nombreError = document.getElementById("nombreError");
  var emailError = document.getElementById("emailError");
  var motivoError = document.getElementById("motivoError");
  var mensajeError = document.getElementById("mensajeError");
  nombreError.innerHTML = "";
  emailError.innerHTML = "";
  motivoError.innerHTML = "";
  mensajeError.value = "";

  if (nombre === "") {
    nombreError.innerHTML = "Por favor, ingresa tu nombre.";
  }

  if (email === "") {
    emailError.innerHTML = "Por favor, ingresa tu correo electrónico.";
  } else if (!isValidEmail(email)) {
    emailError.innerHTML = "Por favor, ingresa un correo electrónico válido";
  }

  if (motivo === "") {
    motivoError.innerHTML = "Indique su motivo.";
  }

  if (mensaje === "") {
    mensajeError.innerHTML = "Deje su mensaje.";
  }

  // Si hay errores, detener el envío del formulario
  if (
    nombreError.innerHTML !== "" ||
    emailError.innerHTML !== "" ||
    motivoError.innerHTML !== "" ||
    mensajeError.value !== ""
  ) {
    return;
  }

  // Enviar los datos o realizar acciones adicionales
  sendData(nombre, email, motivo, mensaje);

  // Restablecer el formulario
  form.reset();
});

// Función para validar el formato del correo electrónico
function isValidEmail(email) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Función para enviar los datos (ejemplo)
function sendData(nombre, email, motivo, mensaje) {
  // Simulación de envío de datos al servidor
  console.log("Datos enviados al servidor:");
  console.log("Nombre: " + nombre);
  console.log("Email: " + email);
  console.log("Nombre: " + motivo);
  console.log("Email: " + mensaje);
  alert("¡Gracias! Tus datos han sido enviados correctamente.");
}
