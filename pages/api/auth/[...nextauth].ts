/*
File: [..nextauth].js
Description: This file will uses nextAuth to handle the requests, res of any OAuth...
*/
import NextAuth from "next-auth/next";
import GitHubProvider from "next-auth/providers/github"
import type {CredentialsProvider} from "next-auth/providers";
import clientPromise from "../../../lib/mongodb";
import {useSession} from "next-auth/react";
import { getToken } from "next-auth/jwt"
import axios from 'axios'

export default NextAuth({
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret : process.env.GITHUB_CLIENT_SECRET,
            
        }),
    ],
    callbacks: {
        async jwt({ token, user, account, profile, isNewUser }) {
        // Persist the OAuth access_token to the token right after signin
        if(profile){
            token.login = profile.login
            // @ts-ignore
            user.login = profile.login
            // code up here is the user name in the jwt but user.login isn't being persisted in session nor signin
            token.id = profile.id
        }

        if (account) {
            token.accessToken = account.access_token
        }
        return token
        },
        async session({ session, token, user}) {
            // Send properties to the client, like an access_token from a provider.
            session.accessToken = token.accessToken
            session.login = token.login;
            session.id = token.id;
            return session
        },
        async signIn({ user: User, account:Account, profile: profile, email:Email }) {
            console.log("accesstoken of user signing in: " + Account.access_token)
            const token = Account.access_token
            // get github username
            const authHeader = {Authorization:'Bearer ' + token}
            const url = '/user'

            axios.defaults.baseURL = 'https://api.github.com'
            axios.defaults.headers.common = {'Authorization': `bearer ${token}`}

            // fetch data
            let response = await axios.get(url);

            // all of the user's github information
            let githubInformation =  response.data;

            // get the user name
            let username = githubInformation.login

            // define client
            const client = await clientPromise;

            // define database
            const db = client.db("userData");

            // define users
            const users = db.collection("users");

            try{
                // get user data // maybe one day update all of the github information upon login
                const insertDocument = {"_id":username, "User":githubInformation}
                // @ts-ignore
                const dataUsers = await db.collection("users").insertOne(insertDocument);
                if(dataUsers){
                    console.log("Added " + String(User.id) + " to database!")
                    return true;
                }

                // if we are here user simply could not be added at all...

                return false;
            } catch (error) {
                console.log("User could not be added to database probably because user exists.")
                // get user data // maybe one day update all of the github information upon login
                const filterDocument = {"_id":username}
                const insertDocument = {"User":githubInformation}
                // @ts-ignore
                const dataUsers = await db.collection("users").findOneAndUpdate(filterDocument, {$set:insertDocument});
                if(dataUsers){
                    console.log("Updated " + String(username) + " to database!")
                    return true;
                }
                return true;

            }
            return true;
        },
    },
    debug:true,
});
