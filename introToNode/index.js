import fs from "fs";

const textToAdd = "This is the just another line i want to add in a file";

fs.writeFileSync("./text.txt", textToAdd);
const file = fs.readFileSync("./text.txt", "utf-8");

console.log(file);
