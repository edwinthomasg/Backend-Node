let gridOptions = {
  columnDefs: [
    { headerName: "Full name of Athlete", field: "athlete" },
    { headerName: "The Age of the athlete", field: "age" },
    { headerName: "Country belongs to", field: "country" },
    { headerName: "Sport that he plays", field: "sport" },
    { headerName: "Total awards received by him ", field: "total" },
  ],
  defaultColDef: {
    initialWidth: 150,
    resizable: true,
    wrapHeaderText: true,
    autoHeaderHeight: true
  }
};

document.addEventListener("DOMContentLoaded", () => {
  let grid = document.getElementById("grid");
  new agGrid.Grid(grid, gridOptions);
});

fetch("https://www.ag-grid.com/example-assets/olympic-winners.json")
  .then((response) => response.json())
  .then((data) => gridOptions.api.setRowData(data));
