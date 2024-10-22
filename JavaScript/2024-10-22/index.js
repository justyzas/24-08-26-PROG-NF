async function main() {
	// const pradziosLaikas = new Date().getTime();
	const booksAndTypes = await getBooksAndBookTypesFromApi();
	const books = booksAndTypes.books;
	const types = booksAndTypes.types;
	// const pabaigosLaikas = new Date().getTime();
	// const trukmeMilisekundemis = pabaigosLaikas - pradziosLaikas;
	// console.log(`Trukmė - ${trukmeMilisekundemis}ms`);
}
main(); //pradzios taskas
