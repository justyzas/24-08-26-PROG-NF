import ExcelJS from "exceljs";

const headers = [
	"Produktas",
	"Kategorija",
	"Parduota(vnt.)",
	"Kaina(vnt.)",
	"Iš viso",
];
const keys = ["productName", "category", "unitsSold", "pricePerUnit", "sum"];

function createTableHeaders(
	row: number,
	column: number,
	headers: string[],
	sheet: ExcelJS.Worksheet
): void {
	headers.forEach((header, index) => {
		const cell = sheet.getCell(row, column + index);
		cell.value = header;
		cell.font = { bold: true };
		cell.alignment = { horizontal: "center" };
	});
}

function createTableData(
	data: any[],
	keys: string[],
	cell: ExcelJS.Cell,
	worksheet: ExcelJS.Worksheet
): void {
	data.forEach((saleData, rowIndex) => {
		//eina per duomenis (eilutes)
		keys.forEach((key, columnIndex) => {
			// eina per stulpelius
			const dataCell = worksheet.getCell(
				cell.fullAddress.row + rowIndex,
				cell.fullAddress.col + columnIndex
			);
			dataCell.value = saleData[key];
			if (key === "pricePerUnit" || key === "sum")
				dataCell.numFmt = '#,##0.00"€";[Red]-#,##0.00"€"';
		});
	});
}

function autoFitColumns(sheet: ExcelJS.Worksheet) {
	sheet.columns.forEach((column, index) => {
		let maxWidth = 10;
		column.eachCell((cell, rowNumb) => {
			if (rowNumb !== 1) {
				const cellValue = `${cell.value}`;
				console.log(cellValue);
				if (cellValue.length * 1.12 > maxWidth) {
					maxWidth = cellValue.length * 1.12;
				}
			}
		});
		console.log(`maxWidth ${maxWidth}`);
		column.width = maxWidth;
	});
}

export async function generateReport(data: ProductSaleData[]) {
	const workbook = new ExcelJS.Workbook(); // Excel workbooko sukūrimas
	const sheet = workbook.addWorksheet("Produktų pardavimo ataskaita"); // Excel darbo lapo sukūrimas

	sheet.mergeCells("A1:F1"); //Celių nuo A1 iki F1 sujungimas

	const a1 = sheet.getCell("A1"); // Celės gavimas pagal pavadinimą
	a1.value = "Produktų pardavimo ataskaita"; // Celės reikšmės pridėjimas
	a1.font = { name: "Calibri", size: 20, bold: true }; // Celės šrifto aprašymas
	a1.alignment = { horizontal: "center", vertical: "middle" }; // celės horizontalios ir vertikalios lygiuotės keitimas

	sheet.getRow(1).height = 55; // Eilutės aukščio numatymas

	createTableHeaders(4, 1, headers, sheet); //stulpeliu pavadinimu eilutes kurimas
	const tableStartCell = sheet.getCell("A5");
	createTableData(data, keys, tableStartCell, sheet); //Visos lentelės sukūrimas

	const tableEndRow = data.length + tableStartCell.fullAddress.row - 1;
	const tableEndColumn = keys.length + tableStartCell.fullAddress.col - 1;
	console.log("Eilute: " + tableEndRow);
	console.log("Stulpelis: " + tableEndColumn);

	sheet.getCell(tableEndRow + 1, tableEndColumn - 1).value = "Parduota už:";
	sheet.getCell(tableEndRow + 1, tableEndColumn - 1).font = { bold: true };
	sheet.getCell(tableEndRow + 2, tableEndColumn - 1).value = "Parduota prekių:";
	sheet.getCell(tableEndRow + 2, tableEndColumn - 1).font = { bold: true };

	let parduotuPrekiuKiekis = 0;
	let parduotuPrekiuBendraSuma = 0;

	for (const row of data) {
		parduotuPrekiuKiekis += row.unitsSold;
		parduotuPrekiuBendraSuma += row.sum === undefined ? 0 : row.sum;
	}

	const parduotuSumosCele = sheet.getCell(tableEndRow + 1, tableEndColumn);
	parduotuSumosCele.value = parduotuPrekiuBendraSuma;
	parduotuSumosCele.numFmt = '#,##0.00"€";[Red]-#,##0.00"€"';
	parduotuSumosCele.font = { italic: true };
	sheet.getCell(tableEndRow + 2, tableEndColumn).value = parduotuPrekiuKiekis;
	sheet.getCell(tableEndRow + 2, tableEndColumn).font = { italic: true };
	autoFitColumns(sheet);
	// console.log(sheet.columns);
	await workbook.xlsx.writeFile("report.xlsx"); // Excel woorkbook'o failo sukūrimas
}
