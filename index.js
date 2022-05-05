const express = require("express");
const cors = require("cors")

let connector = require("./MySQL/connection/mysql.connection");
connector.init();

const app = express();
app.use(express.json());
app.use(cors());

const port = 3000;

const pokemonsRouter = require("./routes/qr");
app.use(pokemonsRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});