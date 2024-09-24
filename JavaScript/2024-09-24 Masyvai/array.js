// Masyvo tikslas: talpinti tokius pačius elementus viename kintamajame
// Masyvo (angl. Array) sukūrimas.

const array1 = []; // tuscias masyvas []
const array2 = new Array(); // tuscias masyvas []
const array3 = ['Tekstas1', 'Tekstas2']; // ["Tekstas1", "Tekstas2"]
const array4 = new Array(4); // masyvas su 4 tusciais elementais [empty, empty, empty, empty]
const array5 = new Array(10).fill(0); // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

// Idealiu atveju - elementai tokio paties tipo, ir laiko vienodas reikšmes.
const colors = ['red', 'green', 'blue'];

// Tačiau verta paminėti ir tai, kad masyvas gali turėti ir skirtingų tipų reikšmes.
const myPokemons = ['Pikachu', 'Chavisard', 'Bulbasaur', true, 8, [1,2,3]];

//Masyvo reikšmė
//             [  0       1        2        3       4       5        6     ]
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison', true, 'septintas'];

const pirmasGyvunas = beasts[0], //ant
antrasGyvunas = beasts[1], //bison
treciasGyvunas = beasts[2], //camel
ketvirtasGyvunas = beasts[3], //duck
penktasGyvunas = beasts[4], //bison
sestasGyvunas = beasts[5]; //true


const masyvoIlgis = beasts.length; // 7
const paskutinisGyvunas = beasts[beasts.length - 1]; // septintas

const kazkurisElementas = beasts[22]; // undefined


const bizonoPozicijaMasyve = beasts.indexOf('bison'); // 1

// Sekanti eilutė ieško tokios reikšmės elemento nuo 2 indekso:
const antroBizonoPozicijaMasyve = beasts.indexOf('bison', bizonoPozicijaMasyve + 1);// 4


const zirafosIndeksas = beasts.indexOf('giraffe');// -1

// if( zirafosIndeksas === -1) //zirafos nera masyve, darome ife veiksmus kai nera zirafos

const arZirafaEgzistuojaMasyve = beasts.includes("giraffe");//true arba false
// if(arZirafaEgzistuojaMasyve) //jei zirafa egzistuoja masyve, vykdome ife esančius veiksmus.


const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());// "Fire,Air,Water"
console.log(elements.join(''));// "FireAirWater"
console.log(elements.join('-'));// "Fire-Air-Water"
console.log(elements.join(' 0_0 '));// "Fire 0_0 Air 0_0 Water"



const naujasMasyvas = "4 0_0 5 0_0 6".split(' 0_0 ') // ['4', '5', '6']

function tekstasKaipSkaicius(tekstas)
{
    return Number(tekstas);
}
const naujasMasyvasSkaiciai = "4 0_0 5 0_0 6".split(' 0_0 ').map(tekstasKaipSkaicius); // [4, 5, 6]

//manipuliuoja masyvu ir prideda jo gale elementą "Earth"

elements.push("Earth");
console.log(elements); //['Fire', 'Air', 'Water', 'Earth']


//manipuliuoja masyvu ir prideda jo priekyje elementą "Rubber

elements.unshift("Rubber");
console.log(elements); //['Rubber', 'Fire', 'Air', 'Water', 'Earth']