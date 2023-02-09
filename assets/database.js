const path = require("path");
// const getAssetPath = (...paths) => {
//   return path.join(RESOURCES_PATH, ...paths);
// };
// const RESOURCES_PATH = app.isPackaged
//   ? path.join(process.resourcesPath)
//   : path.join(__dirname);
const knex = require("knex")({
  client: "better-sqlite3",
  connection: {
    filename: path.join("./assets/dev.db"),
  },
  useNullAsDefault: true,
});
console.log(path.join("./assets/dev.db"));
exports.addDtata = async (e) => {
  const start = await knex("user")
    .insert({ Name: e.Name, PIN: e.PIN })
    .returning("*");
  return start;
};
exports.addproduct = async (e) => {
  const start = await knex("Product")
    .insert({
      product_barcode: e.product_stock_barcode_13,
      product_id: e.product_id,
      title: e.product.title,
      code: e?.product?.cloth_design?.code,
      fabric_name: e?.product?.fabric?.title,
      front_img: e?.product?.Front_img,
      back_img: e?.product?.Back_img,
      price: e?.product?.price,
      outside_brand: "",
      description: "",
      category: "",
      size: e?.size_info?.size?.size_name,
    })
    .returning("*");
  return start;
};

exports.delproduct = async () => {
  await knex("Product").del();
};

exports.selectproduct = async () => {
  const product = await knex.select().table("Product");
  return product;
};
"product_id",
  "title",
  "code",
  "fabric_name",
  "front_img",
  "back_img",
  "price",
  "outside_brand",
  "description";
