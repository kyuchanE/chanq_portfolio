import { type AxiosError, type AxiosInstance } from "axios";
import type { UserRepository } from "@/src/application/ports/UserRepository";
import type { User } from "@/src/domain/user/User";
import type { RemoteUserDTO } from "@/src/infrastructure/dtos/RemoteUserDTO";
import { toUser } from "@/src/infrastructure/mappers/UserMapper";

export class RemoteUserRepository implements UserRepository {
  constructor(private readonly http: AxiosInstance) {}

  async getById(id: string): Promise<User | null> {
    try {
      const response = await this.http.get<RemoteUserDTO>(`/users/${id}`);
      return toUser(response.data);
    } catch (error) {
      const axiosError = error as AxiosError;
      if (axiosError.response?.status === 404) return null;

      throw error;
    }
  }
}
