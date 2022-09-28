let columnDefs = () => [
  { headerName: "S.NO", valueGetter: "node.id", width: 100 },
  { field: "athlete", pinned: "left", lockPinned: true },
  { field: "age", lockPinned: true },
  { field: "country" },
  { field: "year" },
  { field: "date" },
  { field: "sport" },
  { field: "gold" },
  { field: "silver" },
  { field: "bronze" },
];
let leftCountryDef = () => [
  { field: "athlete" },
  { field: "age" },
  { field: "country", pinned: "left" },
  { field: "year" },
  { field: "date" },
  { field: "sport" },
  { field: "gold" },
  { field: "silver" },
  { field: "bronze" },
];
let gridOptions = {
  columnDefs: columnDefs(),
  defaultColDef: {
    resizable: true,
  },
};

let clearPin = () => {
  gridOptions.columnApi.applyColumnState({
    defaultState: { pinned: null },
  });
};
let leftCountry = () => {
  gridOptions.columnApi.applyColumnState({
    state: [{ colId: "country", pinned: "left" }],
    defaultState: { pinned: null },
  });
};
let left = () => {
  gridOptions.columnApi.applyColumnState({
    state: [
      { colId: "athlete", pinned: "left" },
      { colId: "age", pinned: "left" },
      { colId: "0", pinned: "left" },
      { colId: "year", pinned: "right" },
    ],
    defaultState: { pinned: "null" },
  });
};
let row = () => {
  let value = document.getElementById("row").value;
  console.log(typeof value);
  if (typeof value !== "string" || typeof value === "") return;

  let index = Number(value);
  console.log(typeof index);
  if (typeof index !== "number") return;
  gridOptions.api.ensureIndexVisible(index);
};
let col = () => {
  let value = document.getElementById("col").value;
  console.log(typeof value);
  if (typeof value !== "string" || typeof value === "") return;
  let index = Number(value);
  console.log(typeof index);
  if (typeof index !== "number") return;
  let columns = gridOptions.columnApi.getColumns();
  console.log(columns[index]);
  gridOptions.api.ensureColumnVisible(columns[index]);
};
document.addEventListener("DOMContentLoaded", () => {
  let grid = document.getElementById("grid");
  new agGrid.Grid(grid, gridOptions);
});

fetch("https://www.ag-grid.com/example-assets/olympic-winners.json")
  .then((data) => data.json())
  .then((result) => {
    gridOptions.api.setRowData(result);
  })
  .catch((err) => {
    console.log(err);
  });
