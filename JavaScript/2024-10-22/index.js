async function main() {
	const booksAndTypes = await getBooksAndBookTypesFromApi();
	// const booksWithoutTypes = booksAndTypes.books;
	// const types = booksAndTypes.types;
	// Alternatyva:
	const { books: booksWithoutTypes, types } = booksAndTypes;
	// Knygų su tipais atradimas
	const booksWithTypes = booksWithoutTypes.map((book) => {
		// Naudojamas spread operatorius objektui, siekiant naudoti visas reikšmes, kurias turi knyga
		// type atrandamas naudojant masyvo metodą find. lyginamas knygos tipas (id skaiciaus) su tipo id.
		return { ...book, type: types.find((type) => type.id == book.type) };
	});
	console.log(booksWithTypes);
	// Gaunamo obj. pavyzdys:
	// {
	// 	author: "Benas Lyris";
	// 	id: 6;
	// 	img: "https://in3.dev/knygos/imgs/1600844302_Kiekvienos_dienos_terapija.jpg";
	// 	price: 5.22;
	// 	time: 1729670025;
	// 	title: "Kiekvienos dienos terapija";
	// 	type: {
	//      id: 1
	//      title: "seimai ir vaikams"
	//  };
	// }
}
main(); //pradzios taskas
