import { verify } from 'crypto';
import mongoose, {Schema, Document} from 'mongoose';
import { unique } from 'next/dist/build/utils';
import { boolean, string } from 'zod';


export const connectToDatabase = async () => {
  await mongoose.connect('your_mongo_url');
};
export interface Message extends Document{
    content: string;
    createdAt: Date;
}

const MessageSchema: Schema<Message> = new Schema({
    content: {
        type: String,
        required: true
    },

    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    },
})

export interface User extends Document{
   username: string;
   email: string;
   password:string;
   verifyCode: string;
   verifyCodeExpiry: Date;
   isVerified: boolean;
   isAcceptingMessage: boolean;
   messages: Message[]
}

const UserSchema: Schema<User> = new Schema({
    username: {
        type: String,
        required: [true, "User name is required"],
        trim: true,
        unique: true
    },

    email: {
        type: string,
        required: [true, "Email is required"],
        unique: true,
        match: [/.+\@.+\..+/, 'Please use a valid Email address']
    },

    passord: {
        type: string,
        required: [true, "Passord is required"]
    },
    verifyCode: {
        type: string,
        required: [true, "verifyCode is required"]
    },

    verifyCodeExpiry: {
        type: Date,
        required: [true, "verify Code Expiry is required"]
    },

    isVerified: {
        type: Boolean,
        default: false,
    },

    isAcceptingMessage: {
        type: Boolean,
        default: true,
    },

    messages: [MessageSchema]
})

const UserModel = (mongoose.models.User as mongoose.Model<user>)
 || mongoose.model<User>("User", UserSchema)

 export default UserModel;