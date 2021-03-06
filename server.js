const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

require('./routes')(app);

app.listen(PORT, function() {
  console.log("app listening on Port " + PORT);
});