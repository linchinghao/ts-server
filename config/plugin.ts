import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  passport: {
    enable: true,
    package: 'egg-passport',
  },
  nunjucks: {
    enable: true,
    package: 'egg-view-nunjucks',
  },
  mongoose: {
    enable: true,
    package: 'egg-mongoose',
  },
  io: {
    enable: true,
    package: 'egg-socket.io',
  },
  redis: {
    enable: true,
    package: 'egg-redis',
  },
  // assets: {
  //   enable: true,
  //   package: 'egg-view-assets',
  // },
};

export default plugin;
