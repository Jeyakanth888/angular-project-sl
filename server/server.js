const express = require("express");
const app = express();

app.use(express.static('../dist/ClientApp/'));

app.get('*', function (request, response, next) {
  response.sendFile(__dirname + '/dist/ClientApp/index.html');
});


app.listen(4300, () => console.log("Example app listening on port 4300!"));





