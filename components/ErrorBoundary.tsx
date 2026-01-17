import { Component, ReactNode, ComponentType, ErrorInfo } from 'react';
import Head from 'next/head';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ComponentType<{ error?: Error }>;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

export default class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      const FallbackComponent = this.props.fallback || DefaultFallback;
      return <FallbackComponent error={this.state.error} />;
    }

    return this.props.children;
  }
}

function DefaultFallback({ error }: { error?: Error }) {
  return (
    <>
      <Head>
        <title>Something went wrong - Dedi Fardiyanto</title>
      </Head>
      <div className="flex items-center justify-center min-h-screen bg-blue-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-fuchsia-600 mb-4">Oops!</h1>
          <p className="text-gray-600 mb-4">Something went wrong. Please try again later.</p>
          {error && (
            <details className="mb-4 text-left text-sm text-gray-500">
              <summary>Error details</summary>
              <pre className="mt-2 p-2 bg-gray-100 rounded">
                {error.toString()}
              </pre>
            </details>
          )}
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-fuchsia-600 text-white rounded-lg hover:bg-fuchsia-700 transition-colors"
          >
            Reload Page
          </button>
        </div>
      </div>
    </>
  );
}
