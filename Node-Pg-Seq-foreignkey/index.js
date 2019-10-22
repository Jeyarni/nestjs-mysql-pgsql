require("express-async-errors");
const express = require("express");
const app = express();
const student=require("./routes/student");
const department=require("./routes/department");

app.use(express.json());

app.use("/", student);
app.use("/dep", department);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`App listening on port Number ${PORT}`);
});
