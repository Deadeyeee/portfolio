import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-surface px-4">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold text-foreground">404</h1>
        <p className="text-lg text-muted-foreground">Oops! The page you're looking for doesn't exist.</p>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full border border-border bg-background px-6 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}

