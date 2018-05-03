import * as passport from 'passport';

declare module 'egg' {
  export interface Application {
    passport: passport
  }
}