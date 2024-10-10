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
