import connection from "./mysql-connect.js";

async function getAllUsers() {
	const sql = "SELECT * FROM `users`";
	const [data] = await connection.query(sql);
	return data;
}
async function getOneUser(id) {
	const sql = `SELECT * FROM users WHERE id = ${id}`;
	const [data] = await connection.query(sql);
	return data[0];
}
async function insertIntoUsers(user) {
	const sql = `INSERT INTO users (username, password) VALUES('${user.username}', '${user.password}')`;
	const response = await connection.query(sql);
	console.log(response);
	// INSERT INTO table_name (column1, column2, column3, ...)
	// VALUES (value1, value2, value3, ...);
}
async function updateUser(id, updatedFields) {
	const fieldsToUpdate = Object.keys(updatedFields)
		.map((key) => `${key} = '${updatedFields[key]}'`)
		.join(", ");

	const sql = `UPDATE users SET ${fieldsToUpdate} WHERE id = ${id}`;
	const data = await connection.query(sql);
	console.log(data);
	return data;
}
async function deleteUser(id) {
	const sql = `DELETE FROM users WHERE id = ${id}`;
	const data = await connection.query(sql);
	console.log(data);
	return data;
}
// {
// username: "",
// password: ""
// }

// Visu naudotoju gavimas
// const allUsers = await getAllUsers();
// console.log(allUsers);

// Naudotojo iterpimas
// const newUser = {
// 	username: "Jonas",
// 	password: "951753ASDF",
// };
// insertIntoUsers(newUser);

// Vieno naudotojo gavimas
// const user = await getOneUser(3);
// console.log(user);

// Naudotojo atnaujinimas
// await updateUser(7, { username: "Julius", password: "naujasJuliausSlaptazodis" });
// await deleteUser(8);
