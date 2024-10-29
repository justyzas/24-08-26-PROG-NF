import { language } from "../config.js"; // "LT"|"EN"
// JSON failu importas
import datesLang from "../lang/dates.js";
// import datesLang from "../lang/dates.json" with { type: "json" };
// import datesLang from "../lang/dates.json" assert { type: "json" };
// import datesLang from "data:application/json,../lang/dates.json" with { type: "json" };

export function whichDayOfWeek(day) {
	return datesLang[language].daysOfWeek[day];
}

export function whichMonth(monthNumber) {
	return datesLang[language].monthNames[monthNumber];
}

export const funkcijuRinkinys = {
	funkcija1() {
		console.log("funkcija1");
	},
	funkcija2() {
		console.log("funkcija2");
	},
	funkcija3() {
		console.log("funkcija3");
	},
};

// DEFAULT exportas
export default function () {
	console.log("DEFAULTAS");
}
