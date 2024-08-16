import { User } from "../../db/modals/user.modal";
import { Arg, Ctx, Field, InputType, Mutation, Query, Resolver } from "type-graphql";
import bcrypt from "bcrypt"
import { Response } from "express"
import jwt from "jsonwebtoken"


@InputType()
class AuthInputT {
  @Field()
  email: string;

  @Field()
  phoneNumber: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  password: string;
}

@InputType()
class AuthLoginT {
  @Field()
  email: string;

  @Field()
  password: string;
}


@Resolver()
export class AuthResolver {


  @Query(() => String)
  public async check() {
    try {
      return "Working"

    } catch (error) {
      return "error"

    }
  }

  @Mutation(() => String)
  public async registerUser(
    @Arg("body") body: AuthInputT,
    @Ctx("res") res: Response
  ) {
    try {

      const hashedPassword: string = await bcrypt.hash(body.password, 10)


      const user = new User({
        email: body.email,
        password: hashedPassword,
        firstName: body.firstName,
        lastName: body.lastName,
        phoneNumber: body.phoneNumber
      })

      const savedUser = await user.save()

      const token = jwt.sign(body.password, "secret")

      res.cookie("NEcomCheck", token)


      if (!savedUser) {
        return "Error in try"
      }

      return "User registerd"

    } catch (error) {
      console.log(error)
      return "Error Occured"

    }
  }



  @Mutation(() => String)
  public async loginUser(
    @Arg("body") body: AuthLoginT,
    @Ctx("res") res: Response
  ) {
    try {
      const { email, password } = body;


      const exisingEmail = await User.find({ email: email })

      if (!exisingEmail) {
        return "No Email Found"
      }
      const passwordCheck = await bcrypt.compare(exisingEmail[0].password, password)


      if (!passwordCheck) {
        return "Password is incorrect"
      }

      const token = jwt.sign(body.password, "secret", { algorithm: "RS256" })
      res.cookie("NEcomCheck", token)

      return "Login Succesfull"

    } catch (error) {
      console.log(error)
      return "Error Occured"

    }
  }

}
