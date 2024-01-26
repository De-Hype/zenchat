import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google"

export const authOptions :NextAuthOptions ={
    // adapter:Upstash stuff,
    session:{
        strategy:'jwt'
    },
    pages:{
        signIn:"/login"
    },
    providers:[
        GoogleProvider({
            clientId:process.env.ClientID,
            clientSecret:process.env.ClientSecret
        }),
    ],
    callbacks:{
        async jwt ({token, user}){
            const dbUser = 
        }
    }
}