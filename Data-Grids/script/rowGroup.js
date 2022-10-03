let gridOptions = {
  columnDefs: [
    { field: "athlete" },
    { field: "age" },
    { field: "country", rowGroup: true },
    { field: "year" },
    { field: "date" },
    { field: "sport" },
    { field: "gold" },
    { field: "silver" },
    { field: "bronze" },
    { field: "total" },
  ],
  defaultColDef: {
    resizable: true,
    sortable: true,
  },
  autoGroupColumnDef: {
    comparator: (valueA, valueB, r1, r2) => {
      // console.log("node 1: ", r1);
      // console.log("node 2: ", r2);
      // console.log("value a : ", valueA);
      // console.log("value b : ", valueB);
      console.log("yes");
      if (valueA === valueB) {
        console.log(`${valueA} === ${valueB}`);
        return 0;
      } else if (valueA > valueB) {
        console.log(`${valueA} > ${valueB}`);
        return 1;
      } else if (valueA < valueB) {
        console.log(`${valueA} < ${valueB}`);
        return -1;
      }
    },
    field: "gold",
    // sort: "asc",
  },
  onGridReady: () => {
    // gridOptions.api.sizeColumnsToFit();
  },
};

let forEachNode = () => {
  gridOptions.api.forEachNode((node, index) => {
    console.log(node.group, index);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  let grid = document.getElementById("grid");
  new agGrid.Grid(grid, gridOptions);
});

fetch("https://mocki.io/v1/6eab9b63-eef1-478c-9b67-5a305e161a52")
  .then((data) => data.json())
  .then((result) => gridOptions.api.setRowData(result));
