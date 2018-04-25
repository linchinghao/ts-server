import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  const { home, user } = controller;

  router.get('/', home.index);
  router.get('/test', home.test);
  router.post('/create', home.create);

  router.get('/user/:id', user.index);

  // socket.io
  app.io.of('/').route('home', app.io.controller.home.server);
  app.io.route('message', app.io.controller.message.index);

};
