// http://127.0.0.1:5500/temperatures.json

fetch('/data/temperatures.json')
.then((resp)=>resp.json())
.then((data)=>{
    setCity(data.temperatureData.city)
    setFirstDate(data.temperatureData.data[0].date)
    setEndDate(data.temperatureData.data[data.temperatureData.data.length-1].date)
    console.log(data.temperatureData.data)
    fillTemperaturesTable(data.temperatureData.data);
//    data.temperatureData.data[data.temperatureData.data.length-1].date
});//asinchronine operacija

function setCity(city)
{
    const spanElement = document.querySelector("#city");
    spanElement.innerText = city;
}
function setFirstDate(date)
{
    const spanElement = document.querySelector("#start-date");
    spanElement.innerText = date;
}
function setEndDate(date)
{
    const spanElement = document.querySelector("#end-date");
    spanElement.innerText = date;
}
function findMinMaxTemperature(temperatures)
{
    const allTemperatures = Object.values(temperatures);//visos temperaturos
    const minTemperature = Math.min(...allTemperatures);
    const maxTemperature  = Math.max(...allTemperatures);
    return {minTemperature, maxTemperature};
}

function fillTemperaturesTable(data)
{
    let html = '';
    for(const tempData of data)
    {
        const minMaxTemps = findMinMaxTemperature(tempData.hourlyTemperatures);
        html += `<tr>
                    <td>${tempData.date}</td>
                    <td>${minMaxTemps.minTemperature}</td>
                    <td>${minMaxTemps.maxTemperature}</td>
                </tr>`
    }
    const tbody = document.querySelector('#average-temperatures');//1. gaunam elementą
    tbody.innerHTML = html;
}



