# Contributing

Thank you for your interest in contributing to "Here To Help" project! This document provides guidelines and steps for contributing.

## How to Contribute

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run tests if applicable
5. Commit your changes (`git commit -m 'Add some amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

## Pull Request Process

1. Update the README.md with details of changes if applicable
2. Ensure any install or build dependencies are removed before the end of the layer
3. The PR will be merged once you have the sign-off of at least one maintainer

## Development Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up environment variables (see below)
4. Generate static API files: `npm run generate-api`
5. Start the development server: `npm run dev`

## Environment Variables

This project uses environment variables for configuration. Follow these steps to set up your environment:

1. Copy `.env.example` to create your local environment file:

   ```bash
   cp .env.example .env.local
   ```

2. Update the values in `.env.local` with your actual configuration

### Environment Files

- `.env.local`: Local development variables (not committed to git)
- `.env.development`: Development environment defaults
- `.env.production`: Production environment defaults
- `.env.example`: Template with example variables (committed to git)

### Git Ignored Environment Files

The following files are ignored in git for security:
- `.env` - Any base environment file
- `.env.local` - Local environment overrides
- `.env*.local` - All local environment variations (e.g., `.env.development.local`)

Only `.env.example` is committed to the repository as a template.

### Important Notes

- Never commit sensitive values to git
- Use `NEXT_PUBLIC_` prefix for variables that need to be exposed to the browser
- For production deployment, set your environment variables in your GitHub repository settings under Secrets and Variables

> Note: The `generate-api` script creates static JSON files in the `public/api` directory. These files are used when deploying to static hosting platforms like GitHub Pages.

## Coding Standards

- Follow the existing code style
- Write clear, readable, and maintainable code
- Comment your code when necessary
- Write meaningful commit messages

## Reporting Bugs

Use the GitHub Issues tab to report bugs. Include:

- Clear description of the issue
- Steps to reproduce
- Expected behavior
- Screenshots if applicable
- System information

## Feature Requests

Feature requests are welcome! Use the GitHub Issues tab and:

- Use a clear descriptive title
- Provide a detailed description of the feature
- Explain why this feature would be useful

## Questions?

Feel free to contact the maintainers if you have any questions.

## License

By contributing, you agree that your contributions will be licensed under the project's license.
