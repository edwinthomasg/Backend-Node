let gridOptions = {
  columnDefs: [
    { field: "age", lockPosition: "right" },
    { field: "athlete", suppressMovable: true },
    { field: "year", lockPosition: "left" },
    { field: "country" },
    { field: "total", pinned: "left" },
  ],
  defaultColDef:{
    resizable: true,
    lockPinned: true
  },
  suppressDragLeaveHidesColumns: true,
};

document.addEventListener("DOMContentLoaded", () => {
  let grid = document.getElementById("grid");
  new agGrid.Grid(grid, gridOptions);
});

fetch("https://www.ag-grid.com/example-assets/olympic-winners.json")
.then(data => data.json())
.then(result => gridOptions.api.setRowData(result))