const comentarios = [
  {
    texto: "El mejor equipo con el que hemos trabajado, ¡muy recomendados!",
    nombre: "Gabriel Campos",
    cargo: "CEO, NovaTech",
    imagen: "https://i.pravatar.cc/150?img=1"
  },
  {
    texto: "Gracias a ellos nuestra marca ha crecido mucho online.",
    nombre: "Renata Flores",
    cargo: "Gerente de Marketing, Visionary Co.",
    imagen: "https://i.pravatar.cc/150?img=2"
  },
  {
    texto: "Transformaron nuestra idea en una solución digital real.",
    nombre: "Victoria Cruz",
    cargo: "Cofundadora, GreenLoop",
    imagen: "https://i.pravatar.cc/150?img=3"
  },
  {
    texto: "Siempre atentos y comprometidos con el proyecto.",
    nombre: "Gabriel Mendoza",
    cargo: "Responsable de Sistemas, LogiSmart",
    imagen: "https://i.pravatar.cc/150?img=4"
  },
  {
    texto: "Nos dieron soluciones efectivas y a tiempo.",
    nombre: "Sebastián Reyes",
    cargo: "Director Comercial, BlueBox",
    imagen: "https://i.pravatar.cc/150?img=5"
  },
  {
    texto: "La comunicación fue clara desde el inicio.",
    nombre: "Diego Hernández",
    cargo: "Jefa de Proyectos, Innova 360",
    imagen: "https://i.pravatar.cc/150?img=6"
  },
  {
    texto: "Superaron nuestras expectativas con creces.",
    nombre: "Renata Ramos",
    cargo: "CTO, ClickNet",
    imagen: "https://i.pravatar.cc/150?img=7"
  },
  {
    texto: "Fueron muy pacientes y profesionales.",
    nombre: "Mateo Núñez",
    cargo: "Diseñadora UX/UI, PixelDesigns",
    imagen: "https://i.pravatar.cc/150?img=8"
  },
  {
    texto: "Nos ofrecieron una solución moderna y escalable.",
    nombre: "Zoe López",
    cargo: "Coordinadora General, PlanificaYa",
    imagen: "https://i.pravatar.cc/150?img=9"
  },
  {
    texto: "Volveríamos a trabajar con ellos sin dudarlo.",
    nombre: "Paula Martínez",
    cargo: "Consultor de Tecnología, BrightTech",
    imagen: "https://i.pravatar.cc/150?img=10"
  },
  {
    texto: "Gran calidad técnica y humana.",
    nombre: "Renata Ramírez",
    cargo: "Líder de Innovación, Futura Digital",
    imagen: "https://i.pravatar.cc/150?img=11"
  },
  {
    texto: "¡Amamos nuestro nuevo sitio web!",
    nombre: "Martín Díaz",
    cargo: "Emprendedora, Viva Local",
    imagen: "https://i.pravatar.cc/150?img=12"
  },
  {
    texto: "El diseño quedó tal como lo imaginamos.",
    nombre: "Andrés Martínez",
    cargo: "Jefe de Operaciones, SmartFlow",
    imagen: "https://i.pravatar.cc/150?img=13"
  },
  {
    texto: "Una experiencia muy positiva de principio a fin.",
    nombre: "Valentina Ramírez",
    cargo: "Directora Creativa, Imagina",
    imagen: "https://i.pravatar.cc/150?img=14"
  },
  {
    texto: "Nos acompañaron en todo el proceso con empatía.",
    nombre: "Camila Vargas",
    cargo: "Desarrollador Web, Codeify",
    imagen: "https://i.pravatar.cc/150?img=15"
  },
  {
    texto: "Siempre disponibles para aclarar dudas.",
    nombre: "Sofía Ortiz",
    cargo: "Analista de Datos, DataScope",
    imagen: "https://i.pravatar.cc/150?img=16"
  },
  {
    texto: "Se nota que aman lo que hacen.",
    nombre: "Renata Núñez",
    cargo: "Community Manager, RedSocial Pro",
    imagen: "https://i.pravatar.cc/150?img=17"
  },
  {
    texto: "Nos explicaron todo paso a paso.",
    nombre: "Tomás González",
    cargo: "Ejecutiva Comercial, DigitalExpress",
    imagen: "https://i.pravatar.cc/150?img=18"
  },
  {
    texto: "Aportaron muchas ideas útiles y creativas.",
    nombre: "Camila Pérez",
    cargo: "Diseñador Gráfico, EstudioZ",
    imagen: "https://i.pravatar.cc/150?img=19"
  },
  {
    texto: "Mejoraron nuestra presencia digital en semanas.",
    nombre: "Andrés Ramos",
    cargo: "Product Manager, InnovarApp",
    imagen: "https://i.pravatar.cc/150?img=20"
  },
  {
    texto: "Se adaptaron a nuestras necesidades perfectamente.",
    nombre: "Renata López",
    cargo: "Agente de Ventas, FastDeals",
    imagen: "https://i.pravatar.cc/150?img=21"
  },
  {
    texto: "Amables, profesionales y muy eficientes.",
    nombre: "Camila Ortiz",
    cargo: "Asistente Ejecutiva, SolucionesYA",
    imagen: "https://i.pravatar.cc/150?img=22"
  },
  {
    texto: "El resultado final nos encantó.",
    nombre: "Renata Morales",
    cargo: "Gerente de Producto, DevCore",
    imagen: "https://i.pravatar.cc/150?img=23"
  },
  {
    texto: "¡Sin duda, una inversión que valió la pena!",
    nombre: "Mateo Reyes",
    cargo: "Encargada de TI, TecnoMundo",
    imagen: "https://i.pravatar.cc/150?img=24"
  },
  {
    texto: "Estamos felices con los resultados obtenidos.",
    nombre: "Ángel Gómez",
    cargo: "Co-Founder, RocketLabs",
    imagen: "https://i.pravatar.cc/150?img=25"
  }
];

let usadosRecientemente = [];

function obtenerComentariosAleatorios(cantidad = 3) {
  const disponibles = comentarios.filter((_, i) => !usadosRecientemente.includes(i));
  if (disponibles.length < cantidad) usadosRecientemente = [];

  const indices = [];
  while (indices.length < cantidad) {
    const index = Math.floor(Math.random() * comentarios.length);
    if (!indices.includes(index) && !usadosRecientemente.includes(index)) {
      indices.push(index);
    }
  }
  usadosRecientemente = indices;
  return indices.map(i => comentarios[i]);
}

function actualizarComentarios() {
  const nuevos = obtenerComentariosAleatorios();
  const tarjetas = document.querySelectorAll('#comentarios-container > div');

  tarjetas.forEach((card, i) => {
    const comentario = nuevos[i];
    card.querySelector('.comentario-texto').textContent = comentario.texto;
    card.querySelector('.comentario-nombre').textContent = comentario.nombre;
    card.querySelector('.comentario-cargo').textContent = comentario.cargo;
    card.querySelector('img').src = comentario.imagen;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  actualizarComentarios();
  setInterval(actualizarComentarios, 12000); // cada 3 minutos
});
