let gridOptions = {
  columnDefs: [
    {
      headerName: "Name",
      children: [
        { field: "firstname", colId: "name" },
        { field: "lastname", colId: "name" },
      ],
    },
    { headerName: "Place", field: "native" },
    { headerName: "State", field: "native" },
    { headerName: "Location", valueGetter: "data.native" },
    { headerName: "Location", valueGetter: "data.native" },
  ],
  rowData: [
    { firstname: "thomas", lastname: "shelby", native: "erode" },
  ],
  onGridReady: (params) => {
    let columns = gridOptions.columnApi.getColumns()
    for(let col of columns){
      console.log(col.getId())
    }
  },
};

document.addEventListener("DOMContentLoaded", () => {
  let grid = document.getElementById("grid");
  new agGrid.Grid(grid, gridOptions);
});

//if colid is provided then that is taken as unique id for a column
//if not it will check the field and make them as unique reference to that column
//if both colid and field is provided then colid has higher precedence than field
//if two or more columns shares same field name then except the 1st column rest all generated with first non positive  number succeded with the field name
//same thing applied for colid 
//if no field or colid is provided then aggrid generates a unique id starting with 1
