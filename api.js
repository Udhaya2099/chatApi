const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const cors = require("cors");
const dotenv = require("dotenv");
const sequelize = require("./model/dbconfig")
const authRoutes = require("./routes/authRoutes")
const messageRoutes = require("./routes/messageRoutes");
//const uploadRoutes = require("./routes/uploadRoutes");


// Middleware for Logging
const Log = require("./model/log");
const logActivity = async (userId, action) => {
  await Log.create({ userId, action });
};


dotenv.config();
const app = express();
const server = http.createServer(app);
const io = socketIo(server, { cors: { origin: "*" } });

app.use(express.json());
app.use(cors());

// Routes
/* app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/upload", uploadRoutes); */

//const app = express();
app.use(express.json());
app.use("/uploads", express.static("uploads"));
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// WebSocket Logic
/* io.on("connection", (socket) => {
  console.log("User connected");

  socket.on("sendMessage", (data) => {
    io.emit("receiveMessage", data);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
}); */

// WebSocket Logging in server.js
io.on("connection", (socket) => {
  console.log("User connected");

  socket.on("sendMessage", async (data) => {
    if (!data.userId) {
      console.error("Missing userId in message data");
      return;
    }
    io.emit("receiveMessage", data);
    await logActivity(data.userId, "Message Sent");
  });

  socket.on("disconnect", async () => {
    console.log("User disconnected");
    await logActivity(socket.id, "User Disconnected");
  });
});

// Sync DB & Start Server
const PORT = process.env.PORT || 5000;
sequelize.sync()
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error("Error during Sequelize sync:", err);
  });

