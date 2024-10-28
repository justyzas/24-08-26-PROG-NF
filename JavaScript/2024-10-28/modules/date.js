import { language } from "../config.js"; // "LT"|"EN"
// JSON failu importas
import datesLang from "../lang/dates.json" with { type: "json" };
// import datesLang from "data:application/json,../lang/dates.json" with { type: "json" };

export function whichDayOfWeek(day) {
	return datesLang[language].daysOfWeek[day];
}

export function whichMonth(monthNumber) {
	return datesLang[language].monthNames[monthNumber];
}

// DEFAULT exportas
export default function()
{
    console.log('DEFAULTAS')
};