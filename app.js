// const { name, name2 } = require("./modules");
// const sayHi = require("./utiles");

// globals-------------------------------------------------------------
// __dirname - path to current directory
// __filename - file name
// require - fuction to use modules(CommonJS)
// module  - info about current module (file)
// process - info about env where the program is being executed

// CommonJS, every file is module(by default)
// Modules - Encapsulated code (only share minimum)

// sayHi("dipa");
// sayHi(name);
// sayHi(name2);

//os    ----------------------------------------------------------
// const os = require("os");

// info about the user

// const user = os.userInfo();
// console.log(user);

// sys uptime in sec

// console.log(os.uptime());
// const currentOs = {
//     name: os.type(),
//     release: os.release(),
// }

//path  ------------------------------------------------------------------------

// const path = require("path");

// console.log(path.sep);

// const filepath = path.join("/content/", "subfolder", "text.txt");
// console.log(filepath);

// const base = path.basename(filepath);
// console.log(base);

// const absolute = path.resolve(__dirname, 'content', "subfolder", 'text.txt')
// console.log(absolute)
//fs    -----------------------------------------------------------------------------
// const fs = require("fs");

// const first = fs.readFileSync("./content/first.txt", "utf8");
// const second = fs.readFileSync("./content/second.txt", "utf8");
// console.log(first, second);

// fs.writeFileSync(
//   "./content/result.txt",
//   `here is the result ${first},${second}`,
//   {
//     flag: "a",
//   }
// );
// fs.readFile("./content/first.txt", "utf8", (err, result) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   const first = result;
//   fs.readFile("./content/second.txt", "utf8", (err, result) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     const second = result;
//     fs.writeFile(
//       "./content/resultAsyns.txt",
//       `here is the result ${first},${second}`,
//       (err, res) => {
//         if (err) {
//           console.log(err);
//           return;
//         }
//         console.log(res);
//       }
//     );
//   });
// });

// const fs = require("fs");
// console.log("start");
// const first = fs.readFileSync("./content/first.txt", "utf8");
// const second = fs.readFileSync("./content/second.txt", "utf8");
// // console.log(first, second);

// fs.writeFileSync(
//   "./content/result.txt",
//   `here is the result ${first},${second}`,
//   {
//     flag: "a",
//   }
// );
// console.log("done with this task ");
// console.log("start the next one ");

//http  --------------------------

// const http = require("http");

// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.end("hello world");
//   }
//   if (req.url === "/about") {
//     res.end("hello about");
//   }
//   res.end(`
//     <h1>oops</h1>
//   `);
// });

// server.listen(4000);
