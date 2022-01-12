const express = require('express')
const app = express()
const path = require('path')
const multer = require('multer')
const fs = require("fs");

const port = 3003; // Take from env

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/images/')
  },
  filename: (req, file, cb) => {
    let fileName = Date.now() + path.extname(file.originalname); // Make sure no file has the same name
    let curProducts = require('./products.json')

    curProducts.push({
      "name": req.body.name,
      "price": req.body.price,
      "img": './images/' + fileName
    })

    let newJson = JSON.stringify(curProducts);
    fs.writeFileSync("./src/products.json", newJson, "utf-8");
    cb(null, fileName)
  }
})

const upload = multer({storage: storage})

app.post("/upload", upload.single('img'), (req, res) => {
  res.send("Image uploaded");
})

app.listen(port, () =>
  console.log('Server running on port:', port)
);
