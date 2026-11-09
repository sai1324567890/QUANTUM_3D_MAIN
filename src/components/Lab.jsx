export default function Lab() {
  return (
    <section id="lab">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">Concept lab</span>
          <h2>Twelve concepts, each with a full explanation and a live simulation</h2>
          <p>Read the text on the left and play with the simulation on the right. Each lesson says what the idea is, how it works, where it is used and what to try. They run roughly from basic to advanced, and each is tagged with its level.</p>
        </div>
        <nav className="chipnav" id="lab-index" aria-label="Concept index" />
        <div className="lessons" id="lessons" />
      </div>
    </section>
  );
}
