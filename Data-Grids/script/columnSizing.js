let gridOptions = {
  columnDefs: [
    { headerName: "athlete", field: "athlete" },
    { headerName: "age", field: "age" },
    { headerName: "country", field: "country" },
    { headerName: "year", field: "year" },
  ],
  defaultColDef: {
    resizable: true,
    width: 150,
    sortable: true,
  },
};

let autoSizeWithHeader = () => {
  console.log(gridOptions.columnApi.getAllGridColumns());
};

document.addEventListener("DOMContentLoaded", () => {
  let grid = document.getElementById("grid");
  new agGrid.Grid(grid, gridOptions);
});

fetch("https://www.ag-grid.com/example-assets/olympic-winners.json")
  .then((data) => data.json())
  .then((result) => gridOptions.api.setRowData(result));
