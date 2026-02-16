const languages = [
  "Python",
  "HTML",
  "CSS",
  "JavaScript",
  "SQL",
  "React.js",
  "Node.js",
];

const tools = [
  "Postgres",
  "Supabase",
  "Linux",
  "Kali Linux",
  "Windows",
  "macOS",
  "Microsoft Office",
  "Jira",
];

function PillList({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className="rounded-full border border-zinc-800 px-3 py-1 text-sm text-zinc-300"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

export default function Skills() {
  return (
    <section className="py-12 border-t border-zinc-800">
      <h2 className="text-2xl font-semibold mb-8">Skills</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-3">
            Languages &amp; Frameworks
          </h3>
          <PillList items={languages} />
        </div>
        <div>
          <h3 className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-3">
            Tools &amp; Platforms
          </h3>
          <PillList items={tools} />
        </div>
      </div>
    </section>
  );
}
