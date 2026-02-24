import "server-only";
import type { ProjectRepository } from "@/src/application/project/ports/ProjectRepository";
import type { Project } from "@/src/domain/project/Project";
import { getPgPool } from "@/src/infrastructure/db/postgres";
import {
  mapProjectRowToProject,
  type ProjectRow,
} from "@/src/infrastructure/mappers/pgProjectMapper";

export class PgProjectRepository implements ProjectRepository {
  async findAll(): Promise<Project[]> {
    const result = await getPgPool().query<ProjectRow>(
      `
        select
          id,
          type,
          contents,
          start,
          title,
          finish
        from portfolio.projects
        order by id desc
      `,
    );

    return result.rows.map(mapProjectRowToProject);
  }

  async findProjectAll(): Promise<Project[]> {
    const result = await getPgPool().query<ProjectRow>(
      `
        select
          id,
          type,
          contents,
          start,
          title,
          finish
        from portfolio.projects
        where type = 'p'
        order by id desc
      `,
    );

    return result.rows.map(mapProjectRowToProject);
  }

  async findStudyAll(): Promise<Project[]> {
    const result = await getPgPool().query<ProjectRow>(
      `
        select
          id,
          type,
          contents,
          start,
          title,
          finish
        from portfolio.projects
        where type = 's'
        order by id desc
      `,
    );

    return result.rows.map(mapProjectRowToProject);
  }
}
