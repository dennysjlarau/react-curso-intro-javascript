// Desestructuración de Objetos
const persona = {
    nombre: 'Dennys', 
    edad: 44,
    clave: 'pass23',
    //rol: 'user',
}

const {edad, nombre, clave} = persona;
console.log(`edad: ${edad}, nombre: ${nombre} y clave: ${clave}`);

const retornarPersona = ({edad, clave, rol='admin'}) => {
    console.log(`edad: ${edad}, clave: ${clave} y rol: ${rol}`);
}
retornarPersona(persona);

const retornarPersona2 = ({edad, clave, rol='admin'}) => {
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.55566,
            lng: -12.33659,
        }
    }
}
console.table(retornarPersona2(persona));
const { nombreClave, anios, latlng } = retornarPersona2(persona);
console.log(nombreClave, anios, latlng);
// recomendable 
const {lat, lng} = latlng;
console.log(lat, lng);
