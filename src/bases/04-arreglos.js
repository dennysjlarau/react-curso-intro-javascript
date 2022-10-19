// arreglos
const arreglo = new Array(10); // crear así solo cuando tiene un tamaño fijo
arreglo.push(1);
console.table(arreglo);

const arreglo1 = [];
arreglo1.push(1); // no utilizar el push ya que modifica el objeto principal
arreglo1.push(2);
arreglo1.push(3);
arreglo1.push(4);
console.table(arreglo1);

const a2 = [1, 2, 3, 4];
let a3 = a2;
a3.push(5); // se agrega por referencia el 5 al arreglo 2
console.log(a2);
console.log(a3);

const a4 = [1, 2, 3, 4];
let a5 = [...a4, 5];
console.log(a4);
console.log(a5);

const a6 = a4.map( function (numero) {
    return numero * 2;
})

console.log(a4);
console.log(a6);