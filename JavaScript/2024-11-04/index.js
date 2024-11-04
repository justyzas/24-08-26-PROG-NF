import Marathon from "./classes/Marathon.js";
import Runner from "./classes/Runner.js";

const runner1 = new Runner("Algirdas", "Laiškauskas", 26, 70);

const marathon = new Marathon();

marathon.pridetiBegika(runner1);
console.log(marathon);
