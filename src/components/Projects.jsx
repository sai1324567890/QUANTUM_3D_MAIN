export default function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">Suggested projects</span>
          <h2>Build something at every level</h2>
          <p>These are ideas to pick from, not step-by-step tutorials. Finish one project per level and you will have a portfolio that shows real depth.</p>
        </div>
        <div className="chips" id="pchips" role="group" aria-label="Filter projects by level" />
        <div className="pgrid" id="pgrid" />
      </div>
    </section>
  );
}
