import ExcelJS from "exceljs";

export type ProductSaleData = {
	productName: string;
	category: string;
	unitsSold: number;
	pricePerUnit: number;
	sum?: number;
};

export type ExcelWorksheetOptions = {
	worksheetName: string;
	title?: string;
	titleFont?: Partial<ExcelJS.Font>;
};

export type HeaderMapOption = {
	key: string;
	header: string;
};
