import type { Project } from "@/src/domain/project/Project";

export interface ProjectRepository {
  findAll(): Promise<Project[]>;
  findProjectAll(): Promise<Project[]>;
  findStudyAll(): Promise<Project[]>;
}
