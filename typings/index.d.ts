import Mongoose from 'mongoose';
import { PassportStatic } from 'passport';
declare module 'egg' {
  interface Application {
    mongoose: Mongoose
  }
}