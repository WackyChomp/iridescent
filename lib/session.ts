import { getServerSession  } from "next-auth";
import { NextAuthOptions } from "next-auth";
import { AdapterUser } from "next-auth/adapters";
import GoogleProvider from 'next-auth/providers/google';
import jsonwebtoken from 'jsonwebtoken';      // tracks user's jswon web token
import { JWT } from 'next-auth/jwt';
import { SessionInterface, UserProfile } from "@/app/common.types";
import { createUser, getUser } from "./actions";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    })
  ],

  // connect next auth to grafbase
  // jwt: {
  //   encode: ({ secret, token }) => {

  //   },
  //   decode: async ({ secret, token }) => {

  //   }
  // },
  theme: {
    colorScheme: 'light',
    logo:'/vercel.svg'
  },
  callbacks: {
    // triggered when user visits page
    async session ({ session }) {
      const email = session?.user?.email as string;
      try {
        const data = await getUser(email) as { user?: UserProfile }

        const newSession = {
          ...session,
          user:{
            ...session.user,
            ...data?.user
          }
        }

        return newSession;
      } catch (error) {
        console.log("There's an ErRoR retrieving user data:", error);
        return session;
      }
    },

    // triggered when user signs in / interacts with grafbase
    async signIn({ user }: { user: AdapterUser | User }){
      try {
        // get user if they exist -- uses actions.ts
        const userExists = await getUser(user?.email as string) as { user?: UserProfile}

        // if they don't exist, create new user
        if (!userExists.user){
          await createUser(
            user.name as string, 
            user.email as string, 
            user.image as string
          );
        }

        return true
        
      } catch (error) {
        console.log(error);
        return false;
      }
    }
  }
}


// Properties from Google/SessionInterface to add towards session in navbar component
export async function getCurrentUser() {
  const session = await getServerSession(authOptions) as SessionInterface;

  return session;
}