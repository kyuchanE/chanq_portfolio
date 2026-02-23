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
