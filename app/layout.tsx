import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Owensfield Community Platform",
  description: "Community governance, collaboration, and local initiatives",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900">
        <header className="border-b">
          <nav className="mx-auto max-w-6xl flex items-center justify-between p-4">
            <div className="font-semibold">Owensfield</div>
            <div className="flex gap-6 text-sm">
              <Link href="/">Home</Link>
              <Link href="/community">Community</Link>
              <Link href="/governance">Governance</Link>
              <Link href="/projects">Projects</Link>
              <Link href="/docs">Docs</Link>
            </div>
          </nav>
        </header>
        <main className="mx-auto max-w-6xl p-6">
          {children}
        </main>
        <footer className="border-t mt-12 p-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Owensfield Community
        </footer>
      </body>
    </html>
  );
}
