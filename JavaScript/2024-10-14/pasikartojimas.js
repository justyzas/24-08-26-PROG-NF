const balses = "aąeęėiyouūų";
const priebalses = "qwrtpsdfghjklzxcvbnm";

const raide = "?";
// // balses.includes(raide);//true/false

// if (balses.includes(raide.toLowerCase())) {
// 	console.log("Pateikta raidė yra balsė");
// } else {
// 	console.log("Pateikta raidė yra priebalsė");
// }
let monthInWord = "";
const month = 4;
switch (month) {
	case 1:
		monthInWord = "Sausis";
		break;
	case 2:
		monthInWord = "Vasaris";
		break;
	case 3:
		monthInWord = "Kovas";
		break;
	case 4:
		monthInWord = "Balandis";
		break;
	default:
		monthInWord = "Menuo nerastas";
}
// console.log(monthInWord);

const months = {
	1: "Sausis",
	2: "Vasaris",
	3: "Kovas",
	4: "Balandis",
};
console.log(months[3]);

// const balses = "aąeęėiyouūų";

// const raide = "Ū";
// 'balse'/'priebalse'
console.log(
	balses.includes(raide.toLowerCase())
		? "balse"
		: priebalses.includes(raide.toLowerCase())
		? "priebalse"
		: "Pateikta raidė yra ne raidė"
);
