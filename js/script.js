var nombres = [];

var AgregarNombre = (nombres, nombre) => nombres.push(nombre);
var LeerNombres = (nombres) => nombres.join('\n');
function Agregar() {
    var nombre = document.getElementById('Nombre').value;
    AgregarNombre(nombres, nombre);
    document.getElementById('Nombre').value = '';
    document.getElementById('Nombres').value = LeerNombres(nombres);
}