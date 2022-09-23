let showData = () => {
  console.log("data : ", gridOptions.api.getSelectedRows());
};
let unselectRow = () => {
  gridOptions.api.deselectAll();
};
let columnDefs = [
  { headerName: "Product", field: "product" },
  {
    headerName: "Price",
    field: "price",
    type: ["nonEditable", "filterNumber"],
    valueFormatter: (params) => params.value + " rs",
  },
  { headerName: "Available", field: "available" },
];
let rowData = [
  { product: "oneplus9", price: 45000, available: true },
  { product: "iphone", price: 80000, available: true },
  { product: "samsung", price: 60000, available: true },
];
let gridOptions = {
  rowData,
  columnDefs,
  defaultColDef: {
    filter: "agTextColumnFilter",
    sortable: true,
    editable: true,
    floatingFilter: true,
  },
  columnTypes: {
    filterNumber: { filter: "agNumberColumnFilter" },
    nonEditable: { editable: false },
  },
  rowSelection: "multiple",
  onRowSelected: (cell) => {
    console.log("revised price after discount : ", cell.data.price * 0.7);
  },
};
document.addEventListener("DOMContentLoaded", () => {
  let grid = document.getElementById("grid");
  new agGrid.Grid(grid, gridOptions);
});
