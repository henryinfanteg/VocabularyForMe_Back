
const express = require('express');
const app = express();
const { PORT } = require("./config");

require("./routes/api")(app);

app.listen(PORT, () => {
    console.log('Server listening at port', PORT);
})
