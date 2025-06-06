import { UsersModel } from "../models/Users.model";
import { CreateUserPayload, LoginPayload } from "../schemas/user.schema";
import { verifyPassword } from "../utils/bcrypt";

class UserService {
  private static instance: UserService;

  constructor() {
    if (UserService.instance) {
      return UserService.instance;
    }

    UserService.instance = this;
  }

  async createUser(createUserPayload: {
    name: string;
    email: string;
    password: string;
  }) {
    const data = await UsersModel.create(createUserPayload);
    return data._id;
  }

  async finUserByEmail(email: string) {
    const user = await UsersModel.findOne({
      email: email,
      isActive: true,
    });

    return user;
  }

  async validateUser(loginPayload: LoginPayload) {
    const user = await UsersModel.findOne({
      email: loginPayload.email,
      isActive: true,
    });

    if (!user) return { message: "User not found", data: null };
    else {
      const verified = await verifyPassword(
        loginPayload.password,
        user.password
      );
      if (!verified) return { message: "Invalid Password", data: null };
      return {
        message: "Success",
        data: {
          id: user._id,
          email: user.email,
          name: user.name,
        },
      };
    }
  }
}

export default UserService;
