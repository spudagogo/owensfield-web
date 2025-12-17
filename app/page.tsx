export default function Home() {
  return (
    <main className="container">
      <header className="hero">
        <h1>Owensfield Community Platform</h1>
        <p>
          A shared digital space for community governance, collaboration,
          and local initiatives.
        </p>
      </header>

      <section className="sections">
        <div className="card">
          <h2>Community</h2>
          <p>
            Engage with local members, working groups, and shared discussions.
          </p>
        </div>

        <div className="card">
          <h2>Governance</h2>
          <p>
            Transparent rules, decisions, and versioned policies.
          </p>
        </div>

        <div className="card">
          <h2>Resources</h2>
          <p>
            Documents, proposals, and tools that support the community.
          </p>
        </div>
      </section>
    </main>
  );
}
