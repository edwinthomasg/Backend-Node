let columnDefs = () => {
  return [
    { headerName: "Id", valueGetter: "node.id" },
    { field: "name" },
    { field: "age" },
    { field: "gender" },
    { field: "email" },
    { field: "phone" },
    { field: "location" },
    { field: "pincode" },
  ];
};

let gridOptions = {
  columnDefs: columnDefs(),
  rowData: [
    { id: "A1", name: "edwin", age: 22, gender: "male", email: "e@gm.com", phone: 676676 },
    { id: "B1", name: "akash", age: 22, gender: "male", email: "e@gm.com", phone: 676676 },
    { id: "C1", name: "saju", age: 22, gender: "male", email: "e@gm.com", phone: 676676 },
    { id: "D1", name: "karthi", age: 22, gender: "male", email: "e@gm.com", phone: 676676 },
    { id: "E1", name: "vasi", age: 22, gender: "male", email: "e@gm.com", phone: 676676 },
    { id: "F1", name: "rannith", age: 22, gender: "male", email: "e@gm.com", phone: 676676 }
  ],
  defaultColDef: {
    editable: true,
    filter: "agTextColumnFilter",
    sortable: true,
  },
  rowSelection: "multiple",
  getRowId: params => params.data.id //cutom id from the given row data
};

document.addEventListener("DOMContentLoaded", () => {
  let grid = document.getElementById("grid");
  new agGrid.Grid(grid, gridOptions);
});
