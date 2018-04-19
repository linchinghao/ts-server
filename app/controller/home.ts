import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    ctx.body = await ctx.service.test.sayHi('egg');
  }

  public async test() {
    await this.ctx.service.test.sayHi('asdf');
  }

  public async create() {
    this.ctx.body = this.ctx.request.body;
  }
}
