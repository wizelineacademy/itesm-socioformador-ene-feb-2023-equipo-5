// app/utils/auth.server.ts
import { Authenticator } from "remix-auth";
import { Auth0Strategy } from "remix-auth-auth0";
import type { Auth0Profile } from "remix-auth-auth0"

import { sessionStorage } from './session.server';
import { auth0 } from './authEnv.server'

import { db } from "./db";

// Create an instance of the authenticator, pass a generic with what your
// strategies will return and will be stored in the session
export const authenticator = new Authenticator<Auth0Profile>(sessionStorage);

let auth0Strategy = new Auth0Strategy(
  {
    callbackURL: auth0.callbackUrl,
    clientID: auth0.clientId,
    clientSecret: auth0.clientSecret,
    domain: auth0.domain,
  },
  async ({ profile }: any) => {
    //
    // Use the returned information to process or write to the DB.
    //
    try {
      //We have this try if the database conection fails
      const userExist = await db.user.findUnique({
        where: {
          id: profile.id
        }
      })
      if (userExist === null) {
        let authType = profile.id?.split("|")

        if (authType![0] === "google-oauth2") {
          // const perfil = await db.user.create({
          await db.user.create({
            data: {
              id: profile.id!,
              fullName: profile._json?.name,
              name: profile._json?.given_name,
              familyName: profile._json?.family_name,
            }
          })
        } else if (authType![0] === "auth0") {
          // const perfil = await db.user.create({
          await db.user.create({
            data: {
              id: profile.id!
            }
          })
        }
      } else if (profile._json["https://smartspeak.example.com/roles"].includes("admin")) {
        await db.user.update({
          where:{
            id: profile.id
          },
          data: {
            isAdmin: true
          }
        })
      }
    } catch (e: any) {
      console.log(e);
    }
    return profile;
  }
);

authenticator.use(auth0Strategy);

export let { getSession, commitSession, destroySession } = sessionStorage;