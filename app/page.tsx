export default function HomePage() {
  return (
    <main className="min-h-screen p-8 max-w-5xl mx-auto">
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-4">
          Owensfield Community Platform
        </h1>
        <p className="text-lg text-gray-600">
          A shared digital space for community governance, collaboration,
          and local initiatives.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-2">Community</h2>
          <p className="text-gray-600">
            Engage with local members, working groups, and shared discussions.
            This space will host updates, conversations, and participation tools.
          </p>
        </div>

        <div className="border rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-2">Governance</h2>
          <p className="text-gray-600">
            Transparent rules, decisions, and versioned policies.
            Track proposals, votes, and agreed outcomes over time.
          </p>
        </div>

        <div className="border rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-2">Projects</h2>
          <p className="text-gray-600">
            Local initiatives, funding efforts, and collaborative projects.
            See what is active, planned, or completed in the community.
          </p>
        </div>

        <div className="border rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-2">Documentation</h2>
          <p className="text-gray-600">
            Shared knowledge, guides, and records.
            A living archive for decisions, processes, and history.
          </p>
        </div>
      </section>

      <footer className="mt-16 text-sm text-gray-500">
        © {new Date().getFullYear()} Owensfield Community
      </footer>
    </main>
  );
}
