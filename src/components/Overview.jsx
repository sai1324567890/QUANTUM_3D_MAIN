export default function Overview() {
  return (
    <section id="overview">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">What it is</span>
          <h2>Quantum physics, quantum technology and quantum computing are three different things</h2>
          <p>People use the words as if they meant the same thing. Separating them makes everything else on this page easier to follow.</p>
        </div>
        <div className="cols3">
          <div>
            <h3>Quantum physics</h3>
            <p>The rules that govern matter and light at the scale of atoms and below. Energy comes in discrete packets called quanta. Particles also behave like waves. A system can be in a superposition of several states until it is measured, and the result of a measurement is random, with probabilities set by the state.</p>
            <p>These rules have been tested for a century. They already underpin transistors, lasers, LEDs, solar cells, MRI scanners and atomic clocks. That is often called the first quantum revolution.</p>
          </div>
          <div>
            <h3>Quantum technology</h3>
            <p>The second quantum revolution. Instead of using quantum effects as a side effect inside bulk materials, engineers now build and control individual quantum systems on purpose: single atoms, ions, photons, electron spins and superconducting circuits.</p>
            <p>Four families result: computing, communication, sensing and simulation. They share the same ingredients (superposition, interference, entanglement) and the same enemy (noise from the environment).</p>
          </div>
          <div>
            <h3>Quantum computing</h3>
            <p>One branch of quantum technology. A quantum computer stores information in qubits and runs algorithms that steer probability amplitudes so that wrong answers cancel and the right answer is likely to be measured.</p>
            <p>It is not a faster laptop. It is a different kind of machine that gives large advantages on some problems, small ones on others, and none on most everyday tasks.</p>
          </div>
        </div>
        <h3 className="sub">A bit against a qubit</h3>
        <div className="tbl">
          <table>
            <thead><tr><th>Property</th><th>Classical bit</th><th>Qubit</th></tr></thead>
            <tbody>
              <tr><td>State</td><td>0 or 1</td><td>α|0⟩ + β|1⟩ with complex α, β and |α|² + |β|² = 1</td></tr>
              <tr><td>n of them</td><td>One of 2ⁿ values at a time</td><td>2ⁿ complex amplitudes at once, but reading gives only n bits</td></tr>
              <tr><td>Reading</td><td>Does not disturb the value</td><td>Measurement is random and collapses the state</td></tr>
              <tr><td>Copying</td><td>Free</td><td>Impossible for an unknown state (no-cloning theorem)</td></tr>
              <tr><td>Operations</td><td>Logic gates, many irreversible (AND, OR)</td><td>Unitary gates, always reversible</td></tr>
              <tr><td>Correlation</td><td>Shared randomness</td><td>Entanglement, which can violate Bell inequalities</td></tr>
              <tr><td>Errors</td><td>Around 10⁻¹⁷ per operation in a modern chip</td><td>Around 10⁻³ to 10⁻² per operation on today’s devices</td></tr>
              <tr><td>Hardware</td><td>Silicon transistors at room temperature</td><td>Superconducting circuits, ions, atoms, photons or spins, often near absolute zero or in vacuum</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
