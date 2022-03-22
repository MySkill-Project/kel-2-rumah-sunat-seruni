const express = require("express");
const cors = require("cors");
const routers = require("./routers");
const app = express();
const port = process.env.PORT || 3002;

app.use(express.static("D:"));
app.use(cors());
app.use("/api/v1", routers);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
