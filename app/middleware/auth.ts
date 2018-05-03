import { Application, Context } from 'egg';
import { BizConfig } from '../../config/config.default';

module.exports = (options: BizConfig, app: Application) => {
  return async (ctx: Context, next: () => Promise<any>) => {
    if (ctx.isAuthenticated()) {
      console.log('success');
      await next();
    } else {
      ctx.redirect('/login');
      // return ctx.throw(401, new Error('AuthenticationError'));
    }
  };
};
