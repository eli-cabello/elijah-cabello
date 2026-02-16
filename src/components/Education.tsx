export default function Education() {
  return (
    <section className="py-12 border-t border-zinc-800">
      <h2 className="text-2xl font-semibold mb-8">Education</h2>
      <div className="space-y-8">
        <div>
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
            <h3 className="text-lg font-medium">
              College of Southern Nevada
            </h3>
            <span className="text-sm text-zinc-500">Fall 2026</span>
          </div>
          <p className="text-zinc-400 mt-1">B.S. Computer Science</p>
          <p className="text-sm text-zinc-500 mt-2">
            Developing custom web applications and studying business principles
            through hands-on coursework.
          </p>
        </div>
        <div>
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
            <h3 className="text-lg font-medium">Foothill High School</h3>
            <span className="text-sm text-zinc-500">Aug 2022 &ndash; Apr 2026</span>
          </div>
          <p className="text-sm text-zinc-500 mt-2">
            Built a foundation in computer science, completing coursework that
            led to building web applications and exploring cybersecurity.
          </p>
        </div>
      </div>
    </section>
  );
}
