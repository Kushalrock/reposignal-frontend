# Contributing to Reposignal Frontend

Thank you for your interest in contributing to Reposignal! This document provides guidelines and setup instructions for contributing to the frontend application.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Prerequisites](#prerequisites)
- [Development Setup](#development-setup)
- [Project Structure](#project-structure)
- [Design Principles](#design-principles)
- [Development Workflow](#development-workflow)
- [Submitting Changes](#submitting-changes)
- [Additional Resources](#additional-resources)

---

## Code of Conduct

Please read and follow our [Code of Conduct](CODE_OF_CONDUCT.md) to ensure a welcoming environment for all contributors.

---

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v20 or higher recommended)
- **Bun** (latest version) - [Installation Guide](https://bun.sh/)
- **Git**

---

## Development Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-org/reposignal-frontend.git
cd reposignal-frontend
```

### 2. Install Dependencies

```bash
bun install
```

### 3. Set Up Required Services

Reposignal frontend requires several backend services to be running. Each service has its own repository with detailed setup instructions:

#### **A. Backend API** (Required)

The backend API handles all data operations and business logic.

- **Repository**: `reposignal-backend`
- **Setup**: Follow the setup instructions in the backend repository
- **Default URL**: `http://localhost:8000`
- **Requirements**:
  - **PostgreSQL database** must be running (see backend repo for database setup)
  - Database migrations must be applied

#### **B. GitHub OAuth App** (Required for Authentication)

You need to create a GitHub OAuth App to enable user authentication:

1. Go to [GitHub Developer Settings](https://github.com/settings/developers)
2. Click "New OAuth App"
3. Fill in the application details:
   - **Application name**: `Reposignal Local Dev` (or your preferred name)
   - **Homepage URL**: `http://localhost:9000`
   - **Authorization callback URL**: `http://localhost:8000/auth/github/callback`
   
   ⚠️ **Note**: The callback URL points to the **backend** (port 8000), not the frontend

4. Click "Register application"
5. Note your **Client ID** (you'll need this for frontend configuration)
6. Generate a **Client Secret** (you'll need this for backend configuration)

#### **C. GitHub Bot** (Optional - For Repository Monitoring)

The GitHub bot monitors repositories and syncs issue data.

- **Repository**: `reposignal-bot`
- **Setup**: Follow the setup instructions in the bot repository
- **Note**: Only required if you're testing repository monitoring features

### 4. Configure Environment Variables

Create a `.env.local` file in the root directory:

```bash
cp .env.example .env.local
```

Edit `.env.local` and configure the following variables:

```env
# Backend API
NEXT_PUBLIC_API_BASE_URL=http://localhost:8000

# GitHub OAuth (Client ID from your GitHub OAuth App)
NEXT_PUBLIC_GITHUB_OAUTH_CLIENT_ID=your_github_oauth_client_id

# App Configuration
NEXT_PUBLIC_APP_NAME=Reposignal
NEXT_PUBLIC_APP_URL=http://localhost:9000
```

**Important**: 
- The `NEXT_PUBLIC_GITHUB_OAUTH_CLIENT_ID` is the **Client ID** from the GitHub OAuth App you created
- The **Client Secret** is configured in the **backend**, not the frontend
- Never commit `.env.local` to version control

### 5. Verify Backend Services

Before starting the frontend, ensure the following services are running:

```bash
# Check PostgreSQL is running
# (Command varies by OS - see backend repo for instructions)

# Check backend API is running
curl http://localhost:8000/health
```

You should receive a successful health check response from the backend.

### 6. Start the Development Server

```bash
bun run dev
```

The application will be available at [http://localhost:9000](http://localhost:9000)

---

## Project Structure

```
app/                    # Next.js App Router pages
  ├── discovery/        # Discovery/search features
  ├── explore/          # Explore repositories
  ├── profile/          # User profile
  ├── repository/       # Repository details
  └── ...

components/             # Reusable React components
  ├── cards/           # Card components
  ├── common/          # Common UI elements
  ├── layout/          # Layout components
  ├── navigation/      # Navigation components
  └── overlays/        # Overlays and modals

lib/                    # Utilities and helpers
  ├── api/             # API client and routes
  ├── auth/            # Authentication utilities
  └── guards/          # Route guards

store/                  # Zustand state management
  ├── auth.store.ts
  ├── discovery.store.ts
  └── ...

context/                # Context and documentation
  ├── api-routes.ts    # OpenAPI spec (DO NOT MODIFY)
  ├── design-principles.md
  └── TASKS.md
```

---

## Design Principles

Reposignal follows strict design principles that prioritize **trust, calmness, and user respect**. Please read [context/design-principles.md](context/design-principles.md) before contributing. Key principles include:

### Core Values

1. **Trust Over Growth**: No dark patterns, urgency cues, or growth hacks
2. **Calm by Default**: Quiet, neutral, editorial — no hype or gamification
3. **Anonymous-First**: Login is optional, discovery is public
4. **No Gamification**: No rankings, scores, badges, or percentages
5. **Precision & Craft**: Every pixel must be intentional

### Technical Constraints

- **Never call bot endpoints from frontend**
- **Never infer backend behavior** - use `context/api-routes.ts` as the single source of truth
- **Frontend is optional** - all core functionality exists in the backend
- **Dark mode native** - design for dark mode first

---

## Development Workflow

### Making Changes

1. **Create a feature branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** following the design principles

3. **Test your changes**:
   - Test in the browser at http://localhost:9000
   - Verify API integration with the backend
   - Test both authenticated and anonymous states
   - Check responsive design

4. **Lint your code**:
   ```bash
   bun run lint
   ```

### API Integration

- All API routes are defined in `lib/api/routes.ts`
- Use the pre-configured route constants (e.g., `publicRoutes.discovery`)
- Never hardcode API endpoints
- API contracts are documented in `context/api-routes.ts` (reference only, do not modify)

### State Management

- Use Zustand stores in the `store/` directory
- Keep state minimal and focused
- Prefer local state for component-specific data

### Styling

- Use Tailwind CSS utility classes
- Follow the dark-mode-first approach
- Maintain consistent spacing and typography
- No custom CSS unless absolutely necessary

---

## Submitting Changes

### Before Submitting

- [ ] Code follows the design principles
- [ ] All API calls use predefined route constants
- [ ] Changes work for both authenticated and anonymous users
- [ ] No bot endpoints are called from frontend
- [ ] Code passes ESLint checks
- [ ] Tested in development environment

### Pull Request Process

1. **Commit your changes** with clear, descriptive messages:
   ```bash
   git commit -m "Add: brief description of changes"
   ```

2. **Push to your branch**:
   ```bash
   git push origin feature/your-feature-name
   ```

3. **Create a Pull Request** with:
   - Clear title and description
   - Reference to any related issues
   - Screenshots (for UI changes)
   - Notes on testing performed

4. **Code Review**: Address any feedback from maintainers

5. **Merge**: Once approved, your PR will be merged

---

## Additional Resources

### Related Repositories

- **Backend**: `reposignal-backend` - API server and business logic
- **Bot**: `reposignal-bot` - GitHub bot for repository monitoring
- **Database**: PostgreSQL setup instructions in backend repo

### Documentation

- [Design Principles](context/design-principles.md) - UI/UX philosophy
- [Tasks](context/TASKS.md) - Frontend scope and requirements
- [API Routes](context/api-routes.ts) - OpenAPI specification

### Getting Help

- Check existing issues and discussions
- Review the design principles document
- Ensure all required services are running
- Verify your environment configuration

---

## Common Issues

### "API not responding"
- Verify backend is running at http://localhost:8000
- Check PostgreSQL database is running
- Ensure backend environment is properly configured

### "OAuth authentication fails"
- Verify your GitHub OAuth App callback URL is `http://localhost:8000/auth/github/callback`
- Check `NEXT_PUBLIC_GITHUB_OAUTH_CLIENT_ID` in `.env.local`
- Ensure backend has the OAuth Client Secret configured

### "Cannot connect to database"
- This is a backend issue - see backend repository for PostgreSQL setup
- Ensure database migrations have been run

---

Thank you for contributing to Reposignal! 🎯
