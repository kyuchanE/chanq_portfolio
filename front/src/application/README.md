# Application Layer

## Role
- Orchestrates use cases and application flow.
- Defines ports (interfaces) for external dependencies.

## Rules
- Depends only on Domain.
- No framework dependencies (Next.js, React, Axios, etc.).
- No direct I/O: use ports for external access.
- Use cases operate on and return Domain entities.
- Use DTOs only at boundaries (BFF HTTP responses, external API contracts).

## Typical Contents
- Use cases
- DTOs
- Ports (interfaces)
