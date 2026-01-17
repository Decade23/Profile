import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { Analytics } from '@vercel/analytics/react';
import ErrorBoundary from '../components/ErrorBoundary';
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <ErrorBoundary>
        <Component {...pageProps} />
        <Analytics />
      </ErrorBoundary>
    </ThemeProvider>
  )
}

export default MyApp
