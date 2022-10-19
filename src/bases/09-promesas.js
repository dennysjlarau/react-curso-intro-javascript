import { getHeroeById } from "./bases/08-importyexport";

// promesas
//console.table(getHeroeById(3));

const promesas = new Promise((resolve, reject) => {
    setTimeout(() => {
       const herore =  getHeroeById(3);
       //console.log(herore);
       resolve(herore);
    }, 2000);
});
promesas.then((heroe) => {
    console.log('Then de la promesa', heroe);
});

const promesas2 = new Promise((resolve, reject) => {
    setTimeout(() => {
       const herore =  getHeroeById(3);
       reject('no se puedo encontrar el heroe', herore);
    }, 2000);
});
promesas2.then((heroe) => {
    console.log('Then de la promesa', heroe);
})
.catch(err => console.warn(err));


const getHeroeByIdAsinc = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           const herore =  getHeroeById(id);
           if (herore) {
            resolve(herore);
           } else {
            reject('no se encontró heroe: ' + id)
           }
           
        }, 2000);
    }); 
}
getHeroeByIdAsinc(4)
    .then(console.table)
    .catch(console.error);
