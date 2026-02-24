## Architecture Mapping

If you prefer a 3-layer Clean Architecture model (Presentation / Domain / Data), use this mapping:

- Presentation -> app/, src/presentation/
- Domain -> src/domain/
- Data -> src/application/ (ports/use cases) + src/infrastructure/ (implementations)

## Domain vs DTO

- Domain is the internal source of truth and should stay pure and stable.
- Use cases should return Domain entities and operate on Domain types.
- DTOs are for boundaries only (UI boundary models, external API contracts).

## Next.js Direct DB Rules

- Never access the DB from Client Components.
- Query/update the DB only in Next.js server runtime code (Server Components, Server Actions, or Route Handlers when needed).
- Server runtime entry points validate input, call use cases, and map Domain -> boundary models.
- DB results are mapped to Domain entities in Infrastructure (repositories/adapters).
- Keep DB access logic isolated (repository/query types).
- Normalize errors at server boundaries (UI error state or HTTP response shape).
- Do not return Domain entities directly to client-facing boundaries.
- Keep DTO usage at the boundaries; avoid DTOs in core Domain logic.

## Dependency Injection (DI) Rules

- Avoid creating concrete infrastructure dependencies inline at presentation boundaries when possible.
- Use a composition root pattern for wiring dependencies (for example, `src/infrastructure/di/*`).
- Inject repository implementations into use cases via constructor injection.
- Server runtime entry points should call DI factories, then execute use cases.
- Keep dependency direction inward: Presentation -> Application -> Domain, with Infrastructure only used for wiring/implementations.

## Local Postgres Setup (5432)

1. Copy env file.

```bash
cp .env.example .env.local
```

2. Set `DATABASE_URL` in `.env.local`.

```env
DATABASE_URL=postgres://postgres:your_password@localhost:5432/your_database
```

3. Create sample table.

```sql
create table if not exists projects (
  id uuid primary key,
  title text not null,
  summary text not null,
  created_at timestamptz not null default now()
);
```

## DB Call Flow In This Project

1. `app/project/page.tsx` (Server Component) calls DI factory.
2. `src/infrastructure/di/projectUseCases.ts` wires `GetProjectsUseCase` with `PgProjectRepository`.
3. `src/application/project/usecases/GetProjectsUseCase.ts` orchestrates.
4. `src/application/project/ports/ProjectRepository.ts` defines repository port.
5. `src/infrastructure/repositories/PgProjectRepository.ts` runs SQL via `src/infrastructure/db/postgres.ts`.
6. Domain entity (`src/domain/project/Project.ts`) is mapped to view model (`src/presentation/view-models/project/ProjectCardVm.ts`) only at the page boundary.
7. `src/presentation/components/project/ProjectList.tsx` renders UI from props.
