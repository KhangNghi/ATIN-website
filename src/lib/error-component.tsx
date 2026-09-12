import type { ErrorComponentProps } from "@tanstack/react-router";

export function AppErrorComponent({ error }: ErrorComponentProps) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-paper px-6 text-center text-ink">
      <p className="text-micro text-sage">Something went wrong</p>
      <h1 className="font-display mt-3 text-3xl">This page could not be shown.</h1>
      <p className="mt-4 max-w-md text-sm break-words text-moss">
        {error.message || "An unexpected error occurred. Try reloading the page."}
      </p>
    </main>
  );
}
