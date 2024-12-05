import Button from "./Button";

export default function Paragraph(props) {
	return (
		<>
			<p className="paragrafas">
				lorem ipsum {props.labas} dolor sit amet <b>{props.paskutinisZodis}</b>
			</p>
			{/* <button>Skaityti daugiau</button> */}
			<Button>
				Skaityti <b>daugiau</b>
			</Button>
			<Button>patinka</Button>
		</>
	);
}
