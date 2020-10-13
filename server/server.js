
const express = require("express");
const displayApi = require("./displayApi.js");
const cors = require("cors");
const app = express(),
    DIST_DIR = __dirname;
app.use(express.static(DIST_DIR));
app.use(cors());
app.use(express.json());
displayApi.api(app);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`App listening to ${PORT}....`);

});