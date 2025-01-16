export type Shape = "square" | "circle" | "rectangle";
export type Unit = "cm" | "dm" | "m" | "km" | "mm";

export type Square = {
	type: "square";
	x: number;
	unit?: Unit;
};

export type Circle = {
	type: "circle";
	r: number;
	unit?: Unit;
};

export type Rectangle = {
	type: "rectangle";
	x: number;
	y: number;
	unit?: Unit;
};
