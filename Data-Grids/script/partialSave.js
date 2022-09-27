let columnDefs = [
  { headerName: "athlete", field: "athlete" },
  { headerName: "age", field: "age" },
  { headerName: "country", field: "country", type: "pinned" },
  { headerName: "sport", field: "sport" },
  { headerName: "year", field: "year" },
  { headerName: "date", field: "date" },
  { headerName: "gold", field: "gold" },
  { headerName: "silver", field: "silver" },
  { headerName: "bronze", field: "bronze" },
  { headerName: "total", field: "total" },
];
let gridOptions = {
  columnDefs: columnDefs,
  defaultColDef: {
    // width: 150,
    flex: 100,
    resizable: true,
    sortable: true,
    sort: "desc",
  },
  columnTypes: {
    pinned: { pinned: "left" },
  },
};
let save = () => {
  window.colState = gridOptions.columnApi.getColumnState();
  console.log("saved");
  console.log(window.colState);
};
let restore = () => {
  if (window.colState !== "") {
    gridOptions.columnApi.applyColumnState({
      state: window.colState,
      applyOrder: true,
    });
    console.log(window.colState);
  } else console.log("NO State has been saved");
};
let removePin = () => {
  gridOptions.columnApi.applyColumnState({
    state: [{ colId: "country", pinned: null }]
  });
  console.log(gridOptions.api.getColumnDefs())
};

document.addEventListener("DOMContentLoaded", () => {
  let grid = document.getElementById("grid");
  new agGrid.Grid(grid, gridOptions);
});

fetch("https://www.ag-grid.com/example-assets/olympic-winners.json")
  .then((response) => response.json())
  .then((data) => gridOptions.api.setRowData(data));
