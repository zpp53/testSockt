const Controller = require('egg').Controller;

class NspController extends Controller {
  async index() {
    const { ctx, app } = this;
    const nsp = app.io.of('/');
    const message = ctx.args[0] || {};
    const { project } = ctx.args[1];
    const socket = ctx.socket;
    const client = socket.id;

    console.log(2222, nsp.adapter);
    if(!project) {
      ctx.socket.emit('discnt');
      ctx.socket.disconnect();
    } else {
      setInterval(() =>{
        ctx.socket.emit('response', `Hi! I've got your message: ${message}`)
      }, 5000)
    }
  }
}

module.exports = NspController;