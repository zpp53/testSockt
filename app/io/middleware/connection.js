//中间件负责连接处理

module.exports = app => {
  return async (ctx, next) => {
    const { socket, logger, helper } = ctx;
    const id = socket.id;
    const nsp = app.io.of('/');
    const query = socket.handshake.query;
    console.log(789789, id, nsp, query);
  };
};