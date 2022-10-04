let rowDataA = [
  { id: "1", name: "edwin", stack: "lamp", age: 22 },
  { id: "4", name: "akash", stack: "oracle", age: 22 },
  { id: "5", name: "vasi", stack: "lamp", age: 22 },
];

let rowDataB = [
  { id: "1", name: "edwin", stack: "lamp", age: 22 },
  { id: "2", name: "saju", stack: "lamp", age: 22 },
  { id: "3", name: "karthik", stack: "lamp", age: 22 },
  { id: "4", name: "akash", stack: "oracle", age: 22 },
  { id: "5", name: "vasi", stack: "lamp", age: 23 },
];

let gridOptions = {
  columnDefs: [
    { field: "s.no", valueGetter: "node.id" },
    { field: "name" },
    { field: "stack" },
    { field: "age" },
  ],
  rowData: rowDataA,
  defaultColDef: {
    sortable: true,
    filter: true,
  },
  rowSelection: "single",
  getRowId: (params) => params.data.id,
};
let set1 = () => {
  gridOptions.api.setRowData(rowDataA);
};
let set2 = () => {
  gridOptions.api.setRowData(rowDataB);
};
document.addEventListener("DOMContentLoaded", () => {
  let grid = document.getElementById("grid");
  new agGrid.Grid(grid, gridOptions);
});

//updating by id will preserve the selection
