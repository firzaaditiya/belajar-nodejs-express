const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("This is homepage");
});

// query string
app.get("/search", (req, res) => {
    /*
        didalam objek req terdapat property query yang menyimpan data query string yang dikirim kan dari request
    */
    // console.info(req.query);

    const { q } = req.query;

    // validasi ketika q tidak ada
    if (!q) {
        // ketika query string "q" tidak akan akan mengirimkan response ini
        res.send(`<h1>Tidak ada data yan dicari</h1>`);
    } else {
        res.send(`<h1>Search Keyword : ${q}</h1>`);
    }
});

app.get("*", (req, res) => {
    res.send("Page not found");
});

app.listen(8080, () => {
    console.info("Server running on http://localhost:8080");
});