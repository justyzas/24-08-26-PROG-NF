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

/*
<div class="product">
					<hr />
					<div class="product-details">
						<div class="image">
							<img
								src="https://placehold.co/200x200"
								alt="Produkto nuotrauka"
							/>
							<span class="discount">-17%</span>
						</div>
						<div class="details">
							<h4>${product.title}</h4>
							<p>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos
								iure voluptate architecto eligendi harum culpa id ipsum aliquam.
								Facere, vitae similique laboriosam placeat accusantium dicta
								expedita sapiente laborum corporis ratione.
							</p>
						</div>
						<div class="price-and-actions">
							<!-- <div class="price">87.99€</div> -->
							<div class="price-with-discount">
								<span class="discounted">250.00€</span>
								<span class="old-price">300.00€</span>
							</div>
							<button>Add to cart</button>
						</div>
					</div>
				</div>
*/
function generateProducts() {
	//sukamas ciklas
	//Visi produktai atvaizduojami .products klasę turinčiame dive

	//pridedame trukstamus laukelius
	const paruostiProduktai = produktai.map((product) => {
		return {
			...product,
			priceWithDiscount: (
				(product.price * (100 - product.discount)) /
				100
			).toFixed(2),
			displayPrice: product.price.toFixed(2),
		};
	});
	console.log(paruostiProduktai);
	let html = "";
	for (const produktas of paruostiProduktai) html += generateProduct(produktas);
	return html;
}

function generateProduct(product) {
	//generuoja produkta su nuolaida arba be
	let html = ""; //tekstas
	if (product.discount > 0)
		html = generateProductWithDiscount(product); //su nuolaida
	else html = generateProductWithoutDiscount(product); //be nuolaidos
	return html;
}

function generateProductWithDiscount(product) {
	return `<div class="product">
					<hr />
					<div class="product-details">
						<div class="image">
							<img
								src="https://placehold.co/200x200"
								alt="Produkto nuotrauka"
							/>
							<span class="discount">-${product.discount}%</span>
						</div>
						<div class="details">
							<h4>${product.title}</h4>
							<p>
								${product.description}
							</p>
						</div>
						<div class="price-and-actions">
							<div class="price-with-discount">
								<span class="discounted">${product.priceWithDiscount}€</span>
								<span class="old-price">${product.displayPrice}€</span>
							</div>
							<button>Add to cart</button>
						</div>
					</div>
				</div>`;
}
function generateProductWithoutDiscount(product) {
	return `<div class="product">
					<hr />
					<div class="product-details">
						<div class="image">
							<img
								src="https://placehold.co/200x200"
								alt="Produkto nuotrauka"
							/>
						</div>
						<div class="details">
							<h4>${product.title}</h4>
							<p>
								${product.description}
							</p>
						</div>
						<div class="price-and-actions">
							<div class="price">${product.displayPrice}€</div> 
							<button>Add to cart</button>
						</div>
					</div>
				</div>`;
}
