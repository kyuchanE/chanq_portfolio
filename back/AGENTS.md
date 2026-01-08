# AGENTS.md

<INSTRUCTIONS>
# Project Overview
- Stack: Node.js + Express + ESM + TypeScript (.ts)
- Purpose: Serve processed resume/portfolio data via REST APIs
- AI: Use OpenAI to answer user questions grounded in the resume data
- Architecture: Apply Clean Architecture principles

# Goals
- Provide stable, well-typed REST endpoints for portfolio data
- Keep domain logic framework-agnostic and testable
- Ensure OpenAI calls are grounded in local data and safe

# Required Project Structure (Clean Architecture)
- src/domain
  - entities: Core business models (e.g., Resume, Project, Skill)
  - value-objects: Immutable primitives (e.g., DateRange, Url)
  - repositories: Interfaces only (no infra)
- src/application
  - use-cases: Orchestrate business rules (e.g., GetResume, AskResume)
  - services: Cross-cutting app services (e.g., ResumeFormatter)
  - ports: Interfaces for external services (e.g., LLMClient)
- src/infrastructure
  - db: Data sources/adapters (file, db, etc.)
  - llm: OpenAI client adapter implementing ports
  - config: Env + config loading
  - http: Express setup, middleware, routing
- src/interfaces
  - controllers: HTTP controllers; map HTTP <-> use cases
  - dtos: Input/output DTOs
  - presenters: Response shaping
- src/shared
  - errors, logging, utilities

# REST API Guidelines
- Use Express with ESM import syntax
- All new code in TypeScript
- Validate inputs (e.g., zod/valibot) at controller boundaries
- Provide consistent error responses
- Document endpoints in README.md when added

# OpenAI Integration Rules
- Never send raw user data beyond what is required
- Ground responses strictly in local resume/portfolio data
- Use a system prompt to enforce: "Answer only from provided resume data"
- Sanitize user input to prevent prompt injection
- Prefer deterministic settings (low temperature) for factual replies

# Data Handling Rules
- Store resume data in a single source (JSON/DB)
- Use a repository adapter to fetch and normalize data
- Do not embed data access in controllers or use-cases

# Testing
- Unit-test use cases and domain logic
- Mock OpenAI adapter in tests
- Avoid test dependencies on external network

# Coding Style
- Favor explicit types, avoid any
- Use small, composable modules
- No business logic inside Express routes
- Keep controllers thin

# Outputs and Files
- Add or update README.md when API or architecture changes
- Keep AGENTS.md updated if conventions change
</INSTRUCTIONS>
