export const endpoint =
  process.env.NODE_ENV === "production"
    ? process.env.API_URL_PROD
    : process.env.API_URL_DEV;
