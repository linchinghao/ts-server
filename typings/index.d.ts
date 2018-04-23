import Mongoose from 'mongoose';
declare module 'egg' {

  interface Application {
    mongoose: Mongoose
  }
}