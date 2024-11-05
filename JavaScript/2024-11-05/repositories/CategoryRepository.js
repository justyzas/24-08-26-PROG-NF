export default class CategoryRepository {
	static allCategories;
	static async getAllCategories() {
		const categoriesPromise = await fetch(
			"https://srv10.vibelink.lt/server/api/categories"
		);
		const categories = await categoriesPromise.json();
		return categories;
	}

	static async getCategory(id) {
		const categoryPromise = await fetch(
			`https://srv10.vibelink.lt/server/api/categories/${id}`
		);
		const category = await categoryPromise.json();
		return category;
	}

	static async addNewCategory(category) {
		const promise = await fetch(
			"https://srv10.vibelink.lt/server/api/categories/",
			{
				method: "post",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(category),
			}
		);
		const response = await promise.json();
		return response;
	}
}
// Gaunamos visos kategorijos
CategoryRepository.allCategories = await CategoryRepository.getAllCategories();
