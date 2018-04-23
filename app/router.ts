import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  const { home, user } = controller;

  router.get('/', home.index);
  router.get('/test', home.test);
  router.post('/create', home.create);

  router.get('/user/:id', user.index);

};
