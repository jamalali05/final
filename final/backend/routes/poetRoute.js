const express = require("express");
const { createPost, getPost } = require("../controller/poetController");

const router = express.Router();

router.post("/createPoet", createPoet);
router.get("/getPoet", getPoet);

module.exports = router;
