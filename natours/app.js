const fs = require("fs");
const express = require("express");
const app = express();

const PORT = 3000;

const tours = JSON.parse(
  fs.readFileSync(
    `${__dirname}/dev-data/data/tours-simple.json`,
    "utf-8",
    () => {
      console.log("File is read");
    }
  )
);

app.get("/api/v1/tours", (req, res) => {
  res.status(200).json({
    status: "sucess",
    result: tours.length,
    data: {
      tours: tours,
    },
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
