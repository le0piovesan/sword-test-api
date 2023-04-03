const app = require("./index");
const port = process.env.PORT || 8888;

app.listen(port, () => console.log("api running on port", port));
