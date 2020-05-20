import { Document, model, Model, Schema } from 'mongoose'
import { ObjectID } from 'mongodb'
import { IUser } from '../interfaces'

const UserSchema = new Schema({
  UserName: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: String,
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
})

UserSchema.statics.fullName = function() {
  return this.firstName + ' ' + this.lastName
}

export interface IUserDocument extends IUser, Document {
  _id: ObjectID | string
  insertedId?: string
}

export const UserModel: Model<IUserDocument> = model<IUserDocument>('users', UserSchema)
