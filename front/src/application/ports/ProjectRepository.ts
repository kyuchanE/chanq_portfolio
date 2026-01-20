import { Project } from "@/src/domain/project/Project";

export interface ProjectRepository {
    getProjectHierarchy(): Promise<Project[]>
}