const skaiciai = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//['1 misisipe','10 misisipe', '2 misisipe', '3 misisipe' .... .. ]
const misisipes = skaiciai.map((skaicius) => "misisipe " + skaicius);
console.log(misisipes);
//misisipes.sort();
// ['1.00', '2.00' .... 10.00]
const valiutos = skaiciai.map((skaicius) => skaicius.toFixed(2));
console.log(valiutos);
// [
// { skaicius: 1, misisipe: "1 misisipe"},
//  {skaicius:2, misipe: "2 misisipe"},
// .... ,
//  {skaicius:10, misisipe: "10 misisipe"}
// ]
const objMisisipes = skaiciai.map((skaicius) => ({
	skaicius,
	misisipe: `${skaicius} misisipe`,
}));
console.log(objMisisipes);

// https://randomuser.me/api/
