export default function GettingStartedPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <meta httpEquiv="refresh" content="0; url=/getting-started/welcome" />
      <div className="text-center">
        <div className="text-lg font-medium">Redirecting to Welcome page...</div>
        <div className="mt-2">
          <a
            href="/getting-started/welcome"
            className="text-blue-500 hover:text-blue-700 underline"
          >
            Click here if you are not redirected automatically
          </a>
        </div>
      </div>
    </div>
  );
}

export const getConfig = async () => {
  return {
    render: 'static'
  };
};
