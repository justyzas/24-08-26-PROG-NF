// Gauti informacija is settings.json bei is dateLanguage.json

// new Date();

// Reikia console.log'inti kelintadienis siandien yra
// pagal kalbą kuri yra pasirinkta settings.json faile

// 1. failu perskaitymas
// 2. failu duomenu pakeitimas is JSON tipo
// 3. siandienines dienos gavimas
// 4. informacijos istraukimas is turimos informacijos

import * as fs from "fs";

// JSON failo perskaitymas sinchroniniu budu
const settings = readJsonFile("settings.json");
const dateLanguage = readJsonFile("dateLanguage.json");

const weekDay = getTodaysWeekDay();
const weekDayTranslated = getTodaysWeekDayTranslated(
	settings.language,
	weekDay
);
// console.log(weekDayTranslated);

function readJsonFile(filePath) {
	const fileData = fs.readFileSync(filePath);
	const parsedData = JSON.parse(fileData);
	return parsedData;
}

function getTodaysWeekDay() {
	const currentDate = new Date();
	const weekDay = currentDate.getDay();
	return weekDay === 0 ? 7 : weekDay;
}

export function getTodaysWeekDayTranslated(language, weekDay) {
	return dateLanguage[language][weekDay];
}
