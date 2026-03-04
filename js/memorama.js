// =============================
// VARIABLES MEMORAMA
// =============================

let cartasMemorama = [];
let primeraCarta = null;
let segundaCarta = null;
let bloqueo = false;
let parejasEncontradas = 0;
const totalParejas = 10;


// =============================
// INICIAR MEMORAMA
// =============================

function iniciarMemorama() {

    document.getElementById("contenedorTrivia").style.display = "none";

    document.getElementById("inicioMemorama").classList.add("oculto");
    document.getElementById("juegoMemorama").classList.remove("oculto");

    document.getElementById("mensajeFinalMemorama").innerHTML = "";

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

    let copia = [...elementos];
    copia.sort(() => Math.random() - 0.5);

    let seleccionados = copia.slice(0, totalParejas);

    cartasMemorama = [];

    seleccionados.forEach(elemento => {

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

        cartasMemorama.push({
            id: elemento.numero,
            contenido: `
                <div class="carta-contenido">
                    <p>${elemento.nombre}</p>
                </div>
            `
        });

    });

    cartasMemorama.sort(() => Math.random() - 0.5);

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

        if (parejasEncontradas === totalParejas) {

            setTimeout(() => {

                document.getElementById("mensajeFinalMemorama").innerHTML = `
                    <div style="text-align:center;">
                        <h2>🎉 ¡Felicidades!</h2>
                        <p>Completaste el memorama correctamente</p><br>
                        <button class="btn-principal" onclick="iniciarMemorama()">Volver a jugar</button>
                        <br><br>
                        <a href="juego.html" class="btn">Ver más juegos</a>
                    </div>
                `;

            }, 600);
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
