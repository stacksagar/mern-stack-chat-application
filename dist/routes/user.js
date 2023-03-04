"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const { register, login, users, setAvatar, user, deleteUser, } = require("../controller/user");
const auth = require("../middleware/auth");
const router = (0, express_1.Router)();
router.post("/signup", register);
router.post("/login", login);
router.use(auth);
router.get("/user", users);
router.get("/user/:user", user);
router.put("/avatar/:user", setAvatar);
router.delete("/delete/:user", deleteUser);
module.exports = router;
