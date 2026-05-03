export default function Page() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          Database Tools
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Auto-generate database<br />
          <span className="text-[#58a6ff]">schema diagrams</span> instantly
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Paste a connection string, get an interactive SVG diagram showing every table, column, and foreign key relationship — with pan, zoom, and export.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Get Access — $14/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">PostgreSQL · MySQL · SQLite · MSSQL supported</p>

        {/* Fake diagram preview */}
        <div className="mt-14 rounded-xl border border-[#30363d] bg-[#161b22] p-6 text-left overflow-hidden">
          <div className="flex gap-3 mb-4">
            <span className="w-3 h-3 rounded-full bg-[#f85149]"></span>
            <span className="w-3 h-3 rounded-full bg-[#e3b341]"></span>
            <span className="w-3 h-3 rounded-full bg-[#3fb950]"></span>
          </div>
          <svg viewBox="0 0 520 220" className="w-full" aria-label="Schema diagram preview">
            {/* users table */}
            <rect x="20" y="20" width="140" height="130" rx="6" fill="#0d1117" stroke="#30363d" strokeWidth="1.5" />
            <rect x="20" y="20" width="140" height="32" rx="6" fill="#1f6feb" />
            <rect x="20" y="44" width="140" height="8" rx="0" fill="#1f6feb" />
            <text x="90" y="41" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">users</text>
            <text x="32" y="72" fill="#58a6ff" fontSize="10">🔑 id</text>
            <text x="32" y="90" fill="#c9d1d9" fontSize="10">name</text>
            <text x="32" y="108" fill="#c9d1d9" fontSize="10">email</text>
            <text x="32" y="126" fill="#c9d1d9" fontSize="10">created_at</text>
            <text x="32" y="144" fill="#c9d1d9" fontSize="10">role</text>
            {/* orders table */}
            <rect x="220" y="20" width="140" height="130" rx="6" fill="#0d1117" stroke="#30363d" strokeWidth="1.5" />
            <rect x="220" y="20" width="140" height="32" rx="6" fill="#388bfd" />
            <rect x="220" y="44" width="140" height="8" rx="0" fill="#388bfd" />
            <text x="290" y="41" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">orders</text>
            <text x="232" y="72" fill="#58a6ff" fontSize="10">🔑 id</text>
            <text x="232" y="90" fill="#e3b341" fontSize="10">🔗 user_id</text>
            <text x="232" y="108" fill="#c9d1d9" fontSize="10">total</text>
            <text x="232" y="126" fill="#c9d1d9" fontSize="10">status</text>
            <text x="232" y="144" fill="#c9d1d9" fontSize="10">placed_at</text>
            {/* products table */}
            <rect x="380" y="60" width="120" height="110" rx="6" fill="#0d1117" stroke="#30363d" strokeWidth="1.5" />
            <rect x="380" y="60" width="120" height="32" rx="6" fill="#1a7f37" />
            <rect x="380" y="84" width="120" height="8" rx="0" fill="#1a7f37" />
            <text x="440" y="81" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">products</text>
            <text x="392" y="110" fill="#58a6ff" fontSize="10">🔑 id</text>
            <text x="392" y="128" fill="#c9d1d9" fontSize="10">name</text>
            <text x="392" y="146" fill="#c9d1d9" fontSize="10">price</text>
            <text x="392" y="164" fill="#c9d1d9" fontSize="10">stock</text>
            {/* FK line users->orders */}
            <line x1="160" y1="90" x2="220" y2="90" stroke="#e3b341" strokeWidth="1.5" strokeDasharray="4 2" />
            <circle cx="160" cy="90" r="3" fill="#e3b341" />
            <circle cx="220" cy="90" r="3" fill="#e3b341" />
          </svg>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20" id="pricing">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple pricing</h2>
        <div className="rounded-xl border border-[#58a6ff] bg-[#161b22] p-8 text-center">
          <p className="text-sm text-[#58a6ff] uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$14</p>
          <p className="text-[#8b949e] mb-6">per month</p>
          <ul className="text-sm text-[#c9d1d9] space-y-2 mb-8 text-left">
            <li className="flex items-center gap-2"><span className="text-[#3fb950]">✓</span> Unlimited schema diagrams</li>
            <li className="flex items-center gap-2"><span className="text-[#3fb950]">✓</span> PostgreSQL, MySQL, SQLite, MSSQL</li>
            <li className="flex items-center gap-2"><span className="text-[#3fb950]">✓</span> Pan, zoom &amp; SVG export</li>
            <li className="flex items-center gap-2"><span className="text-[#3fb950]">✓</span> Real-time schema detection</li>
            <li className="flex items-center gap-2"><span className="text-[#3fb950]">✓</span> Foreign key mapping</li>
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Start for $14/mo
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24" id="faq">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          <div className="border border-[#30363d] rounded-lg p-5">
            <h3 className="font-semibold text-white mb-2">Which databases are supported?</h3>
            <p className="text-[#8b949e] text-sm">PostgreSQL, MySQL, SQLite, and Microsoft SQL Server are fully supported via standard connection strings.</p>
          </div>
          <div className="border border-[#30363d] rounded-lg p-5">
            <h3 className="font-semibold text-white mb-2">Is my connection string stored?</h3>
            <p className="text-[#8b949e] text-sm">No. Connection strings are used only for the duration of the schema fetch and are never persisted to disk or logs.</p>
          </div>
          <div className="border border-[#30363d] rounded-lg p-5">
            <h3 className="font-semibold text-white mb-2">Can I export the diagrams?</h3>
            <p className="text-[#8b949e] text-sm">Yes. Every diagram can be exported as an SVG or PNG file directly from the viewer toolbar.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} DB Schema Visualizer. All rights reserved.
      </footer>
    </main>
  );
}
