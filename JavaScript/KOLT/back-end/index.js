import "./config/init-sequelize.js";
import express from "express";
import mainRouter from "./routes/mainRouter.js";
import { configDbSession } from "./config/setup-sessions.js";
const app = express();

app.use(express.json());
configDbSession(app);

app.use("/api", mainRouter);

app.listen(3000, () => {
	console.log("Development server has started, go to http://localhost/server/");
});
// http://localhost/server/api

// MVC
// Modelis - Paspirtukai, useriai, paspirtukų nuomos istorijos
// View 	- REACT
// Controllers - Kontroliuoja kas atsitinka

// 1. User modelio sukūrimas
// 2. Slaptažodžio hašavimo algoritmas
// 3. Sesijos konfiguravimas
// 4. Registracijos + prisijungimo routai
// 5. Registracijos bei prisijungimo formos.

// + app_config.js failas, pridėti back-end konfiguracijoms
