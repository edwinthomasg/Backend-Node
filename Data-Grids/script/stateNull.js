let gridOptions = {
  columnDefs: [
    { headerName: "athlete", field: "athlete" },
    { headerName: "age", field: "age" },
    { headerName: "country", field: "country" },
    { headerName: "sport", field: "sport" },
    { headerName: "year", field: "year" },
    { headerName: "date", field: "date" },
    { headerName: "gold", field: "gold" },
    { headerName: "silver", field: "silver" },
    { headerName: "bronze", field: "bronze" },
    { headerName: "total", field: "total" },
  ],
  defaultColDef: {
    width: 150,
    resizable: true,
    sortable: true,
    sort: "desc"
  },
};
let sort = () => {
  gridOptions.columnApi.applyColumnState({
    state: [{ colId: "athlete", sort: "asc" }],
    defaultState: { sort: null },
  });
  console.log(gridOptions.columnApi.getColumnState());
};

document.addEventListener("DOMContentLoaded", () => {
  let grid = document.getElementById("grid");
  new agGrid.Grid(grid, gridOptions);
});

fetch("https://www.ag-grid.com/example-assets/olympic-winners.json")
  .then((response) => response.json())
  .then((data) => gridOptions.api.setRowData(data));
