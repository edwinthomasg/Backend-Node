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
        {
          headerName: "num1 + num2",
          colId: "+",
          valueGetter: addTwoNumbers,
          type: "modelColumn",
        },
        {
          headerName: "num1 - num2",
          valueGetter: subTwoNumbers,
          valueFormatter: toDecimal,
          type: "modelColumn",
        },
        {
          headerName: "num1 * num2",
          valueGetter: multiplyTwoNumbers,
          type: "modelColumn",
        },
        {
          headerName: "num1 / num2",
          valueGetter: divideTwoNumbers,
          type: "modelColumn",
        },
        {
          headerName: "special number",
          valueGetter: generateSpecial,
          type: "modelColumn",
        },
        { headerName: "show", field: "show", columnGroupShow: "closed" },
      ],
    },
  ],
  rowData: [
    { num1: 10, num2: 20, type: { app: "calculator" }, show: "show" },
    { num1: 30, num2: 10, type: { app: "calculator" }, show: "show" },
  ],
  defaultColDef: {
    width: 150,
    resizable: true,
    minWidth: 100 //column cant be resized below the min width
  },
  columnTypes: {
    modelColumn: { columnGroupShow: "open" },
  },
  groupHeaderHeight: 110, //applied to only the group headers
  headerHeight: 60, //applied to all the headers
  //   suppressFieldDotNotation: true, all the nested referenced value will be vanished
};
let changeHeight = () => {
  gridOptions.api.setHeaderHeight(100) //dynamicly change the height
}
document.addEventListener("DOMContentLoaded", () => {
  let grid = document.querySelector("#grid");
  new agGrid.Grid(grid, gridOptions);
});
