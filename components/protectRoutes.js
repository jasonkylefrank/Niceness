import { isRunningOnServer } from "../lib/utlities";

// See inspiration from examples such as: https://azeezatraheem.medium.com/implementing-authentication-redirects-in-next-js-c15907ec82b7 or https://theodorusclarence.com/blog/nextjs-redirect-no-flashing

export default function ProtectRoutes({ userAuth, router, children }) {
  
  const unprotectedRoutes = [
    '/',
    '/about',
    '/temp',
    '/test'
  ];

  const routeIsProtected = !unprotectedRoutes.find((route) => router.pathname === route);

  if (!userAuth && routeIsProtected && !isRunningOnServer()) {
    // Redirect to the home page
    router.push('/');
  }

  return children;
}