const Message = require("../model/message");
const upload = require("../config/multerConfig");

// Send Message with File Upload
exports.sendMessage = async (req, res) => {
  try {
    const { senderId, receiverId, message } = req.body;
    const fileUrl = req.file ? `/uploads/${req.file.filename}` : null;
    

    const newMessage = await Message.create({
      senderId,
      receiverId,
      message,
      fileUrl,
    });

    res.status(201).json({
      message: "Message sent successfully",
      data: newMessage,
    });
  } catch (error) {
    res.status(500).json({ message: "Error sending message", error });
  }
};

// ✅ Add this function to fix the error
exports.getMessages = async (req, res) => {
  try {
    const { senderId, receiverId } = req.params;

    const messages = await Message.findAll({
      where: {
        senderId,
        receiverId,
      },
      order: [["createdAt", "ASC"]],
    });

    res.status(200).json({
      message: "Messages retrieved successfully",
      data: messages,
    });
  } catch (error) {
    res.status(500).json({ message: "Error retrieving messages", error });
  }
};
