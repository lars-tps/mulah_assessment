const arr = [];

Papa.parse("Table_Input.csv", {
  download: true,
  skipEmptyLines: true,

  complete : csv => {
    const table1 = document.getElementById("table_1");
    table1.innerHTML = "";

    for (let row of csv.data) {
      const arrRow = [];
      let tr = table1.insertRow();
      for (let cell of row) {
        arrRow.push(cell);
        let td = tr.insertCell();
        td.innerHTML = cell;
      }
      arr.push(arrRow);
    }

    for (let row of arr) {
      const convertedInt = parseInt(row[1]);
      row[1] = convertedInt;
    }

    const alphaOperands = [0, 0];
    const betaOperands = [0, 0];
    const charlieOperands = [0, 0];

    for (let row of arr){
      if (row[0] === "A5") {
        alphaOperands[0] = row[1];
      } else if (row[0] === "A20") {
        alphaOperands[1] = row[1];
      } else if (row[0] === "A7") {
        betaOperands[1] = row[1];
      } else if (row[0] === "A15") {
        betaOperands[0] = row[1];
      } else if (row[0] === "A12") {
        charlieOperands[1] = row[1];
      } else if (row[0] === "A13") {
        charlieOperands[0] = row[1];
      }
    }

    const alphaValue = alphaOperands[0] + alphaOperands[1];
    const betaValue = betaOperands[0] / betaOperands[1];
    const charlieValue = charlieOperands[0] * charlieOperands[1];

    const table2Arr = [
      ["Category", "Value"],
      ["Alpha", alphaValue],
      ["Beta", betaValue],
      ["Charlie", charlieValue]
    ];

    const table2 = document.getElementById("table_2");
    table2.innerHTML = "";

    for (let row of table2Arr) {
      let tr = table2.insertRow();
      for (let cell of row) {
        let td = tr.insertCell();
        td.innerHTML = cell;
      }
    }
    
  }
});