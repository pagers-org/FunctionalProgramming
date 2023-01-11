let express = require("express");
let app = express();

app.use(express.static(__dirname + "/"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "./index.html");
});

app.listen(5500, function () {
  console.log("App is running on port 5500");
});