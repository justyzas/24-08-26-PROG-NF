// 1GBP = 1.19EUR
// 1USD = 0.90EUR
// 1GBP = 1.32USD

// 1. deklaruok santykius
const GBPEUR = 1.19,
	USDEUR = 0.9,
	GBPUSD = 1.32;
// 2. Sužinok ką keisim į ką ir kiek.
const valiuta1 = prompt("Kokią valiutą norite keisti į kitą?");

const valiuta2 = prompt("Į kokią valiutą norite keisti");

const valiutos1KiekisText = prompt(
	`Kiek ${valiuta1} norite pakeisti į ${valiuta2}?`
);

// 3. Sutvarkome kintamųjų tipus
const valiutos1KiekisNumber = +valiutos1KiekisText;
let valiutos2KiekisNumber; //undefined
console.log(valiutos2KiekisNumber);
console.log(valiuta1, valiuta2, valiutos1KiekisNumber);
console.log(typeof valiuta1, typeof valiuta2, typeof valiutos1KiekisNumber);

if (valiuta1 == "EUR" && valiuta2 == "USD") {
	//EUR -> USD
	valiutos2KiekisNumber = valiutos1KiekisNumber / USDEUR;
} else if (valiuta1 == "USD" && valiuta2 == "EUR") {
	//USD -> EUR
	valiutos2KiekisNumber = valiutos1KiekisNumber * USDEUR;
}
// else if(){}//EUR -> GBP
// else if(){}//GBP -> EUR
// else if(){}//USD -> GBP
// else if(){}//GBP -> USD

console.log(`Keičiame ${valiutos1KiekisNumber} ${valiuta1} => ${valiuta2}`);
console.log(
	`${valiutos1KiekisNumber}${valiuta1} = ${valiutos2KiekisNumber}${valiuta2}`
);
