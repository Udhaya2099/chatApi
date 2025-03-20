const express = require("express");
const { sendMessage, getMessages } = require("../processController/messageController");
const authMiddleware = require("../middleware/authMiddleware");
const upload = require("../config/multerConfig");
const messageController = require("../processController/messageController");

const router = express.Router();

router.post("/send", sendMessage);
router.get("/:senderId/:receiverId", getMessages);
router.post("/sendMessage", authMiddleware, upload.single("file"), messageController.sendMessage);

module.exports = router;
