const express = require("express");

const app = express();
const PORT = 8080;

app.get("/hoidanit", (req, res) => {
    res.send("Hello Word Eric");
})

app.listen(8080, () => {
    console.log(`My app is running on port: ${PORT}`)
});