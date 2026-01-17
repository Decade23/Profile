# Contributing to Dedi Fardiyanto Portfolio

Thank you for your interest in contributing to this project! This document provides guidelines and instructions for contributing.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [Testing Guidelines](#testing-guidelines)
- [Documentation](#documentation)

## Code of Conduct

By participating in this project, you agree to:

- Be respectful and inclusive
- Focus on constructive feedback
- Welcome newcomers and help them learn
- Assume good intentions

## Getting Started

### Prerequisites

- Node.js >= 18.x
- npm or yarn
- Git
- Text editor (VS Code recommended)

### Setup Development Environment

1. Fork the repository
2. Clone your fork:

```bash
git clone https://github.com/YOUR_USERNAME/profile.git
cd profile
```

3. Add upstream remote:

```bash
git remote add upstream https://github.com/Decade23/profile.git
```

4. Install dependencies:

```bash
npm install
```

5. Start development server:

```bash
npm run dev
```

## Development Workflow

### 1. Create a Branch

Create a new branch for your feature or fix:

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/bug-description
```

**Branch Naming Convention**:

- `feature/` - New features
- `fix/` - Bug fixes
- `docs/` - Documentation changes
- `style/` - Code style changes (formatting, etc.)
- `refactor/` - Code refactoring
- `test/` - Adding or updating tests
- `chore/` - Maintenance tasks

### 2. Make Changes

- Write clean, readable code
- Follow coding standards (see below)
- Add comments for complex logic
- Update documentation if needed

### 3. Test Your Changes

```bash
# Run linter
npm run lint

# Run tests (when available)
npm test

# Build production version
npm run build

# Test production build
npm start
```

### 4. Commit Your Changes

Use meaningful commit messages:

```bash
git add .
git commit -m "feat: add dark mode toggle"
# or
git commit -m "fix: resolve mobile layout issue"
```

**Commit Message Format**:

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types**:

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes
- `refactor`: Code refactoring
- `test`: Adding tests
- `chore`: Maintenance
- `perf`: Performance improvements

**Examples**:

```
feat(auth): add OAuth login support

Implement Google OAuth login with token storage
and session management.

Closes #123
```

```
fix(home): correct image path on mobile devices

Update image loading logic to handle different
screen sizes properly.
```

### 5. Sync with Upstream

Before creating a pull request, sync with the main repository:

```bash
git fetch upstream
git rebase upstream/main
```

Resolve any conflicts that arise.

### 6. Push Your Changes

```bash
git push origin feature/your-feature-name
```

## Pull Request Process

### Creating a Pull Request

1. Go to the repository on GitHub
2. Click "New Pull Request"
3. Select your branch
4. Provide a clear title and description

### Pull Request Template

```markdown
## Description
Brief description of changes made.

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Tested locally
- [ ] Added tests (if applicable)
- [ ] All tests pass

## Screenshots (if applicable)
Add screenshots for UI changes.

## Checklist
- [ ] Code follows project style
- [ ] Self-reviewed code
- [ ] Added comments for complex logic
- [ ] Documentation updated
- [ ] No new warnings
- [ ] Added tests (if applicable)
- [ ] All tests pass
```

### Review Process

1. Maintainer will review your PR
2. Feedback will be provided if changes are needed
3. Address feedback and update PR
4. Once approved, PR will be merged

## Coding Standards

### Code Style

- Use meaningful variable and function names
- Keep functions small and focused
- Follow DRY (Don't Repeat Yourself)
- Write self-documenting code
- Add comments for complex logic only

### JavaScript/React Guidelines

#### Component Structure

```jsx
// Good
import { useState } from 'react';

export default function MyComponent({ prop }) {
  const [state, setState] = useState('');

  const handleClick = () => {
    setState('new value');
  };

  return (
    <div onClick={handleClick}>
      {prop}
    </div>
  );
}
```

#### Use Functional Components

```jsx
// Good
export default function MyComponent() {
  return <div>Hello</div>;
}

// Avoid
class MyComponent extends React.Component {
  render() {
    return <div>Hello</div>;
  }
}
```

#### Destructure Props

```jsx
// Good
export default function MyComponent({ name, email }) {
  return <div>{name}</div>;
}

// Avoid
export default function MyComponent(props) {
  return <div>{props.name}</div>;
}
```

### Tailwind CSS Guidelines

- Use utility classes efficiently
- Avoid arbitrary values when possible
- Group related classes
- Use responsive prefixes for mobile-first design

```jsx
// Good
<div className="container mx-auto px-4 py-8 md:px-8 md:py-12">

// Avoid
<div className="container mx-auto px-4 py-8 md:px-8 md:py-12 lg:px-12 lg:py-16 xl:px-16 xl:py-20">
```

### File Naming

- Components: PascalCase (`MyComponent.js`)
- Utilities: camelCase (`myUtility.js`)
- Constants: UPPER_SNAKE_CASE (`API_URL.js`)
- Styles: kebab-case (`my-styles.css`)

## Testing Guidelines

### Unit Tests (When Added)

- Test individual functions and components
- Use descriptive test names
- Test edge cases
- Mock external dependencies

```javascript
// Example
describe('MyComponent', () => {
  it('should render with correct props', () => {
    render(<MyComponent name="Test" />);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  it('should handle click event', () => {
    const handleClick = jest.fn();
    render(<MyComponent onClick={handleClick} />);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalled();
  });
});
```

### Integration Tests (When Added)

- Test user flows
- Test multiple components together
- Test API interactions

### E2E Tests (When Added)

- Test critical user paths
- Test on multiple browsers
- Test on different screen sizes

## Documentation

### Code Comments

- Add comments for complex logic
- Document non-obvious decisions
- Update comments when code changes

```javascript
// Good
// Use debounce to prevent API spam on rapid input
const debouncedSearch = debounce(searchAPI, 300);
```

### README Updates

When adding features that users need to know about:

1. Update the Features section
2. Add usage examples
3. Update screenshots if UI changed

### API Documentation (When Applicable)

Document new API routes:

```javascript
/**
 * POST /api/contact
 *
 * Handles contact form submissions
 *
 * @param {string} name - Sender name
 * @param {string} email - Sender email
 * @param {string} message - Message content
 * @returns {object} Response object
 */
```

## Issue Reporting

### Bug Reports

Include:

- Clear description
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable
- Environment details (OS, browser, Node version)

### Feature Requests

Include:

- Use case description
- Proposed solution
- Alternative approaches considered
- Examples if possible

## Questions and Support

- Check existing documentation first
- Search for similar issues
- Provide context when asking questions
- Be patient with responses

## Recognition

Contributors will be:

- Listed in CONTRIBUTORS.md
- Acknowledged in release notes
- Recognized in project discussions

Thank you for contributing! 🎉
