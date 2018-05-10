/**
 * Usage: index.d.ts
 */

import { Authenticator, Strategy } from 'passport';

declare module 'egg' {
  export interface Application {
    passport: EggPassport
  }

  interface EggPassport extends Authenticator {
    doVerify: (req: Context, user: object, done: any) => void;
    verify: ( fn: (ctx: Context, user: object) => any) => void;
    mount?: (strategy: Strategy, options: object) => void;
  }

  export interface Context  {
    user?: User,
    login(user: any, options: any): void;
    logout(): void;
    isAuthenticated(): boolean;
  }
  interface User {
      [_: string]: any;
  }
}
