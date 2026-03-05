let elementosClasificacion = [];
let aciertos = 0;
let elementoSeleccionado = null;


// =============================
// INICIAR CLASIFICACIÓN
// =============================

function iniciarClasificacion() {

    document.getElementById("contenedorTrivia").style.display = "none";
    document.getElementById("contenedorMemorama").style.display = "none";

    document.getElementById("inicioClasificacion").classList.add("oculto");
    document.getElementById("juegoClasificacion").classList.remove("oculto");

    generarElementosClasificacion();
}


// =============================
// GENERAR ELEMENTOS
// =============================

function generarElementosClasificacion() {

    limpiarZonas();

    const contenedor = document.getElementById("elementosArrastrables");
    contenedor.innerHTML = "";
    document.getElementById("resultadoClasificacion").innerHTML = "";

    aciertos = 0;

    let copia = [...elementos];
    copia.sort(() => Math.random() - 0.5);

    elementosClasificacion = copia.slice(0, 8);

    elementosClasificacion.forEach(el => {

        let div = document.createElement("div");
        div.classList.add("elemento-draggable");
        div.draggable = true;

        div.innerHTML = `
            <strong>${el.simbolo}</strong><br>
            <small>${el.nombre}</small>
        `;

        div.dataset.tipo = el.tipo;

        div.addEventListener("dragstart", e => {
            e.dataTransfer.setData("tipo", div.dataset.tipo);
            div.style.opacity = "0.5";
        });

        div.addEventListener("dragend", () => {
            div.style.opacity = "1";
        });

        contenedor.appendChild(div);
    });

    activarZonas();
}


// =============================
// ACTIVAR ZONAS
// =============================

function activarZonas() {

    const zonas = document.querySelectorAll(".zona");

    zonas.forEach(zona => {

        zona.ondrop = null;
        zona.ondragover = null;

        zona.addEventListener("dragover", e => e.preventDefault());

        zona.addEventListener("drop", e => {

            e.preventDefault();

            const tipoArrastrado = e.dataTransfer.getData("tipo");
            const elementoHTML = document.querySelector('[draggable="true"][style*="opacity: 0.5"]');

            if (!elementoHTML) return;

            if (zona.dataset.tipo === tipoArrastrado) {

                elementoHTML.classList.add("elemento-correcto");
                elementoHTML.draggable = false;

                zona.appendChild(elementoHTML);

                aciertos++;

                if (aciertos === elementosClasificacion.length) {
                    mostrarResultadoClasificacion();
                }

            } else {

                zona.classList.add("incorrecta-zona");

                setTimeout(() => {
                    zona.classList.remove("incorrecta-zona");
                }, 600);
            }

        });

    });
}


// =============================
// RESULTADO
// =============================

function mostrarResultadoClasificacion() {

    document.getElementById("resultadoClasificacion").innerHTML = `
        <h2>🎉 ¡Excelente!</h2>
        <p>Clasificaste todos correctamente</p><br>
        <button class="btn-principal" onclick="reiniciarClasificacion()">Volver a jugar</button>
        <br><br>
        <a href="juego.html" class="btn">Ver más juegos</a>
    `;
}


// =============================
// MODO CELULAR (CLICK)
// =============================

document.addEventListener("click", function(e){

    const elemento = e.target.closest(".elemento-draggable");
    const zona = e.target.closest(".zona");

    // -------------------------
    // SELECCIONAR ELEMENTO
    // -------------------------

    if(elemento && !elemento.classList.contains("elemento-correcto")){

        document.querySelectorAll(".elemento-draggable").forEach(el=>{
            el.style.border = "none";
        });

        elementoSeleccionado = elemento;
        elemento.style.border = "3px solid yellow";
        return;
    }


    // -------------------------
    // SELECCIONAR ZONA
    // -------------------------

    if(zona && elementoSeleccionado){

        const tipoElemento = elementoSeleccionado.dataset.tipo;
        const tipoZona = zona.dataset.tipo;

        if(tipoElemento === tipoZona){

            elementoSeleccionado.classList.add("elemento-correcto");
            elementoSeleccionado.draggable = false;

            zona.appendChild(elementoSeleccionado);

            elementoSeleccionado.style.border = "none";

            aciertos++;

            if(aciertos === elementosClasificacion.length){
                mostrarResultadoClasificacion();
            }

        }else{

            zona.classList.add("incorrecta-zona");

            setTimeout(()=>{
                zona.classList.remove("incorrecta-zona");
            },600);
        }

        // SIEMPRE deseleccionar
        elementoSeleccionado.style.border = "none";
        elementoSeleccionado = null;
    }

});


// =============================
// LIMPIAR ZONAS
// =============================

function limpiarZonas(){

    const zonas = document.querySelectorAll(".zona");

    zonas.forEach(zona => {

        const elementos = zona.querySelectorAll(".elemento-draggable");

        elementos.forEach(el => el.remove());

        zona.classList.remove("correcta-zona");
        zona.classList.remove("incorrecta-zona");
    });

}


// =============================
// REINICIAR
// =============================

function reiniciarClasificacion() {

    elementoSeleccionado = null;

    limpiarZonas();

    document.getElementById("elementosArrastrables").innerHTML = "";
    document.getElementById("resultadoClasificacion").innerHTML = "";

    generarElementosClasificacion();
}