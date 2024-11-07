// import * as os from "os"
const os = require("os");

// Informacija apie šiuo metu naudojamus procesorius
console.log(os.cpus());

// Atminties gavimas iš os modulio
console.log((os.freemem() / 1024 / 1024 / 1024).toFixed(2)); //Atmintis GB
console.log(os.freemem() / 1024 / 1024); //Atmintis MB
console.log(os.freemem() / 1024); ////Atmintis kb
console.log(os.freemem()); //b

// Naudotojo aplankas
console.log(os.homedir());

// Naudotojo pavadinimas
console.log(os.hostname());
