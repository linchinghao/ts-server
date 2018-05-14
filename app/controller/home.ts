import { Controller } from 'egg';
import * as jsonwebtoken from 'jsonwebtoken';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    // ctx.body = await ctx.service.test.sayHi('egg');

    if (ctx.isAuthenticated()) {
      ctx.body = `<div>
        <h2>${ctx.path}</h2>
        <hr>
        <a href="/logout">Logout</a>
        <pre><code>${JSON.stringify(ctx.user, null, 2)}</code></pre>
        <hr>
        <a href="/">Home</a> | <a href="/user">User</a>
      </div>`;
    } else {
      ctx.session.returnTo = ctx.path;
      ctx.body = `
        <div>
          <h2>${ctx.path}</h2>
          <a href="/">Home</a> | <a href="/user">User</a>
        </div>
      `;
    }
  }

  public authCallback() {
    const { ctx } = this;
    ctx.redirect('/');
  }

  public login() {
    const { ctx, app } = this;
    if (ctx.method === 'GET') {

      // console.log('sign', jsonwebtoken.sign({
      //   iss: 'example jwt', // 签发者
      //   iat: Date.now(), // 签发时间
      //   exp: 1 * 60, // 过期时间
      //   aud: 'example.com', // 听众
      //   sub: 'allin', // 主体
      // }, app.config.keys));

      console.log('#sign', jsonwebtoken.sign({
        username: 'allin',
      }, app.config.keys));

      ctx.body = `
        <div>
          <form action="/login?_csrf=${ctx.csrf}" method="POST">
            username: <input type="text" name="username"/>
            password: <input type="password" name="password" />
            <button type="submit">submit</button>
          </form>
        </div>
      `;
    } else if (ctx.method === 'POST') {
      console.log('@ctx.request.body', ctx.request.body);
      ctx.body = ctx.request.body;
      // const { username } = ctx.request.body;
      // const signToken = jsonwebtoken.sign({ username }, app.config.keys);
      // ctx.cookies.set('token', signToken, {
      //   signed: true,
      // });
      // ctx.body = ctx.request.body;
    }
  }

  public logout() {
    const { ctx } = this;
    ctx.logout();
    ctx.redirect(ctx.get('referer') || '/');
  }

  public async testSocket() {
    const { ctx } = this;
    await ctx.render('home.nj');
  }

  public async test() {
    const { ctx } = this;
    ctx.body = await this.ctx.service.test.sayHi('Hello test');
  }

  public async create() {
    this.ctx.body = this.ctx.request.body;
  }
}
