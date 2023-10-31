const { Router } = require("express");
const multer = require("multer");
const ensureAuthenticated = require("../middleware/ensureAuthenticated");
const UsersController = require("../controllers/UserController");
const UserAvatarController = require('../controllers/UserAvatarControoler')
const uploadConfig = require("../configs/upload");
const userRoutes = Router();

const userController = new UsersController();
const userAvatarController = new UserAvatarController()
const upload = multer(uploadConfig.MULTER);

userRoutes.post("/", userController.create);
// usando o middleware
userRoutes.put("/", ensureAuthenticated, userController.update);
// o path usamos para quando queremos atualizar um campo especifico
/* userRoutes.patch("/avatar",ensureAuthenticated,upload.single("avatar"),(req,res) => {
    console.log(req.file.filename)
    res.json({
        nome:"oi"
    }) */
userRoutes.patch(
  "/avatar",
  ensureAuthenticated,
  upload.single("avatar"),
  userAvatarController.update
);

module.exports = userRoutes;
