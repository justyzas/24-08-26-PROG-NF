import mysql from "mysql2/promise";
let connection;
try {
	connection = await mysql.createConnection({
		host: "localhost",
		user: "root",
		database: "profiles",
		port: 3306,
		password: "",
	});
	console.log("Sekmingai prisijungta");
} catch (err) {
	console.log(err);
}
export default connection;
