import { model, Schema } from "mongoose";

interface UserSchemaType {
  email: string;
  phoneNumber: string;
  firstName: string;
  lastName: string;
  password: string
  updated: Date;
  created: Date


}

const UserSchema = new Schema<UserSchemaType>({
  email: {
    type: String,
  },
  phoneNumber: {
    type: String
  },
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  password: {
    type: String
  },
  // merchant: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'Merchant',
  //   default: null
  // },
  // provider: {
  //   type: String,
  //   required: true,
  //   default: EMAIL_PROVIDER.Email
  // },
  // googleId: {
  //   type: String
  // },
  // facebookId: {
  //   type: String
  // },
  // avatar: {
  //   type: String
  // },
  // role: {
  //   type: String,
  //   default: ROLES.Member,
  //   enum: [ROLES.Admin, ROLES.Member, ROLES.Merchant]
  // },
  // resetPasswordToken: { type: String },
  // resetPasswordExpires: { type: Date },
  updated: Date,
  created: {
    type: Date,
    default: Date.now
  }
});


export const User = model("User", UserSchema)
