const fs = require("fs");
const path = require("path");
const { threadId } = require("worker_threads");

// fs.mkdir(path.join(__dirname, "test"), (err) => {
//   if (err) {
//     throw err;
//   }

//   console.log("File created");
// });

const filePath = path.join(__dirname, "test", "text.txt");

// fs.writeFile(filePath, "Hello Node JS", (err) => {
//   if (err) {
//     throw err;
//   }

//   console.log("File Created");
//   fs.appendFile(filePath, "\nHello again", (err) => {
//     if (err) {
//       throw err;
//     }
//     console.log("File Created");
//   });
// });

fs.readFile(filePath, "utf-8", (err, content) => {
  if (err) {
    throw err
  }

  console.log(content);
});
