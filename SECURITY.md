# Security Policy

We take security seriously. If you discover a security vulnerability, please follow these steps.

## Reporting Security Issues

**Do NOT create a public GitHub issue for security vulnerabilities.**

Instead, please report security issues via one of the following methods:

1. **Email**: Send details to the maintainers (contact information in repository)
2. **Private Security Advisory**: Use GitHub's private vulnerability reporting feature if available

## Security Best Practices

When using EternalPic:

- **Keep Dependencies Updated**: Regularly update npm packages to get security patches
- **Secure API Keys**: Never commit API keys or secrets to version control
- **Environment Variables**: Use `.env` files and add them to `.gitignore`
- **HTTPS**: Always use HTTPS in production
- **Authentication**: Use strong JWT secrets and rotate them regularly
- **Firebase Rules**: Configure Firebase Storage security rules properly
- **Input Validation**: Validate all user inputs on both client and server
- **Rate Limiting**: Implement rate limiting for API endpoints in production

## Known Security Considerations

- **API Keys**: Store securely, never expose in client-side code
- **JWT Tokens**: Use strong secrets, set appropriate expiration times
- **File Uploads**: Validate file types and sizes, scan for malicious content
- **CORS**: Configure CORS properly for production environments
- **Database**: Use connection strings with authentication, restrict network access

## Security Updates

Security updates will be released as patches. Please keep your dependencies updated:

```bash
# Check for outdated packages
npm outdated

# Update packages
npm update
```

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| Latest  | :white_check_mark: |
| < Latest | :x:                |



