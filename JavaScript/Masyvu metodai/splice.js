const months = ["Sausis", "Vasaris", "Kovas", "Balandis", "Gegužė"];

// Splice metodas gali pasalinti, arba prideti elementus i masyvo tam tikra indeksa
// splice(start)
// splice(start, deleteCount)
// splice(start, deleteCount, item1)
// splice(start, deleteCount, item1, item2)
// splice(start, deleteCount, item1, item2, /* …, */ itemN)

// Dvieju men pasalinimas nuo antrojo indekso
months.splice(2, 2);
console.log(months); //['Sausis', 'Vasaris', 'Gegužė']

// 0 menesiu pasalinimas nuo antros pozicijos ir dvieju reiksmiu ten iterpimas
months.splice(2, 0, "Kovas", "Balandis");
console.log(months); //["Sausis", "Vasaris", "Kovas", "Balandis", "Gegužė"]
