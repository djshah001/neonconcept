const multer = require("multer");
const currentDate = new Date()
let date = `${currentDate.getDate()}-${currentDate.getMonth()}-${currentDate.getFullYear()}`
let time = `${currentDate.getHours()}-${currentDate.getMinutes()}-${currentDate.getSeconds()}`;

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './images/products')
    },
    filename: (req, file, callback) => {
        const ext = file.mimetype.split("/")[1];
        callback(null, `${file.originalname}-${time}-${date}.${ext}`);
    }
})

const upload = multer({ storage: storage })
module.exports = {upload:upload,date:date,time:time}