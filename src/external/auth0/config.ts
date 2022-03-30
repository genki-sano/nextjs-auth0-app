export const auth0Config = {
  domain: process.env.NEXT_PUBLIC_AUTH0_DOMAIN as string,
  clientId: process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID as string,
  redirectUri: process.env.NEXT_PUBLIC_AUTH0_REDIRECT_URI,
}
