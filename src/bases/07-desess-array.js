// desectructuración de arreglos
const personajes = ['Dennys', 'Javier', 'Lara'];
console.table(personajes);
//console.log(personajes[2]);

//desectructuración
const [parametro1] = personajes;
console.log(parametro1);

const[,parametro2] = personajes;
console.log(parametro2);

const retornarArreglo = () => {
    return ['ABC', 123];
}
const [letras, numeros] = retornarArreglo();
console.log(letras, numeros);


const ejemplo = (valor) => {
    return [valor, () => {console.log('Hola Mundo')}];
}
const arr = ejemplo('Kelly');
console.log(arr[0]);
arr[1]();

const [nombre, imprimirSaludo] = ejemplo('Geovanna');
console.log(nombre);
imprimirSaludo();
