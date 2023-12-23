/*
    routing / route ini adalah kita bisa menentukan response berdasarkan URL tertentu. Misalkan user membuka URL "/hello"
    maka bisa kita atur resonse nya akan berupa misal nya string "Hello World"
*/

const express = require("express");
const app = express();

// ditimpa
// app.get("*", (req, res) => {
//     res.send("Halaman ditimpa");
// });

// app.use((req, res) => {
//     console.info("we got request");

//     app.send("we use express js now");
// });

// melakukan routing
app.get("/", (req, res) => {
    res.send("This is homepage");
});

// http method GET
app.get("/cats", (req, res) => {
    // ketika user mengakses PATH/URL "/cats", maka akan mendapatkan response string "this is cats page"
    res.send("This is cats page");
});

// routing dengan http method type POST, ini tidak akan bentrok dengan method GET diatas karena sudah beda method
app.post("/cats", (req, res) => {
    res.send("this is cats page from post");
});

app.get("/about", (req, res) => {
    res.send("This is about page");
});

/*
    ketika user menginputkan sebuah PATH/URL yang tidak valid atau tidak kita daftarkan pada list routing maka kita akan
    menjalankan ini dengan paramater pertama kita beri "*" saja pada funtion "server.get("*")"

    dan ketika kita menggunakan "*" pada paramater pertama di method "server.get()" kita perlu menaruh method nya berada
    paling bawah dari list routing yang ada, karena ketika kita taro diatas atau bahkan paling atas maka route atau list
    routing yang lain tidak akan bisa digunakan karena akan di override atau diganti/timpa oleh "server.get("*")" ini
*/
app.get("*", (req, res) => {
    res.send("Halaman tidak ditemukan");
});

app.listen(8080, () => {
    console.info("Server is running on http://localhost:8080");
});