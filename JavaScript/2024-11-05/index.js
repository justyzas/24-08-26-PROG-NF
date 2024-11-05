import ProductRepository from "./repositories/ProductRepository.js";

console.log(ProductRepository.allProducts);

ProductRepository.addNewProduct({
	categoryId: 6,
	price: 50,
	title: "Dekoratyvinis staliukas",
});
// const product = await getProduct(2);
// console.log(product);
