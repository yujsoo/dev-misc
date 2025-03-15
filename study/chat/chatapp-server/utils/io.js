const userController = require("../Controllers/user.controller");
const chatController = require("../Controllers/chat.controller");
// 통신 관련
module.exports = function (io) {
  // io
  io.on("connection", async (socket) => {
    console.log("client is connected", socket.id);

    socket.on("login", async (userName, cb) => {
      try {
        const user = await userController.saveUser(userName, socket.id);
        const welcomeMessage = {
          chat: `${user.name} is joined to this room`,
          user: { id: null, name: "system" },
        };
        io.emit("message", welcomeMessage);
        cb({
          ok: true,
          data: user,
        });
      } catch (error) {
        cb({
          ok: false,
          error: error.message,
        });
      }
    });

    // 메세지에 대해 듣는다!
    socket.on("sendMessage", async (message, cb) => {
      try {
        //유저 찾기 socket id로
        const user = await userController.checkUser(socket.id);
        //메세지 저장
        const newMessage = await chatController.saveChat(message, user);
        io.emit("message", newMessage); // 전체 클라이언트한테 알려야 함.
        cb({ ok: true });
        //   cb({
        //     ok: true,
        //     data: newMessage,
        //   });
      } catch (error) {
        cb({
          ok: false,
          error: error.message,
        });
      }
    });

    socket.on("disconnect", () => {
      console.log("user is disconnected");
    });
  });
};
