export default function Hero() {
  return (
    <section className="py-20">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
        Elijah Cabello
      </h1>
      <p className="mt-4 text-lg text-zinc-400">
        Computer Science Student &amp; Aspiring Cybersecurity Professional
      </p>
      <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-zinc-400">
        <a
          href="mailto:elijah.cabello1@gmail.com"
          className="hover:text-white transition-colors"
        >
          elijah.cabello1@gmail.com
        </a>
        <a
          href="https://github.com/eli-cabello"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/elijah-cabello"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
