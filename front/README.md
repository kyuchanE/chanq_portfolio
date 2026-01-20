## Architecture Mapping

If you prefer a 3-layer Clean Architecture model (Presentation / Domain / Data), use this mapping:

- Presentation -> app/, src/presentation/
- Domain -> src/domain/
- Data -> src/application/ (ports/use cases) + src/infrastructure/ (implementations)

## Domain vs DTO

- Domain is the internal source of truth and should stay pure and stable.
- Use cases should return Domain entities and operate on Domain types.
- DTOs are for boundaries only (BFF HTTP responses, external API contracts).

## BFF Design Rules

- Clients call only `app/api/*` routes; never call external REST APIs directly.
- Route handlers validate input, call use cases, then map Domain -> DTO for HTTP responses.
- External REST responses are mapped to Domain entities in Infrastructure (adapters).
- Keep external API contracts isolated (e.g., `Remote*Response` types).
- Normalize errors at the BFF boundary (status codes + message shape).
- Do not return Domain entities directly from BFF responses.
- Keep DTO usage at the boundaries; avoid DTOs in core Domain logic.
