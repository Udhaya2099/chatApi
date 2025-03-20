const { DataTypes } = require("sequelize");
const sequelize = require("../model/dbconfig");

const Message = sequelize.define("Message", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  senderId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  receiverId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  message: {
    type: DataTypes.TEXT,
    allowNull: true,  // Message is optional if only a file is sent
  },
  fileUrl: {
    type: DataTypes.STRING,
    allowNull: true,  // File is optional
  },
}, {
  tableName: "Message",
  timestamps: true,
});

module.exports = Message;
