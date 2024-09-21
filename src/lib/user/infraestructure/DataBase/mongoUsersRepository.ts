
import { userRepository } from '../../domain/user/userRepository';
import { user } from '../../domain/user/user';
import { userId } from '../../domain/user/userId';
import { userEmail } from '../../domain/user/userEmail';
import { userFullName } from '../../domain/user/userFullName';
import { userPassword } from '../../domain/user/userPassword';

import mongoose from 'mongoose';
import { UserModel, IUser } from './models/userModels'



export class mongoUsersRepository implements userRepository {

  constructor(databaseUrl: string) {
    mongoose.connect(databaseUrl)
      .then(() => console.log('Connected to database'))
      .catch((err) => console.error('connection error:', err));
  }

  async userCreate(user: user): Promise<void> {
    const newUser = new UserModel({
      id: user.id.value, // Estructura correcta de la entidad 'user'
      name: user.fullName.value,
      email: user.email.value,
      password: user.password,
    });
    await newUser.save();
  }

  async userGetUserById(id: userId): Promise<user | null> {
    const foundUser = await UserModel.findById(id.value);
    return foundUser ? this.mapToDomain(foundUser) : null;
  }

  async userGetUserByEmail(email: userEmail): Promise<user | null> {
    const foundUser = await UserModel.findOne({ email: email.value });
    return foundUser ? this.mapToDomain(foundUser) : null;
  }

  async userUpdate(user: user): Promise<void> {
    await UserModel.updateOne({ _id: user.id.value }, {
      email: user.email.value,
      name: user.fullName.value,
      password: user.password
    });
  }

  async userDelete(id: userId): Promise<void> {
    await UserModel.deleteOne({ _id: id.value });
  }

  async userGetAllUsers(): Promise<user[]> {
    const users = await UserModel.find();
    return users.map(this.mapToDomain);
  }

  // Mapeo de los documentos de Mongoose a la entidad de dominio 'user'
  private mapToDomain(userDocument: IUser): user {
    return new user(
      new userId(userDocument.id),
      new userFullName(userDocument.name),
      new userEmail(userDocument.email),
      new userPassword(userDocument.password)
    );
  }
}

