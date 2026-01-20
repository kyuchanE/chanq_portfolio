# Agent Instructions

## Project Summary
- Next.js App Router project.
- Use Clean Architecture for new code.
- Use a BFF (Backend For Frontend) to proxy external REST APIs.
- Use Tailwind CSS for styling.

## Clean Architecture Rules
- Keep dependencies pointing inward: Presentation -> Application -> Domain.
- Domain has no framework dependencies.
- Application orchestrates use cases and calls domain + ports.
- Infrastructure implements ports (API clients, storage, etc.).
- Use cases should return Domain entities; map to DTOs at BFF or presentation boundaries.
- DTOs belong at boundaries (API/client contracts), not as internal domain models.

## Recommended Structure
- app/: Next.js routes, layouts, and UI composition (presentation layer).
- app/api/: BFF route handlers (server-only API proxy endpoints).
- src/domain/: Entities, value objects, domain services, business rules.
- src/application/: Use cases, DTOs, ports (interfaces).
- src/infrastructure/: Port implementations (REST clients, repositories).
- src/presentation/: UI-only components, view models, hooks.

## 3-Layer Mapping
- Presentation -> app/, src/presentation/
- Domain -> src/domain/
- Data -> src/application/ (ports/use cases) + src/infrastructure/ (implementations)

## BFF Guidelines
- External REST calls must go through BFF routes in `app/api/*`.
- Do not call external APIs directly from client components.
- Route handlers should:
  - Validate inputs.
  - Call application use cases.
  - Convert Domain entities to DTOs for HTTP responses.
  - Map domain/app errors to HTTP responses.
- Keep secrets in server-only env vars; never expose keys to the client.
- Isolate external API contracts inside Infrastructure (e.g., `Remote*Response` types).
- Normalize errors and response shapes at the BFF boundary.
- Do not expose Domain entities directly from BFF responses.
- Keep DTOs only at the boundary; do not use DTOs inside Domain or core application logic.

## Tailwind Guidelines
- Use Tailwind utility classes for styling.
- Prefer composing styles in JSX/TSX; avoid custom CSS unless necessary.
- If custom CSS is needed, place it in a dedicated file and keep it minimal.

## Coding Conventions
- Add new domain/app/infrastructure modules in their layers; avoid mixing.
- Keep UI components presentational; move logic to hooks/use cases.
- Prefer typed DTOs between layers.

## Testing (if added later)
- Unit test domain and application layers without Next.js dependencies.
- Integration test BFF routes with mocked external API clients.
