const express = require("express");
const app = express();
const tasks = require("./routes/tasks.routes");

// middleware
app.use(express.json());

// routes
app.get("/hello", (req, res) => {
  res.send("Task Manager App");
});

app.use("/api/v1/tasks", tasks);

// app.get('api/v1/tasks')

const port = 3000;

app.listen(port, console.log(`App listening on port ${port}...`));
