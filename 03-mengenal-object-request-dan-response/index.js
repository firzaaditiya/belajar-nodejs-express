const express = require("express");
const app = express();

/*
    sekarang kita akan coba untuk mendapatkan data request dan mengirim response 
*/

// "req" dan "res" merupakan object bawaan dari Express atau method "server.use"
app.use((req, res) => {
    console.info("we got request");
    // dapat membantu Anda menjelajahi struktur objek dengan lebih mendetail dari objek "req" dan "res"
    // console.dir(req);
    // console.dir(res);

    /*
        didalam object "res" terdapat method "send()" yang mana berguna sebagai mengirim response yang dihasilkan

        https://expressjs.com/en/5x/api.html#res.send
    */
//    res.send("<h1>Hello Express</h1>"); // response yang akan dikirim ke client

    // mengirim response objects
    res.send({
        "message": "hello world"
    });
});


app.listen(8080, () => {
    console.info("Server is running on http://localhost:8080");
});