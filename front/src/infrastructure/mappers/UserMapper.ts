import type { User } from "@/src/domain/user/User";
import type { RemoteUserDTO } from "@/src/infrastructure/dtos/RemoteUserDTO";

export const toUser = (remote: RemoteUserDTO): User => {
  return {
    id: String(remote.id),
    name: remote.name,
    email: remote.email,
  };
};
