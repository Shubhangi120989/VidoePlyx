import multer from "multer"

//we are choosing diskstorage to save the uploaded content to the local server(computer)
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/temp')
    },
    filename: function (req, file, cb) {
    //   const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.originalname)
    },

  })
  console.log("we are at the multer hum multer pr aaye h")
  
  export const upload = multer({storage })