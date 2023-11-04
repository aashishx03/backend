const fs = require("fs");
const express = require("express");
const app = express();

const PORT = 3000;

app.use(express.json()); // This is the Middleware

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

app.post("/api/v1/tours", (req, res) => {
  // console.log(req.body);

  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);
  tours.push(newTour);
  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        status: "success",
        data: {
          tour: tours,
        },
      });
    }
  );
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
