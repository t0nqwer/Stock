// const myWindow = window.open("", "");
// myWindow.document.write("<html><head><title>Print it!</title><style>");
// myWindow.document.write(`
// @page {
//   size: 36mm 29mm;
//   margin: 0;

// }
// * {
//   box-sizing: border-box;
// }
// body {
//   margin: 0;
//   padding: 0;
//   background: rgb(204, 204, 204);
//   display: flex;
//   flex-direction: column;
// }

// .page {
//   display: inline-block;
//   position: relative;
//   height: 29mm;
//   width: 36mm;
//   font-size: 10pt;
//   margin: 2em auto;
//   padding: calc(var(--bleeding) + var(--margin));
//   box-shadow: 0 0 0.5cm rgba(0, 0, 0, 0.5);
//   background: white;
// }

// @media screen {
//   .page::after {
//     position: absolute;
//     content: "";
//     width: calc(100% - var(--bleeding) * 2);
//     height: calc(100% - var(--bleeding) * 2);
//     margin: var(--bleeding);
//     top: 0;
//     left: 0;
//     pointer-events: none;
//     z-index: 9999;
//   }
// }
// @media print {
//   .page {
//     margin: 0;
//     overflow: hidden;
//   }
// {
// .no-print {
//     display: none !important;
// }

// }`);
// myWindow.document.write("</style></head>");
// myWindow.document.write(
//   ` <body><div class="page no-print" onafterprint="self.close()"><button onclick="window.print()">ปริ้น</button></div>`
// );

// selectBarcode.map((e) => {
//   const print = e.printqty;
//   let i;
//   for (i = 0; i < print; i++) {
//     if (e.design)
//       myWindow.document.write(`<div class="page">
//       <div style="display: flex; justify-content: space-between; ">
//       <div >${e.design.toUpperCase()}-${e.size}</div>
//       <div>${e.price}</div>
//       </div>
//       <div style="font-size: 8pt;   ">${e.fabric}</div>
//       <img id="${e._id}${i}" xmlns="http://www.w3.org/2000/svg"
//       style="object-fit: contain;"  width="100%"></img>
//       <div style="font-size: 8pt; display: flex; justify-content: center;"><div>${e._id.toUpperCase()}</div></div>
//       </div>`);
//     if (!e.design)
//       myWindow.document.write(`<div class="page">
//     <div style="display: flex; justify-content: space-between; line-height: 1em;   font-size: 9pt;">
//     <div >${e.name}</div>
//     <div>${e.price}</div>
//     </div>
//     <div style="font-size: 8pt;   ">${e.brand}</div>
//     <img id="${e._id}${i}" xmlns="http://www.w3.org/2000/svg"
//     style="object-fit: contain;"  width="100%"></img>
//     <div style="font-size: 8pt; display: flex; justify-content: center;"><div>${e._id.toUpperCase()}</div></div>
//     </div>`);
//   }
// });
// myWindow.document.write(`<script src="${BarcodePath}"></script>`);

// myWindow.document.write(`<script type="text/javascript">`);
// selectBarcode.map((e) => {
//   const print = e.printqty;
//   let i;
//   for (i = 0; i < print; i++) {
//     myWindow.document.write(
//       `JsBarcode("#${e._id}${i}", "${e._id}",{
//         format: "code128",
//         width: 1,
//         height: 35,
//         displayValue: false,
//         margin: 2,
//         marginTop: 0,
//         marginBottom: 0,
//         marginLeft: 10,
//         marginRight: 10,
//         background: "#ffffff",
//       });`
//     );
//   }
// });
// myWindow.document.write(`</script></body></html>`);
