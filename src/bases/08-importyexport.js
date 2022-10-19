
import { heroes } from "./data/heroes";

console.table(heroes);

const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);
console.log(getHeroeById(4));

const getHeroeByOwner = (owner) => heroes.filter(heroe => heroe.owner === owner);
console.table(getHeroeByOwner('Marvel'));