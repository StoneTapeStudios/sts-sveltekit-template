# Stone Tape Studios SvelteKit Template

A modern, minimal, and opinionated starter for developers, built with SvelteKit, TypeScript, Drizzle ORM, Tailwind CSS, and Auth.js.

This starter kit is designed for those who want a clean, extensible foundation for building modern, full-stack web applications.

## Stack

- **Framework**: [SvelteKit](https://kit.svelte.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **ORM**: [Drizzle ORM](https://orm.drizzle.team/) with [PostgreSQL](https://www.postgresql.org/)
- **Authentication**: [Auth.js (SvelteKitAuth)](https://authjs.dev/) (with Keycloak provider)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn-svelte](https://www.shadcn-svelte.com/)
- **Validation**: [Zod](https://zod.dev/)
- **Data Fetching**: [TanStack Query for Svelte](https://tanstack.com/query/latest/docs/svelte/overview)
- **Icons**: [Lucide Svelte](https://lucide.dev/guide/packages/lucide-svelte)

## Tooling & Features

- **Linting & Formatting**: ESLint and Prettier for code quality.
- **Unit & Component Testing**: Vitest and Playwright for component testing.
- **End-to-End (E2E) Testing**: Playwright.
- **Database**: Dockerized PostgreSQL for development, testing, and production.
- **Database Migrations**: `drizzle-kit` for schema migrations.
- **Type Safety**: End-to-end type safety from the database to the frontend.

## Getting Started

Follow these steps to get the project up and running on your local machine.

### Prerequisites

- [Node.js](https://nodejs.org/en) (v22+ recommended)
- [pnpm](https://pnpm.io/installation)
- [Docker](https://docs.docker.com/get-docker/) and Docker Compose

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/sts-sveltekit-template.git
   cd sts-sveltekit-template
   ```

2. **Install dependencies:**

   ```bash
   pnpm install
   ```

3. **Configure Environment Variables:**
   Create a `.env.local` file in the root of the project by copying the example.

   ```bash
   cp .env.local.example .env.local
   ```

   Update the variables in `.env.local` with your own credentials.

4. **Start the Database:**
   This command will start a PostgreSQL database container using Docker Compose.

   ```bash
   pnpm db:up
   ```

5. **Run Database Migrations:**
   This will apply the database schema to your local database.

   ```bash
   pnpm db:dev:push
   ```

6. **(Optional) Seed the Database:**
   To populate the database with some example data, run:

   ```bash
   pnpm db:dev:seed
   ```

7. **Start the Development Server:**

   ```bash
   pnpm dev
   ```

Your application should now be running at [http://localhost:5173](http://localhost:5173).

## Project Structure

- `drizzle/`: Contains all generated database migration files.
- `e2e/`: End-to-end tests written with Playwright.
- `src/`: The main application source code.
  - `app.html`: The main HTML shell for the application.
  - `auth.ts`: Configuration for Auth.js (SvelteKitAuth).
  - `hooks.server.ts`: Server-side hooks.
  - `lib/`: Shared library code.
    - `components/`: Reusable Svelte components, including shadcn-svelte UI.
    - `server/`: Server-only code.
      - `db/`: Drizzle ORM setup, schema definitions, and seeding scripts.
  - `routes/`: The directory where all your application's pages and API endpoints live.
- `static/`: Static assets that are served directly.

## Scripts

This project includes a variety of scripts to help with development and maintenance.

### General

- `pnpm dev`: Starts the development server.
- `pnpm build`: Builds the application for production.
- `pnpm preview`: Previews the production build locally.

### Database (`db:*`)

- `pnpm db:up`: Starts the Docker containers for all environments.
- `pnpm db:down`: Stops all Docker containers.
- `pnpm db:nuke`: Stops and removes all Docker containers and volumes (deletes all data).
- `pnpm db:dev:push`: Pushes the current schema to the development database without creating migration files.
- `pnpm db:dev:migrate`: Creates and applies migration files for the development database.
- `pnpm db:dev:seed`: Seeds the development database with example data.
- `pnpm db:generate`: Generates migration files based on schema changes.
- `pnpm db:dev:studio`: Opens the Drizzle Studio for the development database.

### Testing (`test:*`)

- `pnpm test`: Runs all unit and end-to-end tests.
- `pnpm test:unit`: Runs all unit and component tests with Vitest.
- `pnpm test:e2e`: Runs all end-to-end tests with Playwright.

### Code Quality

- `pnpm lint`: Lints the codebase with ESLint and checks formatting with Prettier.
- `pnpm format`: Formats the entire codebase with Prettier.
- `pnpm check`: Runs the Svelte check script to find issues in your Svelte components.

## Environment Variables

For the application to run correctly, you need to set the following environment variables in your `.env.local` file. See the `.env.local.example` for a template.

- `DATABASE_URL`: The full connection string for your PostgreSQL database.
- `AUTH_SECRET`: A secret key for Auth.js to sign and encrypt tokens. You can generate one with `npx auth secret`.
- `AUTH_TRUST_HOST`: Set to `true` when deploying to a trusted host.
- `AUTH_KEYCLOAK_ID`: The client ID for your Keycloak application.
- `AUTH_KEYCLOAK_SECRET`: The client secret for your Keycloak application.
- `AUTH_KEYCLOAK_ISSUER`: The issuer URL for your Keycloak realm.

## Testing

This template is configured with both unit/component and end-to-end tests.

- **Unit & Component Tests**: Written with [Vitest](https://vitest.dev/) and [Playwright's Component Testing](https://playwright.dev/docs/intro#component-testing). Test files are located alongside the components they test (e.g., `*.spec.ts`). Run them with `pnpm test:unit`.
- **End-to-End Tests**: Written with [Playwright](https://playwright.dev/). Test files are in the `e2e/` directory. Run them with `pnpm test:e2e`.

## License

This project is open source and available under the MIT License.
