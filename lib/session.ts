import { getServerSession  } from "next-auth";
import { NextAuthOptions } from "next-auth";
import { AdapterUser } from "next-auth/adapters";
import GoogleProvider from 'next-auth/providers/google';
import jsonwebtoken from 'jsonwebtoken';
import { JWT } from 'next-auth/jwt';

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: '',
      clientSecret: '',
    })
  ],

  // connect next auth to grafbase
  jwt: {
    encode: ({ secret, token }) => {

    },
    decode: async ({ secret, token }) => {

    }
  },
  theme: {
    colorScheme: 'light',
    logo:'/vercel.svg'
  },
  callbacks: {
    async session ({ session }) {
      
    },
    async signIn({ user }){

    }
  }
}