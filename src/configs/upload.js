const path  = require("path");
const multer = require("multer")
const crypto = require("crypto")
const TMP_FOLDER = path.resolve(__dirname,"..","..","tmp")
const UPLOADS_FOLDER =  path.resolve(TMP_FOLDER,"uploads")

const MULTER = {
    storage: multer.diskStorage({
        destination:TMP_FOLDER,
        filename(req,file,callback){
            // usamos o crypto para gerar um hash, para o nome do arquivo não acontecer de ter igual e não sobrepor
            const fileHash = crypto.randomBytes(10).toString('hex')
            const fileName = `${fileHash}-${file.originalname}`
            console.log(`sem string ${crypto.randomBytes(10)}`)
            console.log(`com string ${crypto.randomBytes(10).toString('hex')}`)
            return callback(null,fileName)
        }
    })
}
module.exports = {
    TMP_FOLDER,
    UPLOADS_FOLDER,
    MULTER
}