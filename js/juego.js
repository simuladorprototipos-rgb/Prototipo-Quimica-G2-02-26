// =============================
// VARIABLES DEL JUEGO
// =============================

let preguntasSeleccionadas = [];
let preguntaActual = 0;
let puntaje = 0;


// =============================
// INICIAR JUEGO
// =============================

function iniciarJuego() {

  // Ocultar memorama completo
  document.getElementById("contenedorMemorama").style.display = "none";

  document.getElementById("pantallaInicio").classList.add("oculto");
  document.getElementById("pantallaJuego").classList.remove("oculto");

  if (elementos.length < 10) {
    alert("Debes agregar más elementos para jugar.");
    return;
  }

  puntaje = 0;
  preguntaActual = 0;

  let copia = [...elementos];
  copia.sort(() => Math.random() - 0.5);

  preguntasSeleccionadas = copia.slice(0, 10);

  mostrarPregunta();
}


// =============================
// GENERAR PREGUNTA DINÁMICA
// =============================

function generarPregunta(elemento) {

  const tipoPregunta = Math.floor(Math.random() * 3);

  if (tipoPregunta === 0) {
    return {
      texto: `¿A qué grupo pertenece ${elemento.nombre} (${elemento.simbolo})?`,
      correcta: elemento.grupo,
      opciones: generarOpcionesNumericas(elemento.grupo, 18)
    };
  }

  if (tipoPregunta === 1) {
    return {
      texto: `¿En qué período se encuentra ${elemento.nombre} (${elemento.simbolo})?`,
      correcta: elemento.periodo,
      opciones: generarOpcionesNumericas(elemento.periodo, 7)
    };
  }

  return {
    texto: `¿Qué tipo de elemento es ${elemento.nombre} (${elemento.simbolo})?`,
    correcta: elemento.tipo,
    opciones: generarOpcionesTipo(elemento.tipo)
  };
}


// =============================
// GENERAR OPCIONES NUMÉRICAS
// =============================

function generarOpcionesNumericas(correcta, max) {

  let opciones = [correcta];

  while (opciones.length < 4) {
    let random = Math.floor(Math.random() * max) + 1;
    if (!opciones.includes(random)) {
      opciones.push(random);
    }
  }

  return opciones.sort(() => Math.random() - 0.5);
}


// =============================
// GENERAR OPCIONES TIPO
// =============================

function generarOpcionesTipo(correcta) {

  const tipos = ["Metal", "No metal", "Metaloide", "Gas noble"];
  let opciones = [correcta];

  while (opciones.length < 4) {
    let random = tipos[Math.floor(Math.random() * tipos.length)];
    if (!opciones.includes(random)) {
      opciones.push(random);
    }
  }

  return opciones.sort(() => Math.random() - 0.5);
}


// =============================
// MOSTRAR PREGUNTA
// =============================

function mostrarPregunta() {

  if (preguntaActual >= 10) {
    mostrarResultado();
    return;
  }

  document.getElementById("pantallaInicio").classList.add("oculto");
  document.getElementById("pantallaJuego").classList.remove("oculto");

  const progreso = (preguntaActual / 10) * 100;
  document.getElementById("barraProgreso").style.width = progreso + "%";

  document.getElementById("contador").innerText =
    `Pregunta ${preguntaActual + 1} de 10`;

  const elemento = preguntasSeleccionadas[preguntaActual];
  const pregunta = generarPregunta(elemento);

  document.getElementById("pregunta").innerText = pregunta.texto;

  const contenedor = document.getElementById("opciones");
  contenedor.innerHTML = "";

  pregunta.opciones.forEach(opcion => {

    let boton = document.createElement("button");
    boton.innerText = opcion;

    boton.onclick = function() {
      verificarRespuesta(boton, opcion, pregunta.correcta);
    };

    contenedor.appendChild(boton);
  });
}


// =============================
// VERIFICAR RESPUESTA
// =============================

function verificarRespuesta(boton, seleccion, correcta) {

  const botones = document.querySelectorAll("#opciones button");

  botones.forEach(b => b.disabled = true);

  if (String(seleccion) === String(correcta)) {
    boton.classList.add("correcta");
    puntaje++;
  } else {
    boton.classList.add("incorrecta");

    botones.forEach(b => {
      if (String(b.innerText) === String(correcta)) {
        b.classList.add("correcta");
      }
    });
  }

  setTimeout(() => {
    preguntaActual++;
    mostrarPregunta();
  }, 1000);
}


// =============================
// MOSTRAR RESULTADO FINAL
// =============================

function mostrarResultado() {

  document.getElementById("barraProgreso").style.width = "100%";

  let porcentaje = (puntaje / 10) * 100;
  let mensaje = "";

  if (porcentaje >= 90) mensaje = "Excelente 🏆";
  else if (porcentaje >= 70) mensaje = "Muy bien 👏";
  else if (porcentaje >= 50) mensaje = "Puedes mejorar 👍";
  else mensaje = "Repasa la teoría 📚";

  document.getElementById("pregunta").innerText = "Juego Terminado";

  document.getElementById("opciones").innerHTML = `
    <h3>Obtuviste ${puntaje}/10</h3>
    <p>${porcentaje}%</p>
    <p>${mensaje}</p>
    <button class="btn-principal" onclick="iniciarJuego()">Volver a jugar</button><br>
    <a href="juego.html" class="btn">Ver más juegos</a>
  `;
}
