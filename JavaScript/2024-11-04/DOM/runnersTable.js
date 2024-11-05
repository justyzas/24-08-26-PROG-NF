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
export function addRunnerToTable(runner) {
	// reikia ID, svorioKategorija
	tableBody.innerHTML += `<tr>
					<td>${runner.id}.</td>
					<td>${runner.name}</td>
					<td>${runner.secondName}</td>
					<td>${runner.age}</td>
					<td>${runner.weight}kg</td>
					<td>${runner.category}</td>
				</tr>`;
}
