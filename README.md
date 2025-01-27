# Next.js Supabase Auth App

A modern authentication system built with Next.js 14, Supabase, and ShadcnUI.

## Features

- 🔐 **Authentication**
  - Email/Password login
  - Google OAuth
  - Password reset flow
  - Strong password requirements
  - Protected routes

- 🛡️ **Security**
  - CSRF protection
  - Rate limiting
  - Security headers (CSP, HSTS)
  - XSS protection
  - Strong password validation

- 💾 **Data Management**
  - Memory storage and retrieval
  - Real-time updates
  - Type-safe database operations

- 🎨 **UI/UX**
  - Modern design with ShadcnUI
  - Responsive layout
  - Loading states
  - Error boundaries
  - Toast notifications

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Authentication**: Supabase Auth
- **Database**: Supabase
- **Email Service**: Resend
- **Styling**: Tailwind CSS
- **UI Components**: ShadcnUI
- **Form Management**: React Hook Form + Zod
- **TypeScript**: For type safety

## Prerequisites

- Node.js 18+
- npm/yarn/pnpm
- Supabase account
- Resend account

## Environment Variables

Create a `.env.local` file:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
RESEND_API_KEY=your_resend_api_key
```

## Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd nextjs-supabase-auth
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

## Password Requirements

Passwords must meet the following criteria:
- Minimum 8 characters
- Maximum 100 characters
- At least one uppercase letter
- At least one lowercase letter
- At least one number
- At least one special character (@$!%*?&)

## Security Features

- **Rate Limiting**: 30 requests per minute for auth endpoints
- **Security Headers**:
  - Content Security Policy (CSP)
  - HTTP Strict Transport Security (HSTS)
  - X-Frame-Options
  - X-Content-Type-Options
  - Referrer-Policy

## Error Handling

- Global error boundary for catching runtime errors
- Form validation errors with helpful messages
- API error handling with toast notifications
- Loading states for better UX

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## License

MIT
