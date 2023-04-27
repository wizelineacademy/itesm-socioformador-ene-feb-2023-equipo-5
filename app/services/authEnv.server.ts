import dotenv from "dotenv";
dotenv.config();

// Read them from process.env
let { AUTH0_CLIENT_ID, AUTH0_CLIENT_SECRET, AUTH0_DOMAIN, AUTH0_CALLBACK_URL, AUTH0_RETURN_TO_URL, AUTH0_LOGOUT_URL } =
  process.env;

// Ensure they are defined and throw error if not
if (!AUTH0_DOMAIN) throw new Error("Missing Auth0 domain.");
if (!AUTH0_CLIENT_ID) throw new Error("Missing Auth0 client id.");
if (!AUTH0_CLIENT_SECRET) throw new Error("Missing Auth0 client secret.");
if (!AUTH0_CALLBACK_URL) throw new Error("Missing Auth0 redirect uri."); 
if (!AUTH0_RETURN_TO_URL) throw new Error("Missing Auth0 return to url");
if (!AUTH0_LOGOUT_URL) throw new Error("Missing Auth0 logouturl");

// This object is just so we can do `auth0.clientId` or another attribute instead of using the all uppercase variables
export let auth0 = {
  clientId: AUTH0_CLIENT_ID,
  clientSecret: AUTH0_CLIENT_SECRET,
  domain: AUTH0_DOMAIN,
  callbackUrl: AUTH0_CALLBACK_URL,
  returnToUrl: AUTH0_RETURN_TO_URL,
  logoutUrl: AUTH0_LOGOUT_URL
};