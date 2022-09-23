let addTwoNumbers = (params) => params.data.num1 + params.data.num2;
let subTwoNumbers = (params) => params.data.num1 - params.data.num2;
let multiplyTwoNumbers = (params) => params.data.num2 * params.data.num2;
let divideTwoNumbers = (params) => params.data.num1 / params.data.num2;
let generateSpecial = (params) => params.getValue("+") * 2;
let toDecimal = (params) => Math.abs(params.value);

let gridOptions = {
  columnDefs: [
    {
      headerName: "INPUTS",
      children: [
        { headerName: "INPUT 1", field: "num1" },
        { headerName: "INPUT 2", field: "num2" },
        { headerName: "APP", field: "type.app" },
      ],
    },
    {
      headerName: "RESULT",
      groupId: "result",
      children: [
        { headerName: "num1 + num2", colId: "+", valueGetter: addTwoNumbers,type: "modelColumn" },
        {
          headerName: "num1 - num2",
          valueGetter: subTwoNumbers,
          valueFormatter: toDecimal,
          type: "modelColumn"
        },
        { headerName: "num1 * num2", valueGetter: multiplyTwoNumbers, type: "modelColumn" },
        { headerName: "num1 / num2", valueGetter: divideTwoNumbers, type: "modelColumn" },
        { headerName: "special number", valueGetter: generateSpecial, type: "modelColumn" },
        { headerName: "show", columnGroupShow: "closed"}
      ],
    },
  ],
  rowData: [
    { num1: 10, num2: 20, type: { app: "calculator" } },
    { num1: 30, num2: 10, type: { app: "calculator" } },
  ],
  defaultColDef: {
    width: 150,
    resizable: true,
  },
  defaultColGroupDef: {
    marryChildren: true     
  },
  columnTypes: {
    modelColumn: { columnGroupShow: "open" }
  }

//   suppressFieldDotNotation: true, all the nested referenced value will be vanished
};

document.addEventListener("DOMContentLoaded", () => {
  let grid = document.querySelector("#grid");
  new agGrid.Grid(grid, gridOptions);
});









