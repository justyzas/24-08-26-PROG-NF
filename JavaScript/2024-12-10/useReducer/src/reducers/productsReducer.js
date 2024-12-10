// state, action

// state:{
//     prekesVntKaina: 0,
//     prekiuKiekis: 0,
//     kainaBePvm: 0,
//     kainaSuPvm: 0
//     allProducts: []
// }

// action:
// {
//     type: "KeistiPrekesVntKaina",
//     payload: 7.50
// }

export function reducer(state, action) {
	switch (action.type) {
		case "KeistiPrekesVntKaina":
			return changeProductUnitPrice(state, action.payload);
		case "KeistiPrekiuKieki":
			return changeProductQuantity(state, action.payload);
		case "KeistiPrekesPavadinima":
			return { ...state, prekesPavadinimas: action.payload };
		case "PridetiProduktaISarasa":
			return addProductToList(state);

		default:
			throw new Error("No such action");
	}
}

function addProductToList(state) {
	const obj = {
		prekesPavadinimas: "",
		prekesVntKaina: 0,
		prekiuKiekis: 1,
		kainaBePvm: 0,
		kainaSuPvm: 0,
		allProducts: [
			...state.allProducts,
			{
				prekesPavadinimas: state.prekesPavadinimas,
				prekesVntKaina: state.prekesVntKaina,
				prekiuKiekis: state.prekiuKiekis,
				kainaBePvm: Number(state.kainaBePvm.toFixed(2)),
				kainaSuPvm: Number(state.kainaSuPvm.toFixed(2)),
			},
		],
	};
	console.log(obj);
	return obj;
}
function changeProductUnitPrice(state, newPricePerUnit) {
	return {
		...state,
		prekesVntKaina: newPricePerUnit,
		kainaBePvm: newPricePerUnit * state.prekiuKiekis,
		kainaSuPvm: newPricePerUnit * state.prekiuKiekis * 1.21,
	};
}
function changeProductQuantity(state, newQuantity) {
	return {
		...state,
		prekiuKiekis: newQuantity,
		kainaBePvm: newQuantity * state.prekesVntKaina,
		kainaSuPvm: newQuantity * state.prekesVntKaina * 1.21,
	};
}
