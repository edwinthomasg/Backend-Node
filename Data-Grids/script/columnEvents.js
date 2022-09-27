let gridOptions = {
  columnDefs: [
    { field: "athlete" },
    { field: "age" },
    { field: "country" },
    { field: "sport" },
    { field: "gold" },
    { field: "silver" },
    { field: "bronze" },
  ],
  defaultColDef: {
    sortable: true,
    resizable: true,
  },
  onSortChanged: (e) => console.log(e),
  onColumnPinned: (e) => console.log(e)
};
let sort = () => {
  let colDef = gridOptions.api.getColumnDefs();
  colDef.forEach((col) => {
    console.log(col.field);
    if (col.field == "age") {col.sort = "desc"; col.pinned = "left"}
    else if (col.field == "athlete") col.sort = "asc";

  });
  console.log(colDef);
  gridOptions.api.setColumnDefs(colDef)
};
document.addEventListener("DOMContentLoaded", () => {
  let grid = document.getElementById("grid");
  new agGrid.Grid(grid, gridOptions);
});

fetch("https://www.ag-grid.com/example-assets/olympic-winners.json")
  .then((data) => data.json())
  .then((res) => gridOptions.api.setRowData(res))
  .catch((err) => console.log(err));
