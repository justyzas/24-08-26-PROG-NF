//gauname produktus iš localStorage
const produktaiJSON = localStorage.getItem("produktai");
const produktai = produktaiJSON === null ? [] : JSON.parse(produktaiJSON);

const productsDiv = document.querySelector(".products");
productsDiv.innerHTML = generateProducts();
