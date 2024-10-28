async function main() {
	const booksAndTypes = await getBooksAndBookTypesFromApi();
	// const booksWithoutTypes = booksAndTypes.books;
	// const types = booksAndTypes.types;
	// Alternatyva:
	const { books: booksWithoutTypes, types } = booksAndTypes;
	// Knygų su tipais atradimas
	console.log(booksWithoutTypes);
	console.log(types);
	const booksWithTypes = booksWithoutTypes.map((knyga) => ({
		...knyga,
		type: types.find((type) => type.id === knyga.type),
	}));
	// 'Lorem ipsum'
	const booksElement = document.querySelector(".books");
	booksElement.innerHTML = generateAllBooks(booksWithTypes);

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
