/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: () => [
    {
      source: "/login",
      destination: "/?login=true",
      permanent: false,
    },
    {
      source: "/signup",
      destination: "/?signup=true",
      permanent: false,
    },
  ],
  // Make a rewrite so that when user type in /login in the url, the / route is served instead
};

module.exports = nextConfig;
