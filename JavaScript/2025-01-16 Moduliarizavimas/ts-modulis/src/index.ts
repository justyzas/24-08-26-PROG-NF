import {Square, Circle, Rectangle} from "../index.js";
export function countArea(shape: Square | Circle | Rectangle) {
	const unit = shape.unit === undefined ? "" : `${shape.unit}²`;
	switch (shape.type) {
		case "circle":
			return `${Math.PI * shape.r ** 2}${unit}`;
		case "square":
			return `${shape.x ** 2}${unit}`;
		case "rectangle":
			return `${shape.x * shape.y}${unit}`;
		default:
			throw new Error("Provided shape did not fit to any known type");
	}
}

console.log(countArea({ y: 4, type: "rectangle", x: 5, unit: "m" }));
