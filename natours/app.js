const express = require("express");
const morgan = require("morgan");
const app = express();

const userRouter = require("./routes/userRoutes");
const tourRouter = require("./routes/tourRoutes");

// 1) MIDDLEWARES

app.use(morgan("dev"));

app.use(express.json());

app.use((req, res, next) => {
  console.log("Hello from the Middleware");
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();

  next();
});

// 3) ROUTES

app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/users", userRouter);

module.exports = app;

// 4) START SERVER

/////////////////////////////////////
/////
////
////////
////////
////////
//////////////
////////
////////////
///////////
//////////
//////////

////////  WITHOUT REFACTORING

// app.get("/api/v1/tours", (req, res) => {
//   res.status(200).json({
//     status: "sucess",
//     result: tours.length,
//     data: {
//       tours: tours,
//     },
//   });
// });

////////////////// OPTIONAL PARAMETERS

// (/api/v1/tours/:id/:x?/:y?)

// app.get("/api/v1/tours", getAllTours);

// app.get("/api/v1/tours/:id", getTour);

// app.post("/api/v1/tours", createTour);

// app.patch("/api/v1/tours/:id", updateTour);

// app.delete("/api/v1/tours/:id", deleteTour);
