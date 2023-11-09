const fs = require("fs");
const express = require("express");
const morgan = require("morgan");
const app = express();

const PORT = 3000;

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

const tours = JSON.parse(
  fs.readFileSync(
    `${__dirname}/dev-data/data/tours-simple.json`,
    "utf-8",
    () => {
      console.log("File is read");
    }
  )
);

// 2) ROUTE HANDELERS

const getAllTours = (req, res) => {
  console.log(req.requestTime);
  res.status(200).json({
    status: "sucess",
    requestedAt: req.requestTime,
    result: tours.length,
    data: {
      tours: tours,
    },
  });
};

const getTour = (req, res) => {
  const id = req.params.id * 1;
  // console.log(id);
  // console.log(tours.length);
  if (id < tours.length) {
    const tour = tours.find((el) => el.id === id);
    res.status(200).json({
      status: "sucess",
      data: {
        tour,
      },
    });
  } else {
    res.status(404).json({
      status: "fail",
      message: "Invalid ID",
    });
  }
};

const createTour = (req, res) => {
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
};

const updateTour = (req, res) => {
  if (req.params.id * 1 > tours.length) {
    res.status(404).json({
      status: "fail",
      message: "Invalid ID",
    });
  }
  res.status(200).json({
    status: "success",
    data: {
      tour: "<Updated Tour Here>",
    },
  });
};

const deleteTour = (req, res) => {
  if (req.params.id * 1 > tours.length) {
    res.status(404).json({
      status: "fail",
      message: "Invalid ID",
    });
  }
  res.status(204).json({
    status: "success",
    data: null,
  });
};

const getAllUsers = (req, res) => {
  res.status(500).json({
    status: "success",
    message: "This route is not defined yet",
    data: {
      user: "There you go here's Complete users data",
    },
  });
};

const getUser = (req, res) => {
  res.status(500).json({
    status: "success",
    message: "This route is not defined yet",
    data: {
      user: "This is the data for one User",
    },
  });
};

const createUser = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not defined yet",
  });
};

const updateUser = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not defined yet",
  });
};

const deleteUser = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not defined yet",
  });
};

// 3) ROUTES

const tourRouter = express.Router();
const userRouter = express.Router();

tourRouter.route("/").get(getAllTours).post(createTour);

tourRouter.route("/:id").get(getTour).patch(updateTour).delete(deleteTour);

userRouter.route("/").get(getAllUsers).post(createUser);

userRouter.route("/:id").get(getUser).patch(updateUser).delete(deleteUser);

app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/users", userRouter);

// 4) CREATING SERVER

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

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
