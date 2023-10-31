
//para lidar com manipulação de arquivos

const uploadConfig = require("../configs/upload")
const path = require("path")
const fs = require('fs')

class DiskStorage{
    async saveFile(file){
        await fs.promises.rename(
            path.resolve(uploadConfig.TMP_FOLDER,file),
            path.resolve(uploadConfig.UPLOADS_FOLDER,file)
        );
        return file;
    }
    async deleteFile(file0){
        const filePath = path.resolve(uploadConfig.UPLOADS_FOLDER,file)
        try{
            await fs.promises.stat(filePath);
        }catch{
            return
        }
        await fs.promises.unlink(filePath)
    }
}

module.exports = DiskStorage