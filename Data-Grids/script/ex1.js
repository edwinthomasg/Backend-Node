let grid = document.getElementById("grid");

let gridOptions = {
  columnDefs: [
    {
      headerName: "personal info",
      children: [{ field: "name" }, { field: "age" }],
    },
    {
      headerName: "company info",
      children: [
        { field: "stack" },
        { field: "company" },
        { field: "location" },
      ],
    },
  ],
  rowData: [{
    name: "ajith",
    age: "23",
    stack: "dotnet",
    company: "virtusa",
    location: "bangalore"
  }],
  defaultColDef: {
    sortable: true,
    filter: true,
    floatingFilter: true
  },
  headerHeight: 100,
  floatingFiltersHeight: 50,
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
