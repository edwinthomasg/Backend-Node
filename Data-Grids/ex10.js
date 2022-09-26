let order1 = () => [
  { headerName: "Name", field: "name" },
  { headerName: "Location", field: "location" },
  { headerName: "Shipping", field: "shipping" },
  { headerName: "Rank", field: "rank" },
];
let order2 = () => [
  { headerName: "Location", field: "location" },
  { headerName: "Name", field: "name" },
  { headerName: "Rank", field: "rank" },
  { headerName: "Shipping", field: "shipping" },
  { headerName: "New Column", field: "new" }, //new column will be added at the end
];
let gridOptions = {
  columnDefs: order1(),
  rowData: [
    { name: "a2b", location: "siruseri", shipping: true, rank: 2 },
    { name: "a2b", location: "siruseri", shipping: true, rank: 2 },
    { name: "a2b", location: "siruseri", shipping: true, rank: 2 },
  ],
  maintainColumnOrder: true, //maintains same order for all the switching between group of columns
};
let set1 = () => {
  gridOptions.api.setColumnDefs(order1());
};
let set2 = () => {
  gridOptions.api.setColumnDefs(order2());
};

let saveState = () => {
  window.colState = gridOptions.columnApi.getColumnState();
  console.log("saved");
};
let restoreState = () => {
  if (window.colState !== "") {
    gridOptions.columnApi.applyColumnState({
      state: window.colState,
      applyOrder: true,
    });
    console.log(window.colState);
  } else console.log("NO State has been saved");
};
let reset = () => {
    gridOptions.columnApi.resetColumnState()
}
document.addEventListener("DOMContentLoaded", () => {
  let grid = document.getElementById("grid");
  new agGrid.Grid(grid, gridOptions);
});
