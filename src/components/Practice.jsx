export default function Practice() {
  return (
    <section id="practice">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">Practice questions</span>
          <h2>Check your understanding before you move up a level</h2>
          <p>Pick a level or take them all. Every answer comes with an explanation. Scoring 80% or more is a good sign you can move on.</p>
        </div>
        <div className="quiz">
          <div className="chips" id="qchips" role="group" aria-label="Choose level" />
          <div id="qbody" />
        </div>
      </div>
    </section>
  );
}
