const masina = {
	marke: "AUDI",
	modelis: "A7",
	metai: 2023,
};

// Sukuriama tekstinė išraiška to paties objekto
const objektasKaipTekstas = JSON.stringify(masina);
//Serveris      /automobilis/kiek-dureliu
const gautasObjektas = JSON.parse(objektasKaipTekstas);

gautasObjektas.dureliuSkaicius = 4;

const issiunciamasRezultatas = JSON.stringify(gautasObjektas);
console.log(issiunciamasRezultatas);

//Atvaizduojama informacija kliente

// Hyper Text Tranfer Protocol
// /about-us
// JavaScript Object Notation
// "[4, 7, 8, 8]";
// "{ marke: "audi", modelis: "A7", metai: 2023, keleiviai: ["Jonas", "Petras"], vairuotojas: { vardas: "Jonas", amzius: 27, seimininePadetis: "nevedes"} }";
//
