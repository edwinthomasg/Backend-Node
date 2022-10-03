let gridOptions = {
  columnDefs: [
    { field: "athlete" },
    { field: "age" },
    { field: "country" },
    { field: "year" },
    { field: "date" },
    { field: "sport" },
    { field: "gold" },
    { field: "silver" },
    { field: "bronze" },
    { field: "total" },
  ],
  defaultColDef: {
    resizable: true,
    sortable: true,
  },
  onGridReady: () => {
    // gridOptions.api.sizeColumnsToFit();
  },
};

let athleteAsc = () => {
  gridOptions.columnApi.applyColumnState({
    state: [{ colId: "athlete", sort: "asc" }],
    defaultState: { sort: null },
  });
  console.log(gridOptions.columnApi.getColumnState());
};

let athleteDesc = () => {
  gridOptions.columnApi.applyColumnState({
    state: [{ colId: "athlete", sort: "desc" }],
    defaultState: { sort: null },
  });
  console.log(gridOptions.columnApi.getColumnState());
};

let countryFirst = () => {
  gridOptions.columnApi.applyColumnState({
    state: [
      { colId: "country", sort: "asc", sortIndex: 1 },
      { colId: "sport", sort: "desc", sortIndex: 0},
    ],
    defaultState : { sort: null }
  });
};

let sportFirst = () => {};
document.addEventListener("DOMContentLoaded", () => {
  let grid = document.getElementById("grid");
  new agGrid.Grid(grid, gridOptions);
});

fetch("https://mocki.io/v1/6eab9b63-eef1-478c-9b67-5a305e161a52")
  .then((data) => data.json())
  .then((result) => gridOptions.api.setRowData(result));
