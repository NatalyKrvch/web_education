'use strict'

const fullNames = ["Anton Golubev", "Andrii Vasilenko", "Dmitrii Soroka", "Oleg Bayan"];

const firstNames = fullNames.map(person => person.split(' ')[0]).filter(person => person !== "Oleg");

console.log(firstNames);