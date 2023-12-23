/*
    kita kan mencoba untuk membuat sebuah route yang contohnya adalah seperti website Blog

    domain : https://example.com/blog/judul-berita

    "judul-berita" ini akan dimanis, menyesuaikan judul konten nya, jadi halaman tampilan akan tetap sama yang berbeda adalah
    judul berita dan konten nya

    didalam express js kita sangat mudah membuat sebuah route yang memiliki paramater pada URL/PATH yang kita buat
*/

const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("This is homepage");
});

/*
    untuk mendefinisikan paramater pada route kita menggunakan tanda ":" titik dua dan diikuti dengan alias paramater nya
    jadi seakan akan ":judul" adalah sebuah variable/paramater yang akan menyimpan nilai sesuatu yang kita ketikan dalam
    suatu request
*/
app.get("/blog/:judul", (req, res) => {
    /*
        ketika kita ingin mengakses suatu data dari request kita bisa memanfaatkan objek "req", disana memiliki property
        "params" yang isinya adalah data paramater yang dikirimkan oleh user
    */
    // console.info(req.params);

    // destructuring
    const { title } = req.params;

    // menampilkan data
    res.send(`This is blog and the title is ${title}`);
});

// memiliki banyak paramater
app.get("/blog/:category/:title/:author", (req, res) => {
    // destructuring
    const { category, title, author } = req.params;

    // menampilkan data
    res.send(`This is blog and the title is ${title}, category: ${category}, author: ${author}`);
});

app.get("*", (req, res) => {
    res.send("Page not found");
});

app.listen(8080, () => {
    console.info("Server is running on http://localhost:8080");
});