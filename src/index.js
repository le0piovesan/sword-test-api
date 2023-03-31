const express = require("express");
const app = express();
const port = process.env.PORT || 8888;
app.use(express.json());
const { routes } = require("./routes");
app.use(routes);

app.listen(port, () => console.log("api running"));
