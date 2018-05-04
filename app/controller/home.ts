import { Controller } from 'egg';

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
    const { ctx } = this;
    if (ctx.method === 'GET') {
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
      ctx.body = ctx.request.body;
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
