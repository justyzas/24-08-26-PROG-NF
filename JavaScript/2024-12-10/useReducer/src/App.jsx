import { useReducer } from "react";
import { reducer } from "./reducers/productsReducer";

function kaina(kainaNum) {
	if (typeof kainaNum === "number") return kainaNum.toFixed(2);
	else {
		const kainaSk = +kainaNum;
		if (!isNaN(kainaSk)) return kainaSk.toFixed(2);
		return kainaNum;
	}
}

function App() {
	const [state, dispatch] = useReducer(reducer, {
		prekesPavadinimas: "",
		prekesVntKaina: 0,
		prekiuKiekis: 1,
		kainaBePvm: 0,
		kainaSuPvm: 0,
		allProducts: [],
	});

	// useState, useEffect, useReducer | 2 paskaitos kartojimo ->

	// useRef, useMemo, useCallback

	function handleNumberChange(e) {
		//neleisti įvesti neleistinų simbolių
		const newNumber = +e.target.value;
		if (isNaN(newNumber)) {
			return;
		}
		if (e.target.name === "pricePerUnit")
			dispatch({ type: "KeistiPrekesVntKaina", payload: newNumber });
		if (e.target.name === "quantity")
			dispatch({
				type: "KeistiPrekiuKieki",
				payload: newNumber - (newNumber % 1),
			});
	}

	return (
		<div>
			<div>
				<input
					type="text"
					name="productName"
					placeholder="Produkto pavadinimas"
					value={state.prekesPavadinimas}
					onChange={(e) => {
						dispatch({
							type: "KeistiPrekesPavadinima",
							payload: e.target.value,
						});
					}}
				/>
			</div>
			<div>
				<input
					type="text"
					name="pricePerUnit"
					placeholder="Vieneto kaina"
					onChange={handleNumberChange}
				/>
			</div>
			<div>
				<input
					type="number"
					name="quantity"
					placeholder="Kiekis"
					value={state.prekiuKiekis}
					onChange={handleNumberChange}
				/>
			</div>
			<div>
				<input
					readOnly
					type="text"
					name="subtotal"
					placeholder="Kaina be pvm"
					value={kaina(state.kainaBePvm)}
				/>
			</div>
			<div>
				<input
					type="text"
					name="total"
					readOnly
					placeholder="Kaina su PVM"
					value={kaina(state.kainaSuPvm)}
				/>
			</div>
			<button
				onClick={() => {
					dispatch({ type: "PridetiProduktaISarasa" });
				}}
			>
				Prideti produkta
			</button>
			<hr />

			<AllProducts allProducts={state.allProducts} />
		</div>
	);
}

function AllProducts({ allProducts }) {
	return (
		<>
			{allProducts.map((product, index) => (
				<div key={`product-${index}`}>
					<h3>{product.prekesPavadinimas}</h3>
					<p>
						<b>Vieneto kaina:</b> <i>{kaina(product.prekesVntKaina)}€</i>
					</p>
					<p>
						<b>Kiekis:</b> <i>{product.prekiuKiekis}</i>
					</p>
					<p>
						<b>Suma be PVM:</b> <i>{kaina(product.kainaBePvm)}€</i>
					</p>
					<p>
						<b>Suma su PVM:</b> <i>{kaina(product.kainaSuPvm)}€</i>
					</p>
					<hr />
				</div>
			))}
		</>
	);
}
export default App;
