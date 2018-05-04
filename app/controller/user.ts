import { Controller } from 'egg';

export default class UserController extends Controller {
  public async index() {
    console.log('用户信息', this.ctx.user);
    // const user = new this.ctx.model.User({
    //   userName: 'allin',
    //   password: '123456',
    // });
    // await user.save();

    this.ctx.body = 'create user success';
  }
}
