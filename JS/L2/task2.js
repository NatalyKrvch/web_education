'use ctrict'

const fullNames = ["Anton Golubev", "Andrii Vasilenko", "Dmitrii Soroka", "Oleg Bayan"];

const firstNames = fullNames.map(person => { return person.split(" ", 1) });

const filterFirstNames = firstNames.filter(person => person != "Oleg");

console.log(filterFirstNames);