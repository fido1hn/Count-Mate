# POS Accounting, Nuxt, Nuxt UI, Supabase

POSA: POS Accounting allows POS agents keep track of daily transactions on the go, get finiancial reports and chat with A.I about their finances.

## Technologies include

Vue/Nuxt, Tailwind CSS, Supabase, Nuxt UI, Shadcn-Vue,

## Backend Setup

- Setup up a Supabase project
  - Create a new project on Supabase
- Configure environment variables
  - Copy the .env.example file to .env and fill in all the variables
- Setup authentication on Supabase
  - Configure authentication providers in your Supabase project settings, Email & Google.
- Run database migrations
  - DB Migrations will be provided soon
- Set up AI integrations
  - Coming soon

## Dev Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
