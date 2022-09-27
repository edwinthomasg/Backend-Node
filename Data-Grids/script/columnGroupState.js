let gridOptions = {
  columnDefs: [
    {
      headerName: "Group A",
      children: [
        { field: "athlete" },
        { field: "country", columnGroupShow: "open" },
        { field: "sport", columnGroupShow: "open" },
        { field: "year", columnGroupShow: "open" },
        { field: "date", columnGroupShow: "open" },
      ],
    },
    {
      headerName: "Group B",
      children: [
        { field: "gold", columnGroupShow: "open" },
        { field: "silver", columnGroupShow: "open" },
        { field: "bronze", columnGroupShow: "open" },
        { field: "total", columnGroupShow: "closed" },
      ],
    },
  ],
};
let save = () => {
  window.colDef = gridOptions.columnApi.getColumnGroupState();
  console.log("saved : ", window.colDef);
};
let restore = () => {
  if (window.colDef !== "")
    gridOptions.columnApi.setColumnGroupState(window.colDef);
};
document.addEventListener("DOMContentLoaded", () => {
  let grid = document.getElementById("grid");
  new agGrid.Grid(grid, gridOptions);
});

fetch("https://www.ag-grid.com/example-assets/olympic-winners.json")
  .then((data) => data.json())
  .then((result) => gridOptions.api.setRowData(result))
  .catch((err) => console.log(err));
