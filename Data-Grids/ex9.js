let changeState = () => {
  return [
    { field: "name" },
    { field: "age", type: "unpin" },
    { field: "stack" },
    { field: "company" },
    { field: "location" },
  ];
};

let gridOptions = {
  columnDefs: [
    { field: "name" },
    { field: "age", type: ["numberFilter", "pinned"] },
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
    pinned: { pinned: "left" },
    unpin: { pinned: null }, //here state gets cleared and changes will be updated
    // unpin: { pinned: undefined }, if it is undefined then grid will omit this attribute and state will  be remained unchanged
  },
  onGridReady: () => {
    console.log("grid ready : ", gridOptions.columnApi.getColumns());
  },

  animateRows: true,
};
let setState = () => {
  gridOptions.api.setColumnDefs(changeState()); //here state will be changed
  console.log("grid ready : ", gridOptions.columnApi.getColumns());
};
let remove = () => {
  gridOptions.api.setColumnDefs([]);
};
let removePinned = () => {
  gridOptions.api.setColumnDefs(changeState());
  console.log("grid ready : ", gridOptions.columnApi.getColumns());
};

document.addEventListener("DOMContentLoaded", () => {
  let grid = document.querySelector("#grid");
  new agGrid.Grid(grid, gridOptions);
});

fetch("https://mocki.io/v1/9bf4a42e-8724-482a-976e-3ecac0058f7b")
  .then((data) => data.json())
  .then((result) => gridOptions.api.setRowData(result));
