function createHtmlProductsTable(products = produktai) {
	let htmlCode = "";
	for (const indeksas in products) {
		const product = products[indeksas];
		htmlCode += `<tr>
        <td>${deleteIcon(indeksas)}${updateIcon(indeksas)}</td>
        <td>${product.title}</td>
        <td>${product.description.slice(0, 15)}...</td>
        <td>${product.stock}</td>
        <td>${product.price}€</td>
        <td>${product.brand}</td>
        <td>${product.category}</td>
    </tr>`;
	}
	return htmlCode;
} //Generuojamas HTML kodas. String

function updateHtmlTable(products = produktai) {
	const htmlCode = createHtmlProductsTable(products);
	const tbodyElement = document.getElementById("products-list");
	tbodyElement.innerHTML = htmlCode;
}

function generateProducts() {
	//sukamas ciklas
	//Visi produktai atvaizduojami .products klasę turinčiame dive
}

function generateProduct(product) {
	//generuoja produkta su nuolaida arba be
	let html = "";
	if (product.discount > 0) html = generateProductWithDiscount(product);
	else html = generateProductWithoutDiscount(product);
	return html;
}

function generateProductWithDiscount(product) {}
function generateProductWithoutDiscount(product) {}
