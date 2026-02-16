import Image from "next/image";

export default function Certifications() {
  return (
    <section className="py-12 border-t border-zinc-800">
      <h2 className="text-2xl font-semibold mb-8">Certifications</h2>
      <div>
        <h3 className="text-lg font-medium">
          <a
            href="https://sites.google.com/unlv.edu/2025-unlv-gencyber-camp"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-zinc-700 underline-offset-4 hover:decoration-zinc-400 transition-colors"
          >
            UNLV GenCyber Camp Certificate
          </a>
        </h3>
        <div className="mt-4">
          <Image
            src="/images/gencyber-cert.jpeg"
            alt="UNLV GenCyber Camp Certificate awarded to Elijah Cabello"
            width={600}
            height={450}
            className="rounded-lg border border-zinc-800"
          />
        </div>
      </div>
    </section>
  );
}
