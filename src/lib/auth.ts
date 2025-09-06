import prisma from "@/lib/prisma";
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { APIError, createAuthMiddleware } from "better-auth/api";
import { passwordSchema } from "./validation";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    },
    github: {
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    },
  },
  emailAndPassword: {
    enabled: true,
  },
  user: {
    changeEmail: {
      enabled: true,
      // async sendChangeEmailVerification({ user, newEmail, url }) {
      //   await sendEmail({
      //     to: user.email,
      //     subject: "Approve email change",
      //     text: `Your email has been changed to ${newEmail}. Click the link to approve the change: ${url}`,
      //   });
      // },
    },
    additionalFields: {
      role: {
        type: "string",
        input: false,
      },
    },
  },
  hooks: {
    before: createAuthMiddleware(async (c) => {
      if (
        c.path === "/sign-up/email" ||
        c.path === "/reset-password" ||
        c.path === "/change-password"
      ) {
        const password = c.body.password || c.body.newPassword;
        const { success, error } = passwordSchema.safeParse(password);

        if (error) {
          throw new APIError("BAD_REQUEST", {
            message: "Password not strong enough",
          });
        }
      }
    }),
  },
});

export type Session = typeof auth.$Infer.Session;
export type User = typeof auth.$Infer.Session.user;
