const add = (a, b) => a + b;

// Modulio eksportavimas su CommonJS modulių sistema
// Čia galime nurodyti bet kokią duomenų struktūrą, kurioje yra exportuojamos reikšmės
module.exports = { math: { sudetis: add } };
