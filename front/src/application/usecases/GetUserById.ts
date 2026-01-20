import type { UserRepository } from "@/src/application/ports/UserRepository";
import type { User } from "@/src/domain/user/User";

export class GetUserById {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(id: string): Promise<User | null> {
    const user = await this.userRepository.getById(id);
    if (!user) return null;

    return user;
  }
}
