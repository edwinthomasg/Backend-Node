let gridOptions = {
  columnDefs: [
    { field: "name", type: "pinned", headerTooltip: "name of the employee" },
    { field: "age", type: "numberFilter" , headerTooltip: "age of the employee"},
    { field: "stack", headerTooltip: "stack the employee belongs too" },
    { field: "company", headerTooltip: "company the employee working" },
    { field: "location", headerTooltip: "location the employee is from" },
  ],
  rowSelection: "multiple",
  defaultColDef: {
    width: 150,
    sortable: true,
    filter: "agTextColumnFilter",
    resizable: true,
    // initialHide: false
  },
  tooltipShowDelay: 500,
  columnTypes: {
    numberFilter: { filter: "agNumberColumnFilter" },
    pinned: { initialPinned: "right" },
  },
  onGridReady: () =>
    console.log("grid ready : ", gridOptions.columnApi.getColumns()),
  animateRows: true,
};

let formatValue = () => {
  let columnDefs = gridOptions.api.getColumnDefs();
  columnDefs.map(
    (column) => (column.valueFormatter = (params) => params.value + "....????")
  );
  gridOptions.api.setColumnDefs(columnDefs);
};

let removeFormat = () => {
  let columnDefs = gridOptions.api.getColumnDefs();
  columnDefs.map((column) => (column.valueFormatter = undefined));
  gridOptions.api.setColumnDefs(columnDefs);
};

document.addEventListener("DOMContentLoaded", () => {
  let grid = document.querySelector("#grid");
  new agGrid.Grid(grid, gridOptions);
});

fetch("https://mocki.io/v1/9bf4a42e-8724-482a-976e-3ecac0058f7b")
  .then((data) => data.json())
  .then((result) => gridOptions.api.setRowData(result));
