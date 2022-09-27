let initialState = () => {
  return [
    { field: "name", type: "pinned" },
    { field: "age" },
    { field: "stack" },
    { field: "company" },
    { field: "location" },
  ];
};

let gridOptions = {
  columnDefs: [
    { field: "name" },
    { field: "age", type: "numberFilter" },
    { field: "stack" },
    { field: "company" },
    { field: "location" },
  ],
  rowSelection: "multiple",
  defaultColDef: {
    width: 150,
    sortable: true,
    filter: "agTextColumnFilter",
    resizable: true,
  },
  columnTypes: {
    numberFilter: { filter: "agNumberColumnFilter" },
    pinned: { initialPinned: "left" },
  },
  onGridReady: () =>
    console.log("grid ready : ", gridOptions.columnApi.getColumns()),
  animateRows: true,
};
let initial = () => {
  console.log(initialState());
  gridOptions.api.setColumnDefs(initialState()); //here state will not be changed because initial attributes can be entered only when the columns are created
};
let remove = () => {
  gridOptions.api.setColumnDefs([]);
};
document.addEventListener("DOMContentLoaded", () => {
  let grid = document.querySelector("#grid");
  new agGrid.Grid(grid, gridOptions);
});

fetch("https://mocki.io/v1/9bf4a42e-8724-482a-976e-3ecac0058f7b")
  .then((data) => data.json())
  .then((result) => gridOptions.api.setRowData(result));
