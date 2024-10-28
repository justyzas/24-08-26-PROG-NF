// Iprastu kintamuju importas
import {
	powerOfSquare as programuotojoBPower,
	multiplyByTen as programuotojoBMultiply,
} from "./logFunctions.js";
import { powerOfSquare, multiplyByTen } from "./mathFunctions.js";
// Default importas
import PI from "./PI.js";

console.log(PI());
// const skaiciusKvadratu = powerOfSquare(3); //9
console.log(powerOfSquare("3"));
console.log(powerOfSquare(4));
console.log(powerOfSquare(5));

console.log(multiplyByTen(3));
console.log(multiplyByTen(4));
console.log(multiplyByTen(5));

console.log(programuotojoBPower());
