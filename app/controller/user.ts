import { Controller } from 'egg';

export default class UserController extends Controller {
  public async index() {
    const user = new this.ctx.model.User({
      userName: 'haha',
      password: 'asdf',
    });
    await user.save();

    this.ctx.body = 'asd';
  }
}
