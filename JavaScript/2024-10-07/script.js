const mas = ["labas", 4, {}, "reiksme", "temperatura"];

// for (const element of mas) console.log(element);
function printAll(...values) {
	for (const element of values) console.log(element);
}

printAll(4, 7, 96, 6, 4, true);
