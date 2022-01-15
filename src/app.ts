const express = require('express');

const app = express()
const morgan = require('morgan')

app.use(express.json())
app.use(morgan('combined'))

require("./routes/test")(app);
require("./routes/projectsRoutes")(app);

export { app }
