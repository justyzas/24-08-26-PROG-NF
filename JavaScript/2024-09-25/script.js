// function pridetiPrieSkaiciausMisisipe(skaicius)
// {
//     const rezultatas = `${skaicius} misisipė`;
//     return rezultatas;
// }

// const masyvas = [1, 2, 3, 4, 5, 6].map(pridetiPrieSkaiciausMisisipe);
// masyvas.reverse();
// console.log(masyvas);


const raidziuMasyvas = "aakaaaaaaaa".split('');
console.log(raidziuMasyvas);

// raidziuMasyvas[0] += "Kebabas";
// raidziuMasyvas[1] += 2;
// raidziuMasyvas[2]=raidziuMasyvas[2]+3;

// while for
let dabartinisIndeksas = 0;

let arRastaKRaide = false;

// while(dabartinisIndeksas < raidziuMasyvas.length){
//     const dabartineRaide = raidziuMasyvas[dabartinisIndeksas];
//     console.log(dabartineRaide);

//     // break - nutraukia ciklą;
//     if(dabartineRaide === 'k') {
//         arRastaKRaide = true;
//         break;
//     }
    
//     dabartinisIndeksas++; 
// }
//1. apibreziamas kintamasis i - indeksas
//2. raidziuMasyvas.length = 8    2 < 8 T
//3. i+1     i = 2

for(let i = 0; i < raidziuMasyvas.length; i++){
    const dabartineRaide = raidziuMasyvas[i];
    console.log(dabartineRaide);
    // break - nutraukia ciklą;

    if(dabartineRaide === 'k') {
        arRastaKRaide = true;
        break;
    }
}



console.log(arRastaKRaide);




