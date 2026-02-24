# Agent Instructions

## Project Summary
- Next.js App Router project.
- Use Clean Architecture for new code.
- Access the local Postgres DB directly from Next.js server runtime (Server Components / Server Actions / Route Handlers when needed).
- Use Tailwind CSS for styling.

## Clean Architecture Rules
- Keep dependencies pointing inward: Presentation -> Application -> Domain.
- Domain has no framework dependencies.
- Application orchestrates use cases and calls domain + ports.
- Infrastructure implements ports (API clients, storage, etc.).
- Use cases should return Domain entities; map to DTOs at presentation or external API boundaries.
- DTOs belong at boundaries (API/client contracts), not as internal domain models.

## Recommended Structure
- app/: Next.js routes, layouts, and UI composition (presentation layer).
- app/api/: optional route handlers only when external HTTP endpoints are required.
- src/domain/: Entities, value objects, domain services, business rules.
- src/application/: Use cases, DTOs, ports (interfaces).
- src/infrastructure/: Port implementations (repositories, external clients, DB adapters).
- src/presentation/: UI-only components, view models, hooks.

## 3-Layer Mapping
- Presentation -> app/, src/presentation/
- Domain -> src/domain/
- Data -> src/application/ (ports/use cases) + src/infrastructure/ (implementations)

## Next.js Direct DB Access Guidelines
- Never access the DB from Client Components.
- DB access is allowed only in server runtime code (Server Components, Server Actions, or Route Handlers).
- Server runtime entry points should:
  - Validate inputs.
  - Call application use cases.
  - Map Domain entities to view models/DTOs only at the boundary.
  - Map domain/app errors to user-facing error states or HTTP responses.
- Keep secrets in server-only env vars; never expose keys to the client.
- Isolate DB access logic inside Infrastructure (repositories/adapters).
- Do not expose Domain entities directly to client boundaries.
- Keep DTOs only at boundaries; do not use DTOs inside Domain or core application logic.

## Tailwind Guidelines
- Use Tailwind utility classes for styling.
- Prefer composing styles in JSX/TSX; avoid custom CSS unless necessary.
- If custom CSS is needed, place it in a dedicated file and keep it minimal.

## Coding Conventions
- Add new domain/app/infrastructure modules in their layers; avoid mixing.
- Keep UI components presentational; move logic to hooks/use cases.
- Prefer typed DTOs between layers.

## Dependency Injection (DI) Rules
- Do not instantiate infrastructure implementations directly in UI components/pages when avoidable.
- Keep object wiring in a dedicated composition area (for example, `src/infrastructure/di/*` factory modules).
- Presentation layer should depend on application abstractions/use cases, not concrete repository classes.
- Infrastructure classes may be created in composition factories and injected into use cases through constructor parameters.
- If a server entry point (Server Component / Server Action / Route Handler) needs a use case, call a DI factory function instead of composing dependencies inline.
- Prefer constructor injection for use cases and services.

## Testing (if added later)
- Unit test domain and application layers without Next.js dependencies.
- Integration test server runtime entry points (Server Actions / Route Handlers / Server Component loaders) with mocked DB repositories.
