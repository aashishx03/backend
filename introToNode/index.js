// import fs from "fs";
// import http from "http";
// import url from "url";

const fs = require("fs");
const http = require("http");
const url = require("url");
///////////////////////////////////////
// READING FILE SYNCHRONOUSLY

// const textToAdd = "This is the just another line i want to add in a file";

// fs.writeFileSync("./text.txt", textToAdd);

// const txtIn = "hey this is aashish adding one more line to this file";

// fs.writeFileSync("./text.txt", txtIn);

// const data = fs.readFileSync("./text.txt", "utf-8");

// console.log(data);

/////////////////////////////////////////////
//// READING FILE IN ANSYCHRONOUSLY

// fs.readFile("./text.txt", "utf-8", (err, data) => {
//   console.log(data);
// });

// console.log("File is reading.........");

// const text = "I'm Aashish";

// fs.writeFile("./text.txt", text, (err, data) => {
//   console.log(data);
// });

// console.log("Data is adding");

///////////////////////////////////////////////
/////// ADDING DATA TO EXISTING FILE
// (async way , but there is also a sync way we can use fs.opensync or we can also use async/await)

// const txtData = " This is the data i want to add part 5";

// fs.open("./text.txt", "a", (err, fileDesciptor) => {
//   if (!err) {
//     fs.write(fileDesciptor, txtData, (err) => {
//       if (!err) {
//         console.log("data added successfully");
//       } else {
//         console.err("Error writing to the file:", err);
//       }
//       fs.close(fileDesciptor, (err) => {
//         if (err) {
//           console.log("Error closing this file:", err);
//         }
//       });
//     });
//   } else {
//     console.log("Error Opening the file:", err);
//   }
// });

// fs.readFile("./text.txt", "utf-8", (err, data) => {
//   console.log(data);
// });

///////////////////////////////////////////////////////
////////// Server

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");

const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === "/" || pathName === "/overview") {
    res.writeHead(200, {
      "Content-type": "text/html",
    });
    res.end("<h1>This is an Overview Page</h1>");
  } else if (pathName === "/product") {
    res.writeHead(200, { "Content-type": "text/html" });
    res.end("<h1>This is product page");
  } else if (pathName === "/api") {
    // fs.readFile(`${__dirname}/dev-data/data.json`, "utf-8", (err, data) => {
    //   let jsonData = JSON.parse(data);
    //   // res.end(JSON.stringify(jsonData));
    //   // console.log(jsonData[2]);
    //   res.writeHead(200, {
    //     "Content-type": "application/json",
    //   });

    //   res.end(data);
    // });
    res.writeHead(200, {
      "Content-type": "application/json",
    });
    res.end(data);
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header": "hululu",
    });
    res.end("<h1>Page not Found</h1>");
  }
});

server.listen(3000, () => {
  console.log("Server is listing on 3000");
});
