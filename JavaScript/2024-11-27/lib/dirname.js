import { fileURLToPath } from "url";
import path from "path";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
export default root;
