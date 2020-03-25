const express = require('express');
const cors = require('cors');
const routes  = require('./routes');

const app = express();

/* Dizer pra aplicação que vamos usar o Json como padrão. */
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
