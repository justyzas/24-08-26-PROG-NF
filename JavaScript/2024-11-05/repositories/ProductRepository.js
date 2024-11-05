// CRUD

import CategoryRepository from "./CategoryRepository.js";

// C - Create
// R - Read
// U - Update
// D - Delete

// CRUD repozitorija turi galimybes:

// Perskaityti visus produktus
// Perskaityti konkretų produktą
// Pridėti naują produktą
// Ištrinti produktą
// Attnaujinti produktą

export default class ProductRepository {
	static allProducts;

	//Statinė funkcija priklauso ne pagal klasę sukurtam objektui
	// o pačiai klasei
	static async getAllProducts() {
		const productsPromise = await fetch(
			"https://srv10.vibelink.lt/server/api/products"
		);
		const products = await productsPromise.json();
		return products;
	}

	static async getProduct(id) {
		const productPromise = await fetch(
			`https://srv10.vibelink.lt/server/api/products/${id}`
		);
		const product = await productPromise.json();
		return product;
	}

	static async addNewProduct(product) {
		const promise = await fetch(
			"https://srv10.vibelink.lt/server/api/products/",
			{
				method: "post",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(product),
			}
		);
		const response = await promise.json();
		return response;
	}
}
// Gaunamos visos produktų reikšmės
ProductRepository.allProducts = await ProductRepository.getAllProducts();
// Sumappinamos visos produktų reikšmės su kategorijomis
ProductRepository.allProducts = await ProductRepository.allProducts.map(
	(product) => ({
		...product,
		category: CategoryRepository.allCategories.find(
			(category) => category.id === product.categoryId
		),
	})
);
