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

  // TODO: Handle the case of a page refresh or manual URL route entry, where the Firebase auth
  //        object is still 'null', simply because it is in the "unknown" state (has not finished)
  //        initializing.  I may need to read and write to local storage.
  if (!userAuth && routeIsProtected && !isRunningOnServer()) {
    // Redirect to the home page
    router.push('/');
  }

  return children;
}