// app/services/session.server.ts
import { createCookieSessionStorage, redirect } from "@remix-run/node";

// export the whole sessionStorage object
export const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "__session",
    sameSite: "lax",
    path: "/",
    httpOnly: true,
    secrets: ["SECRETS"], //Here should be a secret, i dont know what that means
    secure: process.env.NODE_ENV === "production",
  },
});

export async function getSession(request: Request) {
  const cookie = request.headers.get("Cookie");
  return sessionStorage.getSession(cookie);
}

export async function createUserSession({
  request,
  remember,
  redirectTo,
}: {
  request: Request;
  remember: boolean;
  redirectTo: string;
}) {
  const session = await getSession(request);
  session.set('user', {
    provider: 'auth0',
    _json: {
      sub: 'auth0|648a53d3f1ac1401362bf9f9',
      nickname: 'pruebacookie',
      name: 'pruebacookie@tec.mx',
      picture: 'https://s.gravatar.com/avatar/c4bef95cd7fbfde66e482980017ee362?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fpr.png',
      updated_at: '2023-06-14T23:59:52.744Z',
      email: 'pruebacookie@tec.mx',
      email_verified: false,
      'https://smartspeak.example.com/roles': []
    },
    id: 'auth0|648a53d3f1ac1401362bf9f9',
    displayName: 'pruebacookie@tec.mx',
    emails: [],
    photos: [{ 'value': 'https://s.gravatar.com/avatar/c4bef95cd7fbfde66e482980017ee362?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fpr.png' }]
  });
  return redirect(redirectTo, {
    headers: {
      "Set-Cookie": await sessionStorage.commitSession(session, {
        maxAge: remember
          ? 60 * 60 * 24 * 7 // 7 days
          : undefined,
      }),
    },
  });
}

export async function createUserSessionAdmin({
  request,
  remember,
  redirectTo,
}: {
  request: Request;
  remember: boolean;
  redirectTo: string;
}) {
  const session = await getSession(request);
  session.set('user', {
    provider: 'auth0',
    _json: {
      sub: 'auth0|648b43428860a0c976f6141f',
      nickname: 'admin',
      name: 'admin@cypress.com',
      picture: 'https://s.gravatar.com/avatar/f53941d0a4414b99c50bfdd338228f68?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fad.png',
      updated_at: '2023-06-15T17:01:24.399Z',
      email: 'admin@cypress.com',
      email_verified: false,
      'https://smartspeak.example.com/roles': ['admin']
    },
    id: 'auth0|648b43428860a0c976f6141f',
    displayName: 'admin@cypress.com',
    emails: [{ value: 'admin@cypress.com' }],
    photos: [
      {
        value: 'https://s.gravatar.com/avatar/f53941d0a4414b99c50bfdd338228f68?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fad.png'
      }
    ]
  });
  return redirect(redirectTo, {
    headers: {
      "Set-Cookie": await sessionStorage.commitSession(session, {
        maxAge: remember
          ? 60 * 60 * 24 * 7 // 7 days
          : undefined,
      }),
    },
  });
}