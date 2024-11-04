{
	/* <tr>
					<td>1.</td>
					<td>Tomas</td>
					<td>Janušauskas</td>
					<td>36</td>
					<td>82kg</td>
					<td>III</td>
				</tr> */
}

const tableBody = document.querySelector("#table-body");
export function addRunnerToTable(runner, category) {
	// reikia ID, svorioKategorija
	tableBody.innerHTML += `<tr>
					<td>1.</td>
					<td>Tomas</td>
					<td>Janušauskas</td>
					<td>36</td>
					<td>82kg</td>
					<td>III</td>
				</tr>`;
}
