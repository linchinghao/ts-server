import { EggAppConfig, PowerPartial } from 'egg';

// for config.{env}.ts
export type DefaultConfig = PowerPartial<EggAppConfig & BizConfig>;

// app special config scheme
export interface BizConfig {
  sourceUrl: string;
}

export default (appInfo: EggAppConfig) => {
  const config = {} as PowerPartial<EggAppConfig> & BizConfig;

  // app special config
  // config.sourceUrl = `https://github.com/eggjs/examples/tree/master/${appInfo.name}`;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1524105573066_5877';

  // 配置中间件
  config.middleware = ['logger'];

  // onerror
  config.onerror = {
    // 统一异常处理
  };

  // mongo设置
  config.mongoose = {
    url: 'mongodb://127.0.0.1/wpt-demo',
    options: {},
  };

  // socket.io设置
  config.io = {
    init: { }, // passed to engine.io
    namespace: {
      '/': {
        connectionMiddleware: [],
        packetMiddleware: [],
      },
    },
    // redis: {
    //   host: '127.0.0.1',
    //   port: 6379
    // }
  };

  config.redis = {
    client: {
      port: 6379,
      host: '127.0.0.1',
      password: 'auth',
      db: 0,
    },
  };

  return config;
};
