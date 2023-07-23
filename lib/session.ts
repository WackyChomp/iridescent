import { getServerSession  } from "next-auth";
import { NextAuthOptions } from "next-auth";
import { AdapterUser } from "next-auth/adapters";
import GoogleProvider from 'next-auth/providers/google';
import jsonwebtoken from 'jsonwebtoken';      // tracks user's jswon web token
import { JWT } from 'next-auth/jwt';
import { SessionInterface, UserProfile } from "@/app/common.types";
import { getUser } from "./actions";

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
      return session;
    },

    // triggered when user signs in / interacts with grafbase
    async signIn({ user }: { user: AdapterUser | User }){
      try {
        // get user if they exist
        const userExists = await getUser(user?.email as string) as { user?: UserProfile}

        // if they don't exist, create new user

        return true
        
      } catch (error) {
        console.log(error);
        return false;
      }
    }
  }
}


// Properties from Google to add towards session
export async function getCurrentUser() {
  const session = await getServerSession(authOptions) as SessionInterface;

  return session;
}