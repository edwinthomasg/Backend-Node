let grid = document.getElementById("grid");

let gridOptions = {
  columnDefs: [
    { field: "athlete", suppressSizeToFit: true },
    { field: "age" },
    { field: "year" },
    { field: "country" },
    { field: "date" },
    { field: "total" },
    { field: "gold" },
    { field: "silver" },
    { field: "bronze" },
  ],
  defaultColDef: {
    resizable: true,
    
  },
  suppressColumnMoveAnimation: true,
  suppressDragLeaveHidesColumns: true
};
let moveMedalsFirst = () => {
  gridOptions.columnApi.moveColumns(["gold", "silver", "bronze", "total"], 0);
};
let moveMedalsLast = () => {
  gridOptions.columnApi.moveColumns(["total", "gold", "silver", "bronze"], 5);
};
let moveCountry = () => {
  gridOptions.columnApi.moveColumn("age", 0);
};
let swapTwo = () => {
  gridOptions.columnApi.moveColumnByIndex(0, 1);
};
let print = () => {
  gridOptions.columnApi.getAllGridColumns().map((col, index) => {
    console.log("index : ",index)
    console.log("col : ",col.getColId())
  })
};
new agGrid.Grid(grid, gridOptions);

fetch("https://www.ag-grid.com/example-assets/olympic-winners.json")
  .then((data) => data.json())
  .then((result) => {
    gridOptions.api.setRowData(result);
  })
  .catch((err) => {
    console.log(err);
  });
