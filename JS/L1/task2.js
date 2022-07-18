"use strict"

const ob = [{name: "vasya"}, {name: "oleg"}, {name: "petya"}, {name: "kostya"}, {name: "olena"}];

for (let i = 0; i < ob.length; i++) {
	let beg = ob[i].name.slice(0,1);
	beg = beg.toUpperCase();
	let end = ob[i].name.slice(1,name.length);
	let upperWord = beg + end;
	if (upperWord == "Oleg") {
		continue;
	}
	if (upperWord == "Kostya") {
		console.log(upperWord);
		break;
	}
	console.log(upperWord);
}