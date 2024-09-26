// Sukurkite nenumeruotą sąrašą iš funkcijoje esančio masyvo ir pridėkite į HTML kodą
function createListInHtml(){
    const fruits = ["Obuolys", 'Mangas', 'Bananas', 'Drakono vaisius', 'Kriaušė'];
    let html = `<ul>`;
    for(let fruit of fruits){
        let sarasoElementas = `<li>${fruit}</li>`;//<li>Obuolys</li>
        html += sarasoElementas;
    }
    html+='</ul>';

    const fruitsDiv = document.getElementById('fruits');
    fruitsDiv.innerHTML += html;
}

function createListInHtmlWhile()
{
    const fruits = ["Obuolys", 'Mangas', 'Bananas', 'Drakono vaisius', 'Kriaušė'];
    let html = `<ul>`;

    let i = 0;
    while(i < fruits.length)
    {
        let sarasoElementas = `<li>${fruits[i]}</li>`;//<li>Obuolys</li>
        html+=sarasoElementas;

        i++;
    }
    console.log(i);
    html+='</ul>';
    const fruitsDiv = document.querySelector('#fruits');
    fruitsDiv.innerHTML += html;
}

createListInHtmlWhile();
createListInHtml();







{/* <table id="table">
        <thead>
           <tr>
                <th>#</th>
                <th>Vardas</th>
                <th>Pavarde</th>
                <th>Amzius</th>
           </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>1</td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>1</td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </tbody>
    </table> */}


// Sukurkite lentelę HTML'e nauydojantis kintamaisiais funkcijoje
function createTableInHtml()
{
    const columnNames = ['Eiles Numeris', 'Vardas', 'Pavarde', 'Amzius'];
    const namesColumn = ['Jonas', 'Ponas', 'Pomidoras'];
    const secondNameColumn = ['Storas', 'Plonas', 'Baklažanevičius'];
    const ageColumn = [28, 32, 36];
    let html = `<thead><tr>
                <th>${columnNames[0]}</th>
                <th>${columnNames[1]}</th>
                <th>${columnNames[2]}</th>
                <th>${columnNames[3]}</th>
           </tr>
        </thead>
        <tbody>`;

    for(let i = 0; i < namesColumn.length; i++)
    {
        let eilute = `<tr>
            <td>${i+1}</td>
            <td>${namesColumn[i]}</td>
            <td>${secondNameColumn[i]}</td>
            <td>${ageColumn[i]}</td>
        </tr>`;
        html += eilute;
    }
    html+=`</tbody>`;
    console.log(html)

    const tableElement = document.querySelector('#table');
    tableElement.innerHTML = html;
}

createTableInHtml();