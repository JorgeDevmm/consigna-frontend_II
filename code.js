/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: '',
  edad: 0,
  ciudad: '',
  interesPorJs: '',
};

const listado = [
  {
    imgUrl: 'https://huguidugui.files.wordpress.com/2015/03/html1.png',
    lenguajes: 'HTML y CSS',
    bimestre: '1er bimestre',
  },
  {
    imgUrl: 'https://jherax.files.wordpress.com/2018/08/javascript_logo.png',
    lenguajes: 'Javascript',
    bimestre: '2do bimestre',
  },
  {
    imgUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png',
    lenguajes: 'React JS',
    bimestre: '3er bimestre',
  },
];

const profileBtn = document.querySelector('#completar-perfil');
const materiasBtn = document.querySelector('#obtener-materias');
const verMasBtn = document.querySelector('#ver-mas');
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener('click', renderizarDatosUsuario);
materiasBtn.addEventListener('click', recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener('click', alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  datosPersona['nombre'] = prompt('Ingresar tu Nombre').toLowerCase();
  anioNacimiento = parseInt(prompt('Ingresar el año en que nacistes'));
  datosPersona['edad'] = 2024 - anioNacimiento;
  datosPersona['ciudad'] = prompt(
    'Ingresar la ciudad donde vives'
  ).toLowerCase();
  datosPersona['interesPorJs'] = confirm('Te interesa Javascript ');
}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  const nombre = document.querySelector('#nombre');
  const edad = document.querySelector('#edad');
  const ciudad = document.querySelector('#ciudad');
  const javascript = document.querySelector('#javascript');

  for (let datos in datosPersona) {
    nombre.textContent = datosPersona['nombre'];
    nombre.style.textTransform = 'capitalize';
    edad.textContent = datosPersona['edad'];
    ciudad.textContent = datosPersona['ciudad'];
    ciudad.style.textTransform = 'capitalize';
    javascript.textContent = datosPersona['interesPorJs'] ? 'Si' : 'No';
  }
}

function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */

  const fila = document.querySelector('#fila');

  while (fila.firstElementChild) {
    fila.removeChild(fila.firstElementChild);
  }

  listado.forEach((elemento) => {
    const caja = document.createElement('DIV');
    caja.classList.add('caja');

    const img = document.createElement('img');
    img.src = elemento.imgUrl;
    img.alt = elemento.lenguajes;
    caja.append(img);

    const parrafoLenguajes = document.createElement('p');
    parrafoLenguajes.classList.add('lenguajes');
    parrafoLenguajes.textContent = `Lenguajes: ${elemento.lenguajes}`;
    caja.append(parrafoLenguajes);

    const parrafoBimestre = document.createElement('p');
    parrafoBimestre.textContent = `Bimestre: ${elemento.bimestre}`;
    parrafoBimestre.classList.add('bimestre');
    caja.append(parrafoBimestre);

    fila.append(caja);
  });
}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  const sitio = document.querySelector('#sitio');

  if (sitio.classList.contains('dark')) {
    sitio.classList.remove('dark');
  } else {
    sitio.classList.add('dark');
  }
}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
window.addEventListener('keydown', mostrarParrafoOculto);

function mostrarParrafoOculto(evento) {
  const parrafoOculto = document.querySelector('#sobre-mi');

  if (evento.key.toUpperCase() === 'F') {
    parrafoOculto.classList.remove('oculto');
  }
}
