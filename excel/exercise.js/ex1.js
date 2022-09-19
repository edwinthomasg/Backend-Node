const excel = require("exceljs");
const { readFile } = require("jsonfile");

readFile("./products.json")
  .then(async(data) => {
    console.log("read file completed")
    const amazon = new excel.Workbook();
    console.log("book created")
    const workSheet = amazon.addWorksheet("products");
    console.log("work sheet added")
    workSheet.columns = [
      {
        header: "Product_Name",
        key: "pr_name",
        width: 20,
      },
      {
        header: "Product_Type",
        key: "pr_type",
        width: 20,
      },
      {
        header: "Product_Color",
        key: "pr_color",
        width: 20,
      },
      {
        header: "Product_Price",
        key: "pr_price",
        width: 20,
      },
      {
        header: "Product_Availability",
        key: "pr_avl",
        width: 20,
      },
    ];
    let S_No = 1;
    data.forEach((product) => {
      product.s_no = S_No;
      workSheet.addRow(product);
      S_No++;
    });
    workSheet.getRow(1).eachCell((cell) => {
      cell.font = { bold: true };
    });
    console.log(workSheet.getRow(7).values)
    await amazon.xlsx.writeFile('./products.xlsx').then(() => console.log("Excel created"))
    console.log("write file completed")
  })
  .catch((err) => console.log(err));
