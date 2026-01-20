import { NextResponse } from "next/server";
import { createAxiosClient } from "@/src/infrastructure/http/axiosClient";
import { RemoteUserRepository } from "@/src/infrastructure/repositories/RemoteUserRepository";
import { GetUserById } from "@/src/application/usecases/GetUserById";
import type { UserDTO } from "@/src/application/dtos/UserDTO";
import type { User } from "@/src/domain/user/User";

type RouteParams = {
  params: { id?: string };
};

export async function GET(_request: Request, { params }: RouteParams) {
  const id = params.id?.trim();
  if (!id) {
    return NextResponse.json({ message: "id is required" }, { status: 400 });
  }

  const baseURL = process.env.EXTERNAL_API_BASE_URL;
  if (!baseURL) {
    return NextResponse.json(
      { message: "EXTERNAL_API_BASE_URL is not configured" },
      { status: 500 },
    );
  }

  const http = createAxiosClient(baseURL);
  const repository = new RemoteUserRepository(http);
  const useCase = new GetUserById(repository);

  try {
    const user = await useCase.execute(id);
    if (!user) {
      return NextResponse.json({ message: "user not found" }, { status: 404 });
    }

    return NextResponse.json(toUserDTO(user), { status: 200 });
  } catch {
    return NextResponse.json(
      { message: "failed to fetch user" },
      { status: 502 },
    );
  }
}

function toUserDTO(user: User): UserDTO {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
  };
}
