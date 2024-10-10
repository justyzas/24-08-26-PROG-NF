function deleteProduct(index) {
	const confirmation = confirm("Ar tikrai norite pašalinti šį produktą?");
	//true/false
	if (confirmation) {
		// Iš masyvo šalinamas 1 elementas pradedant nuo index pozicijos
		produktai.splice(index, 1);
		updateHtmlTable();
		localStorage.setItem("produktai", JSON.stringify(produktai));
	}
}
