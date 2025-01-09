import { Schema, model } from 'mongoose';
import { IUser } from '../../../domain/interfaces/IUser';

const userSchema = new Schema<IUser>({
    userName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    is_verified: { type: Boolean, default: false },
    is_blocked: { type: Boolean, default: false },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
});

userSchema.pre('save', function (next) {
    this.updated_at = new Date();
    next();
});

export const UserModel = model<IUser>('User', userSchema);