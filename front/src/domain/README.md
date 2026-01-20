# Domain Layer

## Role
- Core business rules and concepts.
- Expresses the ubiquitous language (entities, value objects, domain services).

## Rules
- No framework dependencies (Next.js, React, Axios, etc.).
- No I/O: no HTTP, DB, file system, or browser APIs.
- Keep types and logic stable and reusable.
- Depends on nothing outside this layer.
- Domain models are the internal source of truth.

## Typical Contents
- Entities
- Value objects
- Domain services
- Business invariants and validation logic
