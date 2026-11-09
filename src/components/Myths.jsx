export default function Myths() {
  return (
    <section id="myths">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">Common myths</span>
          <h2>Six things people get wrong</h2>
        </div>
        <div className="cols3" style={{borderTop: '1px solid var(--ink)'}}>
          <div><h3>“It tries every answer at once.”</h3><p>A register of n qubits holds 2ⁿ amplitudes, but a measurement returns only one n-bit result. Algorithms work by interference that makes the right answer likely, not by reading all branches.</p></div>
          <div><h3>“It will replace my laptop.”</h3><p>Quantum computers are slow at ordinary tasks and need delicate, expensive infrastructure. They will sit in data centres as accelerators for a few kinds of work.</p></div>
          <div><h3>“It will break all encryption tomorrow.”</h3><p>Breaking RSA-2048 needs a large fault-tolerant machine that does not exist yet. Symmetric encryption such as AES-256 is only weakened by a square root. Migration to post-quantum standards is under way.</p></div>
          <div><h3>“It speeds up everything.”</h3><p>Most problems have no known quantum speedup. Many known ones are only quadratic, and that is often not enough to cover the overhead of error correction.</p></div>
          <div><h3>“Entanglement sends messages faster than light.”</h3><p>Measurement results on each side look random. They only show a correlation once the two sides compare notes by ordinary communication, which is no faster than light.</p></div>
          <div><h3>“More qubits always means better.”</h3><p>Quality matters as much as count. Gate fidelity, connectivity, coherence, readout and the ability to run error correction decide what a machine can do.</p></div>
        </div>
      </div>
    </section>
  );
}
