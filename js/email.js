document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const mensajeInput = document.getElementById("mensaje");
      const mensaje = mensajeInput.value;

      const asunto = encodeURIComponent("Solicitud de información desde la web");
      const cuerpo = encodeURIComponent(mensaje);
      const destinatario = "ayi.digital.contacto@gmail.com";

      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${destinatario}&su=${asunto}&body=${cuerpo}`;
      window.open(gmailUrl, "_blank");

      //Limpiar el input después de abrir Gmail
      mensajeInput.value = "";
    });
  }
});
