// app/utils/auth.server.ts
import { Authenticator } from "remix-auth";
import { Auth0Strategy } from "remix-auth-auth0";
import { Auth0Profile } from "remix-auth-auth0"

import { sessionStorage } from './session.server';
import { auth0 } from './authEnv.server'

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
  async ({ profile }) => {
    //
    // Use the returned information to process or write to the DB.
    //
    console.log(profile)
    return profile;
  }
);

authenticator.use(auth0Strategy);

export let { getSession, commitSession, destroySession } = sessionStorage;