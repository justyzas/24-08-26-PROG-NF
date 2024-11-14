import repository from "./repository.js";

const { getAllUsers, getUserById, addUser, deleteUserById, updateUserById } =
	repository;

const users = await getAllUsers();
console.log(users);
generatePeopleList(users);
function generatePeopleList(users) {
	const ulElement = document.querySelector("#people-list");
	let liElementsHtml = "";
	users.forEach((user) => {
		liElementsHtml += `<li>${user.name} - ${user.age}</li>`;
	});
	ulElement.innerHTML = liElementsHtml;
}

// const user = await getUserById(1);
// console.log(user);

const newUserObject = {
	name: "Tomas",
	age: 29,
};
const newUser = await addUser(newUserObject);
console.log(newUser);

// await deleteUserById(4);

// await updateUserById(6, { age: 87 });

//Formos validavimo pavyzdys prieš ją išsiunčiant
const formElement = document.querySelector("#my-form");
formElement.addEventListener("submit", (event) => {
	const formData = new FormData(formElement);
	console.log(formData.get("age"));
	const userNameNumberValidation = /[0-9]/.test(formData.get("name"));
	const userNameSpaceValidation = /[ ]/.test(formData.get("name"));
	if (userNameNumberValidation) {
		event.preventDefault();
		alert("Forma negali būti išsiūsta, vardas neturi turėti skaičių");
	}
	if (userNameSpaceValidation) {
		event.preventDefault();
		alert("Forma negali būti išsiūsta, vardas neturi turėti tarpelių");
	}
	if (formData.get("age") > 100 || formData.get("age") < 0) {
		event.preventDefault();
		alert(
			"Forma negali būti išsiūsta, amžius negali būti didesnis nei 100 metų arba mažesnis nei 0"
		);
	}
});
