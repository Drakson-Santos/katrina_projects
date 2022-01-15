const express = require('express');

const app = express()

app.use(express.json())

require("./routes/test")(app);
require("./routes/projectsRoutes")(app);

export { app }
