// objetos literales

const persona = {
    nombre: 'Dennys',
    apellido: 'Lara',
    edad: 45,
    direcciones: {
        ciudad: 'Quito',
        zip: 444333,
        lat: 14.2323,
        lng: 34.9998,
    }
}
console.log('objetos lterales')
console.log(persona);
console.table(persona);
console.log({persona})

const persona2 = persona;
persona2.nombre = 'Javier';
console.log(persona2);
console.log(persona);

const persona3 = {...persona}; // clonación del objeto para que no se referencie
persona3.nombre = 'Kelly';
console.log(persona3);
console.log(persona);
