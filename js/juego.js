function verificar() {

    let grupo = document.getElementById("grupo").value;
    let periodo = document.getElementById("periodo").value;
    let tipo = document.getElementById("tipo").value;

    if (grupo == "1" && periodo == "3" && tipo == "metal") {
        document.getElementById("resultado").innerHTML =
            "✅ ¡Correcto! El sodio es un metal alcalino del grupo 1 y período 3.";
    } else {
        document.getElementById("resultado").innerHTML =
            "❌ Incorrecto. Intenta nuevamente.";
    }
}