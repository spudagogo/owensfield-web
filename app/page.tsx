export default function HomePage() {
  return (
    <main style={{ padding: 32, maxWidth: 960, margin: "0 auto" }}>
      <h1>Owensfield Community Platform</h1>
      <p>
        A shared digital space for community governance, collaboration, and
        local initiatives.
      </p>

      <section style={{ display: "grid", gap: 24, marginTop: 32 }}>
        <div>
          <h2>Community</h2>
          <p>
            Engage with local members, working groups, and shared discussions.
          </p>
        </div>

        <div>
          <h2>Governance</h2>
          <p>
            Transparent rules, decisions, and versioned policies.
          </p>
        </div>

        <div>
          <h2>Projects</h2>
          <p>
            Track local initiatives, funding efforts, and collaborative work.
          </p>
        </div>

        <div>
          <h2>Documentation</h2>
          <p>
            Shared knowledge, guides, and historical records.
          </p>
        </div>
      </section>
    </main>
  );
}
