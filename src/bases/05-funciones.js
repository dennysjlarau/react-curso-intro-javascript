// funciones
function saludar () { // no realizar de esta forma ya que puede ser reeplazado fácilmente
    return 'Hola Mundo';
}
console.log(saludar);
saludar = 33;
console.log(saludar);

const saludar2 = function() {
    return 'Hola Mundo';
}
console.log(saludar2);
//saludar2 = 44;
//console.log(saludar2);

// función fecha, elimina la palabra function y se añade => antes de las llaves
const saludar3 = (nombre) => {
    return `Hola Mundo flecha ${nombre}`;
}
const saludar4 = (nombre) => `Hola Mundo flecha ${nombre}`;
console.log(saludar3('dennys'));
console.log(saludar4('javier'));


// otra función flecha retornando un objeto
const getUser = () => ({
    uid: 'asdf',
    username: 'qwerzxcv'
})

const user = getUser();
console.log(user);


const getUsuarioActivo = (nombre) => ({
    uid: 'ASDF433', 
    username: nombre
})
const usuarioActivo = getUsuarioActivo('DJ');
console.table(usuarioActivo);
