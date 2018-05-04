import { Application, Context } from 'egg';
import { BizConfig } from '../../config/config.default';

module.exports = (options: BizConfig, app: Application) => {
  return async (ctx: Context, next: () => Promise<any>) => {
    console.log('是否授权', ctx.isAuthenticated());
    if (ctx.isAuthenticated()) {
      console.log('success');
      await next();
    } else {
      ctx.redirect('/login');
    }
  };
};
