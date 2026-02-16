export default function Experience() {
  return (
    <section className="py-12 border-t border-zinc-800">
      <h2 className="text-2xl font-semibold mb-8">Experience</h2>
      <div className="space-y-8">
        <div>
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
            <h3 className="text-lg font-medium">
              <a
                href="https://sites.google.com/unlv.edu/2025-unlv-gencyber-camp"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-zinc-700 underline-offset-4 hover:decoration-zinc-400 transition-colors"
              >
                UNLV GenCyber Camp
              </a>
            </h3>
            <span className="text-sm text-zinc-500">Apr &ndash; Jun 2025</span>
          </div>
          <p className="text-zinc-400 mt-1">Student &middot; Las Vegas, NV</p>
          <ul className="mt-3 space-y-1.5 text-sm text-zinc-400 list-disc list-inside">
            <li>
              Studied networking protocols, IP addressing, the OSI model,
              firewalls, and cryptography
            </li>
            <li>
              Practiced web exploitation techniques including directory traversal
              and password cracking with Kali Linux
            </li>
            <li>
              Explored OSINT, steganography, and physical security to identify
              real-world vulnerabilities
            </li>
          </ul>
        </div>

        <div>
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
            <h3 className="text-lg font-medium">TryHackMe</h3>
            <span className="text-sm text-zinc-500">Aug 2025 &ndash; Present</span>
          </div>
          <p className="text-zinc-400 mt-1">Self-directed Learning &middot; Henderson, NV</p>
          <ul className="mt-3 space-y-1.5 text-sm text-zinc-400 list-disc list-inside">
            <li>
              Completing modules on network security, web application security,
              and offensive/defensive techniques
            </li>
            <li>
              Building on camp knowledge with hands-on labs and challenges
            </li>
          </ul>
        </div>

        <div>
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
            <h3 className="text-lg font-medium">Web Applications</h3>
            <span className="text-sm text-zinc-500">Jan 2025 &ndash; Present</span>
          </div>
          <p className="text-zinc-400 mt-1">Henderson, NV</p>
          <ul className="mt-3 space-y-1.5 text-sm text-zinc-400 list-disc list-inside">
            <li>
              Built{" "}
              <a
                href="https://crimson-and-chrome.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-zinc-700 underline-offset-4 hover:decoration-zinc-400 transition-colors"
              >
                Crimson &amp; Chrome
              </a>
              , a car platform with a dashboard for managing events and vehicles
            </li>
            <li>
              Handled backend and database operations with Supabase
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
