let grid = document.getElementById("grid");

let gridOptions = {
  rowData: [
    {
      name: "jai",
      age: 22,
      stack: "java",
      company: "aspire",
      location: "kochi",
    },
  ],
  columnDefs: [
    {
      headerName: "personal info",
      children: [
        { field: "name" },
        { field: "age", type: ["ageFilter", "rightAlign"] },
        { field: "stack", editable: false }, //overrides the defcolumn]
      ],
    },
    {
      headerName: "company info",
      children: [
        { field: "company", type: "nonEditable" },
        { field: "location" },
      ],
    },
  ],
  defaultColDef: {
    sortable: true,
    // filter: true,
    width: 200,
    editable: true,
    resizable: true,
    floatingFilter: true,
    filter: "agTextColumnFilter",
  },
  columnTypes: {
    nonEditable: { editable: false },
    ageFilter: { filter: "agNumberColumnFilter" },
    rightAlign: {
      headerClass: "ag-right-aligned-header",
      cellClass: "ag-right-aligned-cell",
    },
  },
  rowSelection: "multiple", //can select multiple rows
  animateRows: true,
  onCellClicked: (cell) => console.log(cell.data),
};

new agGrid.Grid(grid, gridOptions);

let clickHandler = (event) => {
  console.log("Unselected all the rows..");
  gridOptions.api.deselectAll();
};

fetch("https://mocki.io/v1/9bf4a42e-8724-482a-976e-3ecac0058f7b")
  .then((data) => data.json())
  .then((result) => {
    gridOptions.api.setRowData(result);
    
  })
  .catch((err) => {
    console.log(err);
  });
