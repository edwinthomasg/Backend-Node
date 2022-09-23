let includeColumns = () => {
  return [
    {
      headerName: "All Details",
      groupId: "include",
      children: [
        { field: "name" },
        { field: "age" },
        { field: "gender" },
        { field: "email" },
        { field: "phone" },
        { field: "location" },
        { field: "pincode" },
      ],
    },
  ];
};

let excludeColumns = () => {
  return [
    {
      headerName: "Main Details",
      groupId: "exclude",
      children: [{ field: "name" }, { field: "age" }, { field: "gender" }],
    },
  ];
};

let include = () => {
  gridOptions.api.setColumnDefs(includeColumns());
};

let exclude = () => {
  gridOptions.api.setColumnDefs(excludeColumns());
};

let removeHeader = () => {
  let removed = gridOptions.api.getColumnDefs().map((col) => {
    col.headerName = undefined;
    return col;
  });
  gridOptions.api.setColumnDefs(removed);
};

let includeHeader = () => {
  console.log(gridOptions.api.getColumnDefs());
  gridOptions.api.getColumnDefs().forEach((col) => {
    col.groupId === "include"
      ? gridOptions.api.setColumnDefs(includeColumns())
      : gridOptions.api.setColumnDefs(excludeColumns());
  });
};

let gridOptions = {
  columnDefs: includeColumns(),
  defaultColDef: {
    editable: true,
    filter: "agTextColumnFilter",
    sortable: true,
  },
  rowSelection: "multiple",
};

document.addEventListener("DOMContentLoaded", () => {
  let grid = document.getElementById("grid");
  new agGrid.Grid(grid, gridOptions);
  fetch("https://mocki.io/v1/180448a2-0d27-40b9-bdbc-a14fe65df3c2")
    .then((data) => data.json())
    .then((result) => gridOptions.api.setRowData(result))
    .catch((err) => console.log(err));
});
