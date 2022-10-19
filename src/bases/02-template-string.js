// template string
const nombre = 'Dennys Javier';
const apellido = 'Lara Uquillas';

const nombreCompleto = nombre + ' ' + apellido;

console.log(nombreCompleto)

const otroNombre = `
El nombre es: ${nombre}
El apellido es: ${apellido}
${1+1}
`;
console.log(otroNombre);

function getSaludo(nombre) {
    return 'Hola Mundo ' + nombre;
}
console.log(`obtener saludo: ${getSaludo(nombreCompleto)}`)