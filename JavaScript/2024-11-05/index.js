import CategoryRepository from "./repositories/CategoryRepository.js";
import ProductRepository from "./repositories/ProductRepository.js";

console.log(ProductRepository.allProducts);
console.log(CategoryRepository.allCategories);

ProductRepository.addNewProduct({
	categoryId: 6,
	price: 50,
	title: "Dekoratyvinis staliukas",
});
// const product = await getProduct(2);
// console.log(product);
