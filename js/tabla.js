const tabla = document.getElementById("tabla");

elementos.forEach(elemento => {

    const div = document.createElement("div");
    div.classList.add("elemento", elemento.tipo);

    div.innerHTML = `
        <strong>${elemento.numero}</strong>
        <h3>${elemento.simbolo}</h3>
        <small>${elemento.nombre}</small>
    `;

    // 🔥 AQUÍ ESTÁ LA CLAVE
    div.style.gridColumn = elemento.grupo;
    div.style.gridRow = elemento.periodo;

    div.onclick = () => mostrarInfo(elemento);

    tabla.appendChild(div);
});

function mostrarInfo(elemento) {
    document.getElementById("modal").style.display = "block";

    document.getElementById("infoElemento").innerHTML = `
        <h2>${elemento.nombre} (${elemento.simbolo})</h2>
        <p><strong>Número atómico:</strong> ${elemento.numero}</p>
        <p><strong>Grupo:</strong> ${elemento.grupo}</p>
        <p><strong>Período:</strong> ${elemento.periodo}</p>
        <p><strong>Clasificación:</strong> ${elemento.tipo}</p>
    `;
}

function cerrarModal() {
    document.getElementById("modal").style.display = "none";
}

