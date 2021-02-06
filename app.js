
const express = require('express');
const app = express();
const { PORT } = require("./config");
const Word = require("./models/words");

require("./routes/api")(app);

app.listen(PORT, () => {
    console.log('Server listening at port', PORT);
    Word.sync();
})
