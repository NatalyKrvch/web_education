"use strict"

const ob = [{ name: "vasya" }, { name: "oleg" }, { name: "petya" }, { name: "kostya" }, { name: "olena" }];

function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

for (let i = 0; i < ob.length; i++) {
	let upperWord = capitalizeFirstLetter(ob[i].name);
	if (upperWord === "Oleg") {
		continue;
	}
	if (upperWord === "Kostya") {
		console.log(upperWord);
		break;
	}
	console.log(upperWord);
}