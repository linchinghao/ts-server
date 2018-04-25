import { Controller } from 'egg';

export default class HomeController extends Controller {
  server() {
    this.ctx.socket.emit('res', 'hi socket here');
  }
}
