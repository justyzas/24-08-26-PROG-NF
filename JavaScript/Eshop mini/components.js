function deleteIcon(index) {
	return `<span
			class="icon icon-red"
			title="Pašalinti produktą"
            onclick="deleteProduct(${index})"
		>
			<i class="bi bi-trash-fill"></i>
		</span>`;
}
function updateIcon(index) {
	return `<span
			class="icon icon-blue"
			title="Atnaujinti produktą"
			onclick="openModal(${index})"
		>
			<i class="bi bi-pencil-fill"></i>
		</span>`;
}
function nav() {
	return `<nav>
				<h2>PARDUOTUVĖ</h2>
				<div>
					<a href="/shop">Shop</a>
					<a href="/">Admin</a>
				</div>
			</nav>
			<hr />`;
}
function fillNavs() {
	const navigations = document.querySelectorAll("Navigation"); // grazina elementų masyvą
	for (const navigation of navigations) navigation.innerHTML = nav();
}

fillNavs();
