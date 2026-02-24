import { GetProjectsUseCase } from "@/src/application/project/usecases/project/GetProjectsUseCase";
import { GetStudyUseCase } from "@/src/application/project/usecases/project/GetStudyUseCase";
import { PgProjectRepository } from "@/src/infrastructure/repositories/PgProjectRepository";

export function makeGetProjectsUseCase(): GetProjectsUseCase {
  return new GetProjectsUseCase(new PgProjectRepository());
}

export function makeGetStudyUseCase(): GetStudyUseCase {
  return new GetStudyUseCase(new PgProjectRepository());
}