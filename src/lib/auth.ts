import type { NextAuthOptions } from "next-auth";
import { db } from "@/lib/db";
import {PrismaAdapter} from "@next-auth/prisma-adapter"
import GoogleProvider from "next-auth/providers/google"
import GitHubProvider from "next-auth/providers/gitlab"
import  EmailProvider  from "next-auth/providers/email";
import  CredentialsProvider  from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(db),
    session:{
        strategy: 'jwt'
    },
    pages: {
        signIn:'/login', 
    },
    providers: [
        GoogleProvider ({
            clientId: ,
            clientSecret:
        }),
        GitHubProvider({
            clientId:,
            clientSecret:
        }) ,
        EmailProvider({
            server:,
            from:
        }),
        CredentialsProvider({
          
        })

    ]
  
}