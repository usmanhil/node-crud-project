const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');

const app = express();

app.use(bodyParser.json());
app.use();

app.listen(3000, 'server listning in localhost port 3000');