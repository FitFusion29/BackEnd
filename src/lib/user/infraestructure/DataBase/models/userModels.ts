
import mongoose, { Schema, Document } from 'mongoose';

// Definir la interfaz del documento de User
export interface IUser extends Document {
  id: number;
  email: string;
  name: string;
  password: string;
}

// Definir el esquema de Mongoose para User
const userSchema = new Schema<IUser>({
  id: { type: Number, required: true },
  email: { type: String, required: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
  // Agrega otros campos según tu entidad 'user'
});

// Exportar el modelo de Mongoose
export const UserModel = mongoose.model<IUser>('User', userSchema);
