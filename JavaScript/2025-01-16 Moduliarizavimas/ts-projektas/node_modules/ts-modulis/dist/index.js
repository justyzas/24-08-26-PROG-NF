export function countArea(shape) {
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
