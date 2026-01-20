# Infrastructure Layer

## Role
- Implements ports defined in Application.
- Handles real I/O (HTTP clients, storage, third-party APIs).

## Rules
- Depends on Application (and transitively Domain).
- May use frameworks/libraries (Axios, DB clients, etc.).
- Keep adapters thin; avoid business logic here.
- Convert external data formats to Domain entities before returning to Application.

## Typical Contents
- REST clients
- Repositories
- Storage adapters
