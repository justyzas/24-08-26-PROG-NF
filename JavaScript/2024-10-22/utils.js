function generateDate(timestamp) {
	const date = new Date(timestamp * 1000);
	const year = date.getFullYear(); //2024
	const month = (date.getMonth() + 1).toString().padStart(2, "0"); //01
	const day = date.getDate().toString().padStart(2, "0"); //01

	return `${year}-${month}-${day}LABAS`;
}
