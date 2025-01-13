type Salis = "LT" | "LV" | "PL" | "DE"; //Iš anksto aprašytas string tipas

type SaliesObj = {
	id: number;
	pilnasPavadinimas: string;
	trumpinys?: Salis;
	// funkcija, kuri nieko nereturnina - jos tipas turėtų būti void;
	printMyself(): void;
};

type ValidationResult = {
	status: boolean;
	errorCode: "TOO_SHORT_USERNAME" | "PASSWORD_NO_UPPERCASE";
};
