import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ name, email }: IRequest): User {
    const emailAlreadyTaken = this.usersRepository.findByEmail(email);

    if (emailAlreadyTaken) {
      throw new Error(
        "This email is already in use! Couldn't created a new user."
      );
    }
    const user = this.usersRepository.create({
      name,
      email,
    });
    return user;
  }
}

export { CreateUserUseCase };
