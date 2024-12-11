/** Array of routes for public @type {string[]} */

export const publicRoutes = ["/", "/auth/new-verification"];

/** Array of routes for authentication @type {string[]} */

export const authRoutes = [
  "/auth/login",
  "/auth/register",
  "/auth/reset",
  "/auth/new-password",
];

/** Prefix for API auth routes @type {string} */

export const apiAuthPrefix = "/api/auth";

/** Default redirect for user @type {string} */

export const DEFAULT_LOGIN_REDIRECT = "/settings";
