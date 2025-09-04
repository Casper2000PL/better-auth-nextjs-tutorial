# 📋 Next.js Better Auth Project

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

</div>

A modern Next.js starter project with authentication, built using Better-Auth for complete OAuth integration, email management, role-based authorization, and Prisma database integration.

## 🚀 Features

- **Authentication System** - Email/password and OAuth providers
- **Role Management** - Flexible user roles and permissions
- **Email Integration** - Transactional emails with Resend
- **Modern UI** - Clean, responsive design with Tailwind CSS
- **Type Safety** - Full TypeScript support
- **Database Ready** - Prisma ORM with PostgreSQL

## 🛠️ Tech Stack

- **Next.js 15** - React framework with App Router
- **Better-Auth** - Complete authentication solution
- **Prisma** - Database ORM
- **Tailwind CSS** - Utility-first styling
- **Resend** - Email delivery service
- **TypeScript** - Type-safe development

## 📦 Getting Started

### Prerequisites

- Node.js 18+ 
- PostgreSQL database
- Resend account (for emails)

### Installation

1. **Clone the repository**
   ```bash
   git clone better-auth-nextjs-tutorial
   cd better-auth-nextjs-tutorial
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Set up database**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📚 Learn More

This project is based on the comprehensive Better-Auth tutorial by codinginflow:

- **Tutorial Video**: [Better-Auth - Full Guide](https://www.youtube.com/watch?v=w5Emwt3nuV0)
- **GitHub Repository**: [codinginflow/better-auth-tutorial](https://github.com/codinginflow/better-auth-tutorial)

To learn more about Next.js, check out these resources:
- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)

## 🚀 Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

**Built with ❤️ using Next.js and Better-Auth**

</div>
