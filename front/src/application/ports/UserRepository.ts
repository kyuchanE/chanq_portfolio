import type { User } from "@/src/domain/user/User";

export interface UserRepository {
  getById(id: string): Promise<User | null>;
}
