export default function Footer() {
  return (
    <footer className="py-12 border-t border-zinc-800 text-sm text-zinc-500">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <span>&copy; {new Date().getFullYear()} Elijah Cabello</span>
        <div className="flex gap-6">
          <a
            href="mailto:elijah.cabello1@gmail.com"
            className="hover:text-white transition-colors"
          >
            Email
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
      </div>
    </footer>
  );
}
