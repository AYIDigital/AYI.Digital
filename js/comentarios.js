const comentarios = [
  { nombre: "Renata González", comentario: "Me encantó el servicio de AYI Digital, fue rápido y profesional.", cargo: "Diseñadora UX", genero: "female" },
  { nombre: "Gabriel Mendoza", comentario: "Excelente atención y resultados impecables.", cargo: "Gerente de Marketing", genero: "male" },
  { nombre: "Camila Torres", comentario: "Muy recomendable, volveré sin dudarlo.", cargo: "Emprendedora", genero: "female" },
  { nombre: "Sofía Ramírez", comentario: "La calidad superó mis expectativas, muy satisfecha.", cargo: "Consultora de negocios", genero: "female" },
  { nombre: "Diego López", comentario: "Trabajo eficiente y atención amable en todo momento.", cargo: "Desarrollador Web", genero: "male" },
  { nombre: "Valentina Ruiz", comentario: "Servicio personalizado y resultados excepcionales.", cargo: "Especialista en Marketing Digital", genero: "female" },
  { nombre: "Juan Pérez", comentario: "Confianza total, repetiré sin duda alguna.", cargo: "Analista Financiero", genero: "male" },
  { nombre: "Isabella Soto", comentario: "Muy profesional y atento, me ayudaron muchísimo.", cargo: "Community Manager", genero: "female" },
  { nombre: "Carlos Mendoza", comentario: "Superó mis expectativas, atención rápida y eficaz.", cargo: "Gerente de Proyecto", genero: "male" },
  { nombre: "Lucía Fernández", comentario: "Amé cada detalle, el equipo fue increíble.", cargo: "Diseñadora Gráfica", genero: "female" },
  { nombre: "Andrés Martínez", comentario: "Muy buen servicio, recomendable para todos.", cargo: "Consultor IT", genero: "male" },
  { nombre: "Natalia Gómez", comentario: "Atención cercana y resultados de calidad.", cargo: "Especialista en SEO", genero: "female" },
  { nombre: "Ricardo Silva", comentario: "Todo perfecto en AYI, no tuve que preocuparme por nada.", cargo: "Coordinador de Ventas", genero: "male" },
  { nombre: "Mariana Vargas", comentario: "Trato excelente y trabajo impecable.", cargo: "Fotógrafa profesional", genero: "female" },
  { nombre: "Javier Castillo", comentario: "Rapidez y eficacia, muy satisfecho con el servicio.", cargo: "Ingeniero de Sistemas", genero: "male" },
  { nombre: "Ana Morales", comentario: "Super atentos y profesionales, lo recomiendo mucho.", cargo: "Consultora de RRHH", genero: "female" },
  { nombre: "Pablo Herrera", comentario: "El mejor servicio que he recibido en años.", cargo: "Administrador", genero: "male" },
  { nombre: "Gabriela León", comentario: "Calidad y profesionalismo en cada paso.", cargo: "Asesora de Imagen", genero: "female" },
  { nombre: "Fernando Reyes", comentario: "Servicio puntual y de gran calidad de AYI.", cargo: "Técnico de soporte", genero: "male" },
  { nombre: "Andrea Salazar", comentario: "Me hicieron sentir como en casa, 100% recomendado AYI.", cargo: "Relaciones Públicas", genero: "female" }
];

// Función para obtener N comentarios aleatorios diferentes
function obtenerComentariosAleatorios(n) {
  const indices = new Set();
  while(indices.size < n) {
    indices.add(Math.floor(Math.random() * comentarios.length));
  }
  return Array.from(indices).map(i => comentarios[i]);
}

function actualizarTarjetas() {
  const tarjetas = document.querySelectorAll("div.bg-gray-50");
  const comentariosAleatorios = obtenerComentariosAleatorios(tarjetas.length);

  tarjetas.forEach((tarjeta, index) => {
    const data = comentariosAleatorios[index];

    // Imagen random para el género y persona
    const numeroImagen = Math.floor(Math.random() * 100);
    const urlImagen = `https://randomuser.me/api/portraits/${data.genero === "male" ? "men" : "women"}/${numeroImagen}.jpg`;

    const img = tarjeta.querySelector("img");
    if(img){
      img.src = urlImagen;
      img.alt = `Foto de ${data.nombre}`;
    }

    const comentarioTexto = tarjeta.querySelector(".comentario-texto");
    if(comentarioTexto) comentarioTexto.textContent = `"${data.comentario}"`;

    const nombreSpan = tarjeta.querySelector(".comentario-nombre");
    if(nombreSpan) nombreSpan.textContent = data.nombre;

    const cargoSpan = tarjeta.querySelector(".comentario-cargo");
    if(cargoSpan) cargoSpan.textContent = data.cargo;
  });
}

// Ejecutar al cargar el DOM
document.addEventListener("DOMContentLoaded", () => {
  actualizarTarjetas(); // carga inicial
  setInterval(actualizarTarjetas, 2 * 60 * 1000); // cada 2 minutos
});
