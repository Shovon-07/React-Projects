const express = require("express");
const http = require("http");
const app = express();
const expressServer = http.createServer(app);
const PORT = 3000;
const path = require("path");

// Express
app.use(express.static("../dist"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../dist", "index.html"));
});

app.get("/express-server", (req, res) => {
  res.end("This is express server response");
});

// Socket
const { Server } = require("socket.io");
const io = new Server(expressServer, {});

io.on("connection", (socket) => {
  console.log(socket.id, " has connected !");

  socket.emit("Mydata", "This is server data via socket");

  socket.on("disconnect", () => {
    console.log(socket.id, " has disconnected !");
  });
});

// Run server
expressServer.listen(PORT, () => {
  console.log("Server connected @ " + PORT);
});
