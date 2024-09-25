// 1. Sukurkite funkciją kurtiSkaiciuMasyva(), kuri sukuria masyvą iš 10 elementų. masyvo tvarka: 1, 2 .... 9, 10
// 2. Patobulinkite funkciją, ir pridėkite parametrą, iki kurio skaičiuko reikia kurti masyvą; pvz.: 
// kurtiSkaiciuMasyva(20) duoda reikšmę [1,2, ...., 19, 20];
// 3. Patobulinkite funkciją, ir pridėkite parametrą, nuo kurio skaičiuko reikia kurti masyvą;
//  pvz.: kurtiSkaiciuMasyva(11,20) duoda reikšmę [11, 12, ... 19, 20];


// masyvas.push   - prideda reikšmę masyvo pabaigoje
function kurtiSkaiciuMasyva(max=10)
{
    const masyvas = [];
    for(let skaicius = 1; skaicius <= max; skaicius++)
    {
        masyvas.push(skaicius);
    }
    return masyvas;
}

function kurtiSkaiciuMasyvaNuoIki(min=1, max=10)
{
    const masyvas = [];
    for(let skaicius = min; skaicius <= max; skaicius++) masyvas.push(skaicius);

    return masyvas;
}

const rez1 = kurtiSkaiciuMasyva();
console.log(rez1);

const rez2 = kurtiSkaiciuMasyva(100);
console.log(rez2);

const rez3 = kurtiSkaiciuMasyvaNuoIki(20, 100);
console.log(rez3);

// 4. Sukurkite funkciją filtruotiLyginius(masyvas), kuris atrinktu iš masyvo tik lyginius skaičius. 
// pvz.: filtruotiLyginius([86,23,4]) duoda reikšmę [2, 4];

function filtruotiLyginius(masyvas)
{
    const lyginiai = [];
    for(let i = 0; i < masyvas.length; i++)
    {
        if(masyvas[i] % 2 === 0) lyginiai.push(masyvas[i]);
    }
    return lyginiai;
}

function filtruotiNelyginius(masyvas)
{
    const nelyginiai = [];
    for(let i = 0; i < masyvas.length; i++)
    {
        if(masyvas[i] % 2 === 1) nelyginiai.push(masyvas[i]);
    }
    return nelyginiai;
}

console.log(filtruotiLyginius([22, 11, 23, 24, 11, 44, 58, 59, 60, 62]));
console.log(filtruotiNelyginius([22, 11, 23, 24, 11, 44, 58, 59, 60, 62]));