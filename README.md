# Reposignal Frontend

The frontend web application for Reposignal — an issue-first discovery platform that helps developers discover and contribute to meaningful open source work.

## Overview

Reposignal Frontend is a Next.js application that provides a calm, trust-first interface for discovering open source projects and issues. The application is designed with an **anonymous-first** approach where all discovery features are available without authentication.

### Key Features

- 🔍 **Issue Discovery** - Browse and explore open source issues across repositories
- 📊 **Repository Exploration** - View repository details, stats, and available issues
- 👤 **User Profiles** - Manage preferences and repository settings (authenticated users)
- 🌙 **Dark Mode Native** - Designed for dark mode with a calm, editorial aesthetic
- 🔓 **Anonymous-First** - Full discovery features without requiring login

### Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript (strict mode)
- **Runtime**: Bun
- **Styling**: Tailwind CSS 4
- **State Management**: Zustand
- **Authentication**: GitHub OAuth

## Quick Start

### Prerequisites

- Node.js v20 or higher
- Bun (latest version)
- Running backend API (see [Contributing Guide](CONTRIBUTING.md) for setup)
- PostgreSQL database (configured via backend)
- GitHub OAuth App (for authentication features)

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/reposignal-frontend.git
cd reposignal-frontend

# Install dependencies
bun install

# Copy environment template
cp .env.example .env.local

# Configure your environment variables (see CONTRIBUTING.md)
# Edit .env.local with your settings

# Start development server
bun run dev
```

The application will be available at [http://localhost:9000](http://localhost:9000)

### Environment Variables

Create a `.env.local` file with the following:

```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:8000
NEXT_PUBLIC_GITHUB_OAUTH_CLIENT_ID=your_github_oauth_client_id
NEXT_PUBLIC_APP_NAME=Reposignal
NEXT_PUBLIC_APP_URL=http://localhost:9000
```

## Development

### Available Scripts

```bash
bun run dev      # Start development server on port 9000
bun run build    # Build for production
bun run start    # Start production server
bun run lint     # Run ESLint
```

### Project Structure

```
app/              # Next.js App Router pages
components/       # Reusable React components
lib/              # Utilities and API clients
store/            # Zustand state stores
context/          # Documentation and API specs
```

## Contributing

We welcome contributions! Please read our [Contributing Guide](CONTRIBUTING.md) for detailed setup instructions, including:

- Setting up the backend API
- Creating a GitHub OAuth App
- Configuring PostgreSQL
- Setting up the GitHub bot (optional)
- Development workflow and guidelines

**Important**: Review [context/design-principles.md](context/design-principles.md) before contributing to understand our UI/UX philosophy.

## Design Philosophy

Reposignal follows strict design principles:

- **Trust Over Growth** - No dark patterns or growth hacks
- **Calm by Default** - Quiet, neutral, editorial interface
- **Anonymous-First** - Login is optional, not required
- **No Gamification** - No rankings, scores, or badges
- **Precision & Craft** - Every detail is intentional

Read the full [Design Principles](context/design-principles.md) document.

## Related Repositories

- **reposignal-backend** - API server and business logic
- **reposignal-bot** - GitHub bot for repository monitoring

## License

See [LICENSE](LICENSE) file for details.

## Questions or Issues?

- Check the [Contributing Guide](CONTRIBUTING.md) for setup help
- Review existing issues before creating new ones
- Read the documentation in the `context/` directory
