import fs from "fs";
import http from "http";

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
/////// ADDING DATA TO EXISTING FILE (async way , but there is also a sync way we can use fs.opensync or we can also use async/await)

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
