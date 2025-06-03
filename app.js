const { publicDecrypt } = require("crypto");
const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 3000;

// EJS
app.set("view engine", "ejs");

//Статичная папка
app.use(express.static("public"));

// Cookie
const cookieParser = require('cookie-parser') 
app.use(cookieParser())

// Преобразование данных из буфера в читаемый вид
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


// Рендер главной страницы
app.get(["/", "/index"], (req, res) => {
	res.render("index", { activePage: "index" });
});

// Рендер каталога
app.get("/catalog", (req, res) => {
	res.render("catalog");
});

// Рендер каталога
app.get("/delivery", (req, res) => {
	res.render("delivery");
});

// Рендер каталога
app.get("/shops", (req, res) => {
	res.render("shops");
});

// Рендер каталога
app.get("/pawnshop", (req, res) => {
	res.render("pawnshop");
});

// Рендер каталога
app.get("/cart", (req, res) => {
	res.render("cart");
});


app.listen(PORT, () => {
	console.log("см. тут: http://localhost:" + PORT);
});