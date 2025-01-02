import { Button } from "@mui/material";
import { useContext } from "react";
import ScootersContext from "../context/ScootersContext";
import ScooterCreateDialog from "./ScooterCreateDialog";

export default function ScooterActions() {
	// const [isOpen, setCreateModalOpen] = useState(false);
	const { selectedScooterId, createModal } = useContext(ScootersContext);
	return (
		<div>
			<Button
				variant="outlined"
				color="success"
				onClick={createModal.onOpen}
			>
				Sukurti
			</Button>
			<ScooterCreateDialog />
			<Button
				variant="outlined"
				color="primary"
				disabled={selectedScooterId === null}
			>
				Atnaujinti
			</Button>
			<Button
				variant="outlined"
				color="error"
				disabled={selectedScooterId === null}
			>
				Ištrinti
			</Button>
		</div>
	);
}
