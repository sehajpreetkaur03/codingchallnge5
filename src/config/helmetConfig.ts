import helmet from "helmet";

export const helmetConfig = helmet({
  // Disable Content Security Policy because this app is a JSON API.
  // CSP is mainly useful for browser-rendered HTML pages, not simple backend APIs.
  contentSecurityPolicy: false,

  // Prevent the app from being opened inside an iframe.
  // This helps protect against clickjacking attacks.
  frameguard: { action: "deny" },

  // Hide the X-Powered-By header so Express is not exposed in responses.
  hidePoweredBy: true,

  // Enable HSTS only in production.
  // In development, local servers usually do not use HTTPS.
  hsts:
    process.env.NODE_ENV === "production"
      ? {
          maxAge: 31536000,
          includeSubDomains: true,
          preload: true,
        }
      : false,
});