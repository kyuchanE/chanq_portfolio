import type { Project } from "@/src/domain/project/Project";
import type { ProjectRepository } from "@/src/application/project/ports/ProjectRepository";

export class GetProjectsUseCase {
  constructor(private readonly projectRepository: ProjectRepository) { }

  async execute(): Promise<Project[]> {
    return this.projectRepository.findProjectAll();
  }
}
