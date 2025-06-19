const estudiantes = [];

document.getElementById("formularioEstudiante").addEventListener("submit", function(e) {
e.preventDefault();
const nombre = document.getElementById("nombre").value;
const grado = document.getElementById("grado").value;
const materia = document.getElementById("materia").value;

estudiantes.push({ nombre, grado, materia });
this.reset();
actualizarTabla();
});

function actualizarTabla() {
const div = document.getElementById("tablaEstudiantes");
let html = "<table border='1' cellpadding='5'><tr><th>Nombre</th><th>Grado</th><th>Materia Favorita</th></tr>";
estudiantes.forEach(est => {
html += `<tr><td>${est.nombre}</td><td>${est.grado}</td><td>${est.materia}</td></tr>`;
});
html += "</table>";
div.innerHTML = html;
}

function mostrarTabla() {
document.getElementById("tablaEstudiantes").style.display = "block";
}

function ocultarTabla() {
document.getElementById("tablaEstudiantes").style.display = "none";

}