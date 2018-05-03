import { Application, Context } from 'egg';
module.exports = (app: Application) => {
  return async (ctx: Context, next: any) => {
      ctx.socket.emit('connection', 'connected!');
      // execute when disconnect.
      ctx.socket.on('disconnect', (reason: any) => {
        console.log('disconnection', reason);
      });
      await next();
  };
};
