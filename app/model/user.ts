import { Application } from 'egg';

module.exports = (app: Application) => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const userSchema = new Schema({
    userName: { type: String  },
    password: { type: String  },
  });

  return mongoose.model('User', userSchema);
};
