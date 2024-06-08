function procesarDatos() {
    const primerNombre = document.getElementById('primer-nombre').value;
    const segundoNombre = document.getElementById('segundo-nombre').value;
    const primerApellido = document.getElementById('primer-apellido').value;
    const segundoApellido = document.getElementById('segundo-apellido').value;
    const dni = document.getElementById('dni').value;
    const fechaNacimiento = new Date(document.getElementById('fecha-nacimiento').value);
    
    const nombreCompleto = primerNombre + ' ' + segundoNombre + ' ' + primerApellido + ' ' + segundoApellido;
    const ultimoDigitoDNI = dni.slice(-1);
    const edad = calcularEdad(fechaNacimiento);
    
    document.getElementById('nombre-completo').value = nombreCompleto;
    document.getElementById('ultimo-digito-dni').value = ultimoDigitoDNI;
    document.getElementById('edad').value = edad;
}

function calcularEdad(fechaNacimiento) {
    const hoy = new Date();
    const edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    const mes = hoy.getMonth() - fechaNacimiento.getMonth();
    
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
        return edad - 1;
    }
    
    return edad;
}
