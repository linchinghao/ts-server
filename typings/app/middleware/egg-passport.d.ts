import * as passport from 'passport';

// TODO: fix egg-passport index.d.ts
declare module 'egg' {
  export interface Application {
    passport: passport
  }
}