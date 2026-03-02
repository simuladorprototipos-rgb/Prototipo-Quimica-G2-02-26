const tabla = document.getElementById("tabla");

/* CREAR NÚMEROS DE GRUPOS */

for (let i = 1; i <= 18; i++) {

    const grupo = document.createElement("div");
    grupo.innerText = i;
    grupo.style.gridColumn = i + 1;
    grupo.style.gridRow = 1;

    grupo.style.fontWeight = "bold";
    grupo.style.display = "flex";
    grupo.style.alignItems = "center";
    grupo.style.justifyContent = "center";

    tabla.appendChild(grupo);
}

/* CREAR NÚMEROS DE PERÍODOS */

for (let i = 1; i <= 7; i++) {

    const periodo = document.createElement("div");
    periodo.innerText = i;
    periodo.style.gridColumn = 1;
    periodo.style.gridRow = i + 1;

    periodo.style.fontWeight = "bold";
    periodo.style.display = "flex";
    periodo.style.alignItems = "center";
    periodo.style.justifyContent = "center";

    tabla.appendChild(periodo);
}

/* PERÍODOS PARA BLOQUE F */

// Período 6 (Lantánidos)
const periodo6F = document.createElement("div");
periodo6F.innerText = "6";
periodo6F.style.gridColumn = 4;
periodo6F.style.gridRow = 10;
periodo6F.style.fontWeight = "bold";
periodo6F.style.display = "flex";
periodo6F.style.alignItems = "center";
periodo6F.style.justifyContent = "center";
tabla.appendChild(periodo6F);

// Período 7 (Actínidos)
const periodo7F = document.createElement("div");
periodo7F.innerText = "7";
periodo7F.style.gridColumn = 4;
periodo7F.style.gridRow = 11;
periodo7F.style.fontWeight = "bold";
periodo7F.style.display = "flex";
periodo7F.style.alignItems = "center";
periodo7F.style.justifyContent = "center";
tabla.appendChild(periodo7F);

/* CREAR ELEMENTOS */

elementos.forEach(elemento => {

    const div = document.createElement("div");
    div.classList.add("elemento", elemento.tipo);

    div.innerHTML = `
        <strong>${elemento.numero}</strong>
        <h3>${elemento.simbolo}</h3>
        <small>${elemento.nombre}</small>
    `;

    // BLOQUE F
    if (elemento.numero >= 57 && elemento.numero <= 71) {
        div.style.gridColumn = (elemento.numero - 56) + 4;
        div.style.gridRow = 10;
    }
    else if (elemento.numero >= 89 && elemento.numero <= 103) {
        div.style.gridColumn = (elemento.numero - 88) + 4;
        div.style.gridRow = 11;
    }
    else {
        div.style.gridColumn = elemento.grupo + 1;
        div.style.gridRow = elemento.periodo + 1;
    }

    div.onclick = () => mostrarInfo(elemento);

    tabla.appendChild(div);
});

/* INDICADORES */

    const lan = document.createElement("div");
    lan.innerHTML = "La–Lu";
    lan.style.gridColumn = 4;
    lan.style.gridRow = 7;
    lan.style.background = "#ddd";
    lan.style.textAlign = "center";
    tabla.appendChild(lan);

    const act = document.createElement("div");
    act.innerHTML = "Ac–Lr";
    act.style.gridColumn = 4;
    act.style.gridRow = 8;
    act.style.background = "#ddd";
    act.style.textAlign = "center";
    tabla.appendChild(act);

/* MODAL */
function mostrarInfo(elemento) {

    document.getElementById("modal").style.display = "block";

    document.getElementById("infoElemento").innerHTML = `
        <h2>${elemento.nombre} (${elemento.simbolo})</h2>
        <p><strong>Número atómico:</strong> ${elemento.numero}</p>
        <p><strong>Masa atómica:</strong> ${elemento.masa}</p>
        <p><strong>Grupo:</strong> ${elemento.grupo}</p>
        <p><strong>Período:</strong> ${elemento.periodo}</p>
        <p><strong>Clasificación:</strong> ${elemento.tipo}</p>
    `;
}

function cerrarModal() {
    document.getElementById("modal").style.display = "none";
}


