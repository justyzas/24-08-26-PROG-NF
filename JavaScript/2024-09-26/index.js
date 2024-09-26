const autos = ['volvo', 'audi', 'bmw', 'mercedes'];

function createList()
{
    let html = "";
    const length = autos.length;
    for(let i = 0; i < length; i++)
    {
        html += `<li>${autos[i]}</li>`
    }
    const ulElement = document.querySelector('ul');
    ulElement.innerHTML = html;
}

function createListForIn()
{
    let html = "";
    for(let i in autos)//in raktažodis cikle reiškia kad deklaruojame indeksą kairėje
    {
        const auto = autos[i];
        html += `<li>${auto}</li>`;
    }
    const ulElement = document.querySelector('ul');
    ulElement.innerHTML = html;
}


function createListForOf()
{
    let html = "";
    for(let automobilis of autos)//of raktažodis cikle reiškia kad deklaruojame vieną iš masyvo elementų
    {
        html += `<li>${automobilis}</li>`
    }
    const ulElement = document.querySelector('ul');
    ulElement.innerHTML = html;
}
createListForIn()
// createList();