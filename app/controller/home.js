const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'socketio7';
  }

  async serverConfig(){
    return this.ctx.body = {
      license:{
        expires: "2036-04-29T16:00:00.000Z",
        verified: true
      },
      oss:{
        enable: true
      },
      work:{
        agentid: "1000004",
        appid: "wwe023c483641e89b0",
        enable: true
      }
    }
  }
}

module.exports = HomeController;