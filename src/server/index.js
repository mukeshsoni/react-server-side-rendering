import express from "express";
import cors from "cors";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter, matchPath } from "react-router-dom";
import { ServerStyleSheet } from "styled-components";
import { Provider } from "rebass";
import App from "../shared/App";
import theme from "../shared/theme";

const app = express();

app.use(cors());
app.use(express.static("public"));

app.get("*", (req, res, next) => {
  const sheet = new ServerStyleSheet();

  var markup = renderToString(
    sheet.collectStyles(
      <Provider theme={theme}>
        <StaticRouter location={req.url} context={{}}>
          <App />
        </StaticRouter>
      </Provider>
    )
  );
  const styleTags = sheet.getStyleTags();

  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <script src="/bundle.js" defer></script>
  <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
  crossorigin="anonymous">

  <title>Document</title> 
</head>
<body>
  <div id='app'>${markup}</div>
  ${styleTags}

</body>
</html>
  `);
});

var PORT = 4000;

app.listen(PORT, () => {
  console.log("Server listening on port: ", PORT);
  console.log(`Go to http://localhost:${PORT} on your browser`);
});
