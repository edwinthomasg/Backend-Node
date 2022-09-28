let grid = document.getElementById("grid");

let gridOptions = {
  columnDefs: [
    { field: "athlete" },
    {
      field: "age",
      colSpan: (params) => (params.data.age === 23 ? 3 : 1),
    },
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
  //   onGridReady: () => {
  //     gridOptions.api.sizeColumnsToFit()
  //   }
};
let fitSize = () => {
    console.log("clicked")
  gridOptions.api.sizeColumnsToFit();
};
document.addEventListener("DOMContentLoaded", () => {
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
