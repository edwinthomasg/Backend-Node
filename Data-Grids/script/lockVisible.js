let grid = document.getElementById("grid");

let gridOptions = {
  columnDefs: [
    {
      headerName: "Athlete",
      children: [
        { field: "athlete" },
        { field: "age", lockVisible: true },
        { field: "country" },
        { field: "year" },
        { field: "date" },
        { field: "sport" },
      ],
    },

    {
      headerName: "Medals",
      children: [
        { field: "gold", lockVisible: true },
        { field: "silver", lockVisible: true },
        { field: "bronze", lockVisible: true },
      ],
    },
  ],
  defaultColDef: {
    resizable: true,
  },
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
