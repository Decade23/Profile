import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

/**
 * Custom 404 Page
 * This page redirects any user who lands on a non-existent route back to the homepage.
 */
export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the homepage
    router.replace('/');
  }, [router]);

  return (
    <Head>
      <title>404 - Page Not Found</title>
    </Head>
  );
}
