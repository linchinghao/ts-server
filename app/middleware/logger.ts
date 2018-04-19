import { Context } from 'egg';

module.exports = () => {
  return async (ctx: Context, next: any) => {
    ctx.logger.info('request..', ctx.url);
    await next();
  };
};
