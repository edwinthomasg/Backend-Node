let rowDataA = [
  { make: "Toyota", model: "Celica", price: 35000 },
  { make: "Porsche", model: "Boxster", price: 72000 },
  { make: "Aston Martin", model: "DBX", price: 190000 },
];

let rowDataB = [
  { make: "Toyota", model: "Celica", price: 35000 },
  { make: "Ford", model: "Mondeo", price: 32000 },
  { make: "Porsche", model: "Boxster", price: 72000 },
  { make: "BMW", model: "M50", price: 60000 },
  { make: "Aston Martin", model: "DBX", price: 190000 },
];

let gridOptions = {
  columnDefs: [{ field: "make" }, { field: "model" }, { field: "price" }],
  rowData: rowDataA,
  rowSelection: "single",
  animateRows: true,
};

function rowA() {
  gridOptions.api.setRowData(rowDataA);
}

function rowB() {
  gridOptions.api.setRowData(rowDataB);
}

document.addEventListener("DOMContentLoaded", function () {
  let gridDiv = document.getElementById("grid");
  new agGrid.Grid(gridDiv, gridOptions);
});
