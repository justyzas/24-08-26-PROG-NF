// http://127.0.0.1:5500/temperatures.json
function sum(array) {
	// 1. ciklas
	// let suma = 0;
	// for (const number of array) suma += number;
	// return suma;
	// 2. reduce
	const suma = array.reduce((visuSuma, number) => visuSuma + number);
	return suma;
}
function average(array) {
	return sum(array) / array.length;
}

fetch("/data/temperatures.json")
	.then((resp) => resp.json())
	.then((data) => {
		setCity(data.temperatureData.city);
		// setCity(data['temperatureData']['city']);
		const temperaturuMasyvas = data.temperatureData.data;
		setFirstDate(temperaturuMasyvas[0].date);
		setEndDate(temperaturuMasyvas[temperaturuMasyvas.length - 1].date);
		fillTemperaturesTable(temperaturuMasyvas);
		const averageTemps = getDaysAverageTemperatures(temperaturuMasyvas);
		const minMaxTemps = findMinMaxAverageTemp(averageTemps);
		fillMaxAvgTempDate(minMaxTemps.max);
		fillMinAvgTempDate(minMaxTemps.min);
		//    data.temperatureData.data[data.temperatureData.data.length-1].date
	}); //asinchronine operacija
function setCity(city) {
	const spanElement = document.querySelector("#city");
	spanElement.innerText = city;
}
function setFirstDate(date) {
	const spanElement = document.querySelector("#start-date");
	spanElement.innerText = date;
}
function setEndDate(date) {
	const spanElement = document.querySelector("#end-date");
	spanElement.innerText = date;
}
function findMinMaxTemperature(temperatures) {
	const allTemperatures = Object.values(temperatures); //visos temperaturos
	const minTemperature = Math.min(...allTemperatures);
	const maxTemperature = Math.max(...allTemperatures);
	return { minTemperature, maxTemperature };
}

function findAverageTemperature(temperatures) {
	// tureti visu 24 val temperaturu suma
	const allTemperatures = Object.values(temperatures); //[]

	const rezultatas = average(allTemperatures); //Vidurkis
	return rezultatas;
}

function findMinMaxAverageTemp(arrTemperatures) {
	let max = arrTemperatures[0]; //15.9
	let min = arrTemperatures[0]; //15.9
	for (const dateData of arrTemperatures) {
		if (dateData.averageTemp > max.averageTemp) max = dateData; //16.4
		if (dateData.averageTemp < min.averageTemp) min = dateData; //15.5
	}
	return { min, max };
}

function getDaysAverageTemperatures(data) {
	const averageTemps = [];
	for (const tempData of data) {
		const averageTemp = findAverageTemperature(
			tempData.hourlyTemperatures
		).toFixed(1);
		averageTemps.push({ averageTemp: +averageTemp, date: tempData.date });
	}
	return averageTemps;
}

function fillTemperaturesTable(data) {
	let html = "";

	for (const tempData of data) {
		const minMaxTemps = findMinMaxTemperature(tempData.hourlyTemperatures);
		const averageTemp = findAverageTemperature(
			tempData.hourlyTemperatures
		).toFixed(1);
		html += `<tr>
                    <td>${tempData.date}</td>
                    <td>${minMaxTemps.minTemperature}</td>
                    <td>${minMaxTemps.maxTemperature}</td>
                    <td>${averageTemp}</td>
                </tr>`;
	}

	const tbody = document.querySelector("#average-temperatures"); //1. gaunam elementą
	tbody.innerHTML = html;
}

function fillMaxAvgTempDate(maxAvgTempAndDate) {
	const maxTempDateElement = document.querySelector("#max-avg-day");
	maxTempDateElement.innerText = `${maxAvgTempAndDate.date} - Vid. temp: ${maxAvgTempAndDate.averageTemp}`;
}

function fillMinAvgTempDate(minAvgTempAndDate) {
	const maxTempDateElement = document.querySelector("#min-avg-day");
	maxTempDateElement.innerText = `${minAvgTempAndDate.date} - Vid. temp: ${minAvgTempAndDate.averageTemp}`;
}
