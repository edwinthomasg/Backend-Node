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
      children: [{ field: "name" }, { field: "age" , suppressMenu: true}, { field: "stack" }],
    },
    {
      headerName: "company info",
      children: [
        { field: "company" },
        { field: "location" },
      ],
    },
  ],
  defaultColDef: {
    sortable: true,
    filter: true,
    floatingFilter: true,
    width: 200,
  },
  defaultColGroupDef: {
    marryChildren: true
  },
  suppressMenuHide: true //display the menu icon i.e filter icon here
};

new agGrid.Grid(grid, gridOptions);

fetch("https://mocki.io/v1/9bf4a42e-8724-482a-976e-3ecac0058f7b")
  .then((data) => data.json())
  .then((result) => {
    gridOptions.api.setRowData(result);
  })
  .catch((err) => {
    console.log(err);
  });
