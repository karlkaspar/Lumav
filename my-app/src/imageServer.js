const express = require('express')
const app = express()
const path = require('path')
const multer = require('multer')
const fs = require("fs")
const port = 3003;

/* 
What I would improve but am too lazy to do
1) Error checks, if something does not work send an apporopriate error message
2) Take port, request and file paths from .env file
*/


const readJson = () => {
    let rawdata = fs.readFileSync("./src/products.json");
    return JSON.parse(rawdata);
}

const writeJson = (input) => {
    fs.writeFileSync("./src/products.json", input, "utf-8")
}

const deleteImage = (name) => { // Delete image so we do not waste space
    const path = "./public/" + name;
    fs.unlink(path, function (err) {
      if (err) {
        console.error(err);
      } else {
        console.log("File removed:", path);
      }
    });
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/images/')
    },
    filename: (req, file, cb) => {
        let fileName = Date.now() + path.extname(file.originalname) // Make sure no file has the same name

        let curProducts = readJson() // Need to recheck file contents every time to avoid problems

        let newJson = JSON.parse(JSON.stringify(curProducts)) // Deep clone in order to avoid problems

        newJson.push({
            "id": Math.max.apply(Math, curProducts.map((o) => { return o.id + 1; })),
            "name": req.body.name,
            "price": req.body.price,
            "img": './images/' + fileName
        })

        writeJson(JSON.stringify(newJson))
        cb(null, fileName)
    }
})

const upload = multer({ storage: storage })

app.get('/delete', (req, res) => {
    let id = req.query.id

    let curProducts = readJson() // Need to recheck file contents every time to avoid problems

    let i = curProducts.map(object => object.id).indexOf(parseInt(id)); // Find index of the obj we want to delete
    let imgName = curProducts[i].img
    
    deleteImage(imgName)
    delete curProducts[i] // Delete it from reference

    let newJson = []; // Compile a new object based on the reference without the one we wanted to delete
    curProducts.forEach(product => {
        if (product !== null) {
            newJson.push(product)
        }
    });

    writeJson(JSON.stringify(newJson))
    res.status(200)
    res.send()
});

app.post('/upload', upload.single('img'), (req, res) => {
    res.status(200)
    res.send()
})

app.listen(port, () =>
    console.log('Server running on port:', port)
);
