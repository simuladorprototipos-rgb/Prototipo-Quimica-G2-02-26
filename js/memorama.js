// =============================
// VARIABLES MEMORAMA
// =============================

let cartasMemorama = [];
let primeraCarta = null;
let segundaCarta = null;
let bloqueo = false;
let parejasEncontradas = 0;


// =============================
// INICIAR MEMORAMA
// =============================

function iniciarMemorama() {

    // Ocultar trivia
    document.getElementById("contenedorTrivia").style.display = "none";

    document.getElementById("inicioMemorama").classList.add("oculto");
    document.getElementById("juegoMemorama").classList.remove("oculto");

    crearTablero();
}


// =============================
// CREAR TABLERO
// =============================

function crearTablero() {

    const tablero = document.getElementById("tablero");
    tablero.innerHTML = "";

    parejasEncontradas = 0;
    primeraCarta = null;
    segundaCarta = null;
    bloqueo = false;

    // Mezclar elementos
    let copia = [...elementos];
    copia.sort(() => Math.random() - 0.5);

    // Tomar 5 elementos
    let seleccionados = copia.slice(0, 10);

    cartasMemorama = [];

    // Crear parejas (símbolo + nombre)
    seleccionados.forEach(elemento => {

        // Carta símbolo
        cartasMemorama.push({
            id: elemento.numero,
            contenido: `
                <div class="carta-contenido">
                    <h3>${elemento.simbolo}</h3>
                    <div class="grupo-periodo">
                        Grupo: ${elemento.grupo}<br>
                        Periodo: ${elemento.periodo}
                    </div>
                </div>
            `
        });

        // Carta nombre
        cartasMemorama.push({
            id: elemento.numero,
            contenido: `
                <div class="carta-contenido">
                    <p>${elemento.nombre}</p>
                </div>
            `
        });

    });

    // Mezclar cartas
    cartasMemorama.sort(() => Math.random() - 0.5);

    // Crear en el DOM
    cartasMemorama.forEach(carta => {

        const div = document.createElement("div");
        div.classList.add("carta");
        div.dataset.id = carta.id;
        div.dataset.contenido = carta.contenido;

        div.innerHTML = "?";

        div.addEventListener("click", voltearCarta);

        tablero.appendChild(div);
    });
}


// =============================
// VOLTEAR CARTA
// =============================

function voltearCarta() {

    if (bloqueo) return;
    if (this === primeraCarta) return;
    if (this.classList.contains("correcta")) return;

    this.innerHTML = this.dataset.contenido;
    this.classList.add("volteada");

    if (!primeraCarta) {
        primeraCarta = this;
        return;
    }

    segundaCarta = this;
    bloqueo = true;

    verificarPareja();
}


// =============================
// VERIFICAR PAREJA
// =============================

function verificarPareja() {

    if (primeraCarta.dataset.id === segundaCarta.dataset.id) {

        primeraCarta.classList.add("correcta");
        segundaCarta.classList.add("correcta");

        parejasEncontradas++;

        reiniciarTurno();

        if (parejasEncontradas === 10) {
            setTimeout(() => {
                alert("¡Felicidades! Completaste el memorama 🏆");
            }, 500);
        }

    } else {

        setTimeout(() => {

            primeraCarta.innerHTML = "?";
            segundaCarta.innerHTML = "?";

            primeraCarta.classList.remove("volteada");
            segundaCarta.classList.remove("volteada");

            reiniciarTurno();

        }, 900);
    }
}


// =============================
// REINICIAR TURNO
// =============================

function reiniciarTurno() {
    primeraCarta = null;
    segundaCarta = null;
    bloqueo = false;
}