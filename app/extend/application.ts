import { Application } from 'egg';

export default {
  test(this: Application) {
    this.test = '#test extend Application';
  },
};

declare module 'egg' {
  interface Application {
    test: any;
  }
}
