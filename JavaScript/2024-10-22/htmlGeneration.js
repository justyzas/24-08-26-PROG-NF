// {
// 	author: "Benas Lyris";
// 	id: 6;
// 	img: "https://in3.dev/knygos/imgs/1600844302_Kiekvienos_dienos_terapija.jpg";
// 	price: 5.22;
// 	time: 1729670025;
// 	title: "Kiekvienos dienos terapija";
// 	type: {
//      id: 1
//      title: "seimai ir vaikams"
//  };
// }
function generateBook(book) {
	return `<div class="book">
					<img
						src="${book.img}"
					/>
					<div class="details">
						<h3>${book.title}</h3>
						<p><b>Kategorija:</b><span>${book.type.title}</span></p>
						<p><b>Data:</b><span>2022-12-08</span></p>
						<p><b>Autorius:</b><span>J.K. Rowling</span></p>
					</div>
					<div class="price">
						<h4>201.87€</h4>
						<button>Prideti i krepseli</button>
					</div>
				</div>`;
}
