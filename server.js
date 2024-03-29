const express = require("express");
const serveStatic = require("serve-static")
const path = require("path");
const history = require("connect-history-api-fallback");

app = express();

app.use(history({
  verbose: true
}));

app.use(serveStatic(path.join(__dirname, 'dist')));

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log('App is running on port ' + port);
});
