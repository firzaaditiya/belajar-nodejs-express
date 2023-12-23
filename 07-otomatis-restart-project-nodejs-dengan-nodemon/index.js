/*
    nodemon adalah alat yang membantu mengembangkan aplikasi berbasis Node.js dengan memulai ulang aplikasi node secara
    otomatis ketika perubahan file pada direktori terdeteksi

    https://github.com/remy/nodemon

    https://www.npmjs.com/package/nodemon

    untuk instalasinya kita install secara global agar tidak bergantung pada project

    command : npm install -g nodemon
    command : npm i -g nodemon

    cara penggunaan nya gampang hanya perlu mengganti yang tadinya kita menggunakan "node index.js" menjadi "nodemon index.js"
*/

const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("<h1>This is Homepage with H1</h1>");
});

app.get("*", (req, res) => {
    res.send("Page not found");
});

app.listen(8080, () => {
    console.info("Server running on http://localhost:8080");
});