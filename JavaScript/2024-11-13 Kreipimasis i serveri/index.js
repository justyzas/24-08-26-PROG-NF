import repository from "./repository.js";

const { getAllUsers, getUserById, addUser, deleteUserById, updateUserById } =
	repository;

// const users = await getAllUsers();
// console.log(users);

// const user = await getUserById(1);
// console.log(user);

// const newUserObject = {
// 	name: "Tomas",
// 	age: 29,
// };
const newUser = await addUser();
console.log(newUser);

// await deleteUserById(4);

// await updateUserById(6, { age: 87 });
