let gridOptions = {
  columnDefs: [
    { field: "athlete" , sortingOrder: ['asc','desc']},
    { field: "age" , sortingOrder: ['desc','asc']},
    { field: "country", sortingOrder: ['desc',null] },
    { field: "year", sortingOrder: ['asc'] },
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
    sortingOrder: ['asc','desc',null]
  },
  onGridReady: () => {
    // gridOptions.api.sizeColumnsToFit();
  },
};

document.addEventListener("DOMContentLoaded", () => {
  let grid = document.getElementById("grid");
  new agGrid.Grid(grid, gridOptions);
});

fetch("https://mocki.io/v1/6eab9b63-eef1-478c-9b67-5a305e161a52")
  .then((data) => data.json())
  .then((result) => gridOptions.api.setRowData(result));
