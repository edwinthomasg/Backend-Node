let setAColumns = () => [
  {
    headerName: "Group 1",
    groupId: "group1",
    children: [
      { field: "athlete" },
      { field: "age" },
      { field: "country", columnGroupShow: "open" },
    ],
  },
  {
    headerName: "Group 2",
    children: [
      { field: "sport" },
      { field: "year" },
      { field: "date", columnGroupShow: "open" },
    ],
  },
  {
    headerName: "Group 3",
    children: [
      { field: "total", columnGroupShow: "closed" },
      { field: "gold", columnGroupShow: "open" },
      { field: "silver", columnGroupShow: "open" },
      { field: "bronze", columnGroupShow: "open" },
    ],
  },
];

let setBColumns = () => [
  {
    headerName: "Group 1",
    groupId: "group1",
    children: [
      { field: "athlete" },
      { field: "age" },
      { field: "country", columnGroupShow: "open" },
    ],
  },
  {
    headerName: "Group 2",
    children: [
      { field: "sport" },
      { field: "year" },
      { field: "date", columnGroupShow: "open" },
    ],
  },
  {
    headerName: "Group 3",
    children: [
      { field: "total", columnGroupShow: "closed" },
      { field: "extra", columnGroupShow: "closed" },
      { field: "gold", columnGroupShow: "open" },
      { field: "silver", columnGroupShow: "open" },
      { field: "bronze", columnGroupShow: "open" },
    ],
  },
];
let gridOptions = {
  columnDefs: setAColumns(),
};
let set1 = () => {
  gridOptions.api.setColumnDefs(setAColumns());
};
let set2 = () => {
  gridOptions.api.setColumnDefs(setBColumns());
};

document.addEventListener("DOMContentLoaded", () => {
  let grid = document.getElementById("grid");
  new agGrid.Grid(grid, gridOptions);
});

fetch("https://www.ag-grid.com/example-assets/olympic-winners.json")
  .then((data) => data.json())
  .then((res) => gridOptions.api.setRowData(res))
  .catch((err) => console.log(err));
