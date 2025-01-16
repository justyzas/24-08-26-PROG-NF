type ProductSaleData = {
	productName: string;
	category: string;
	unitsSold: number;
	pricePerUnit: number;
	sum?: number;
};

type ExcelWorksheetOptions = {
	worksheetName: string;
	title?: string;
	titleFont?: Partial<ExcelJS.Font>;
};

type HeaderMapOption = {
	key: string;
	header: string;
};
