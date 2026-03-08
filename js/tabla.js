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

    const ma = document.createElement("div");
    ma.innerHTML = "Metales <br> Alcalinos";
    ma.style.gridColumn = 5;
    ma.style.gridRow = 2;
    ma.style.background = "#110747";
    ma.style.color = "white";
    ma.style.textAlign = "center";
    ma.style.fontSize = "15px",
    ma.style.fontWeight = "bold";
    ma.style.padding = "5px";
    tabla.appendChild(ma);


    const mat = document.createElement("div");
    mat.innerHTML = "Metales <br> Alcalino-<br>térreos";
    mat.style.gridColumn = 6;
    mat.style.gridRow = 2;
    mat.style.background = "#c18e37";
    mat.style.color = "black";
    mat.style.textAlign = "center";
    mat.style.fontSize = "15px",
    mat.style.fontWeight = "bold";
    mat.style.padding = "5px";
    tabla.appendChild(mat);


    const ot = document.createElement("div");
    ot.innerHTML = "Otros <br> metales";
    ot.style.gridColumn = 7;
    ot.style.gridRow = 2;
    ot.style.background = "#4d2c65";
    ot.style.color = "white";
    ot.style.textAlign = "center";
    ot.style.fontSize = "15px",
    ot.style.fontWeight = "bold";
    ot.style.padding = "5px";
    tabla.appendChild(ot);

    const mt = document.createElement("div");
    mt.innerHTML = "Metales <br> transición";
    mt.style.gridColumn = 8;
    mt.style.gridRow = 2;
    mt.style.background = "#4946e4";
    mt.style.color = "white";
    mt.style.textAlign = "center";
    mt.style.fontSize = "15px",
    mt.style.fontWeight = "bold";
    mt.style.padding = "5px";
    tabla.appendChild(mt);

    const lat = document.createElement("div");
    lat.innerHTML = "Lantá-<br>nidos";
    lat.style.gridColumn = 9;
    lat.style.gridRow = 2;
    lat.style.background = "#4ccdbe";
    lat.style.color = "black";
    lat.style.textAlign = "center";
    lat.style.fontSize = "15px",
    lat.style.fontWeight = "bold";
    lat.style.padding = "5px";
    tabla.appendChild(lat);

    const ac = document.createElement("div");
    ac.innerHTML = "Actínidos";
    ac.style.gridColumn = 10;
    ac.style.gridRow = 2;
    ac.style.background = "#2e6b38cd";
    ac.style.color = "white";
    ac.style.textAlign = "center";
    ac.style.fontSize = "15px",
    ac.style.fontWeight = "bold";
    ac.style.padding = "5px";
    tabla.appendChild(ac);

   const mtl = document.createElement("div");
    mtl.innerHTML = "Meta-<br>loides";
    mtl.style.gridColumn = 12;
    mtl.style.gridRow = 2;
    mtl.style.background = "#af2828";
    mtl.style.color = "white";
    mtl.style.textAlign = "center";
    mtl.style.fontSize = "15px",
    mtl.style.fontWeight = "bold";
    mtl.style.padding = "5px";
    tabla.appendChild(mtl);

    const ha = document.createElement("div");
    ha.innerHTML = "Haló-<br>genos";
    ha.style.gridColumn = 11;
    ha.style.gridRow = 2;
    ha.style.background = "rgb(42, 120, 54)";
    ha.style.color = "white";
    ha.style.textAlign = "center";
    ha.style.fontSize = "15px",
    ha.style.fontWeight = "bold";
    ha.style.padding = "5px";
    tabla.appendChild(ha);


    
    const gn = document.createElement("div");
    gn.innerHTML = "Gases <br>nobles";
    gn.style.gridColumn = 9;
    gn.style.gridRow = 3;
    gn.style.background = "#d22487";
    gn.style.color = "white";
    gn.style.textAlign = "center";
    gn.style.fontSize = "15px",
    gn.style.fontWeight = "bold";
    gn.style.padding = "5px";
    tabla.appendChild(gn);

    const nm = document.createElement("div");
    nm.innerHTML = "No <br>Metal";
    nm.style.gridColumn = 8;
    nm.style.gridRow = 3;
    nm.style.background = "#ed6928";
    nm.style.color = "black";
    nm.style.textAlign = "center";
    nm.style.fontSize = "15px",
    nm.style.fontWeight = "bold";
    nm.style.padding = "5px";
    tabla.appendChild(nm);







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
