// membuat object dari package "express"
const express = require("express");

const app = express();

/*
    karena express merupakan sebuah aplikasi server atau aplikasi backend yang berjalan pada server yang akan melisten atau
    menunggu sebuah request yang datang didalam domain nya, namun disini kita menggunakan localhost karena berada didalam
    mesin kita sendiri atau localhost. Dan biasa nya kita perlu mendefinisikan PORT sebagai identitas aplikasi ini akan
    dihandle oleh siapa / service ini akan dihandle oleh siapa
*/

// dapat digunakan untuk menerapkan middleware ke seluruh aplikasi Express atau ke jalur tertentu.
app.use(() => {
    console.info("we got request");
});

app.listen(8080, () => {
    console.info("Server is running on http://localhost:8080");
});