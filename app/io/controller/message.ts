import { Controller } from 'egg';

export default class MsgController extends Controller {
  public async index() {
    // this.ctx.socket.on('message', (data: string) => {
    //   console.log('i receive by', data);
    // });
    this.ctx.socket.emit('message', 'send from node');
  }
};