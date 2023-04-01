const express = require("express");
const { routes } = require("./routes");

const port = process.env.PORT || 8888;
const app = express();
app.use(routes);
app.use(express.json());

app.listen(port, () => console.log("api running on port", port));
