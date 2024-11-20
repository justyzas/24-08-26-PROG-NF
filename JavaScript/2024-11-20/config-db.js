import sqlite from "sqlite3";
import { open } from "sqlite";

sqlite.verbose();
function createDbConnection(filename) {
	return open({
		filename,
		driver: sqlite.Database,
	});
}
const dbFile = "./mano-db.db";

const db = await createDbConnection(dbFile);

const sqlStatement = `CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );`;
db.run(sqlStatement);

export default db;
