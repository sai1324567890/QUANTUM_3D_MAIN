export default function Future() {
  return (
    <section id="future">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">The future</span>
          <h2>Where quantum technology came from, and where it is heading</h2>
          <p>The history shows how slowly foundations turn into products. The roadmap shows what hardware companies and standards bodies are planning.</p>
        </div>
        <div className="twocol">
          <div>
            <h3 className="sub" style={{marginTop: 0}}>How we got here</h3>
            <ol className="tl">
              <li><span className="yr">1900</span><span className="dot" /><div><b>Planck introduces the quantum</b><span>Energy is exchanged in discrete packets, which solves the black-body problem.</span></div></li>
              <li><span className="yr">1925–27</span><span className="dot" /><div><b>Quantum mechanics is formulated</b><span>Heisenberg, Schrödinger, Born and others set out the rules still used today.</span></div></li>
              <li><span className="yr">1947–60</span><span className="dot" /><div><b>The first quantum revolution</b><span>The transistor (1947) and the laser (1960) turn quantum theory into industry.</span></div></li>
              <li><span className="yr">1981</span><span className="dot" /><div><b>Feynman proposes quantum simulation</b><span>Nature is quantum, so simulate it with a quantum machine.</span></div></li>
              <li><span className="yr">1984</span><span className="dot" /><div><b>BB84 quantum key distribution</b><span>Bennett and Brassard show that physics can protect a key exchange.</span></div></li>
              <li><span className="yr">1994–96</span><span className="dot" /><div><b>Shor, error correction, Grover</b><span>Factoring in polynomial time, the first quantum error-correcting codes, and quadratic search.</span></div></li>
              <li><span className="yr">2019</span><span className="dot" /><div><b>First beyond-classical claim</b><span>Google reports a random-circuit sampling task on 53 superconducting qubits. Classical researchers later narrowed the gap.</span></div></li>
              <li><span className="yr">2022</span><span className="dot" /><div><b>Nobel Prize in Physics</b><span>Aspect, Clauser and Zeilinger are recognised for experiments with entangled photons that established the violation of Bell inequalities.</span></div></li>
              <li><span className="yr">2024</span><span className="dot" /><div><b>Error correction below threshold, and PQC standards</b><span>Google reports a surface-code memory whose logical error falls as the code grows. NIST publishes FIPS 203, 204 and 205.</span></div></li>
            </ol>
          </div>
          <div>
            <h3 className="sub" style={{marginTop: 0}}>What is planned next</h3>
            <ol className="tl">
              <li className="now"><span className="yr">2026</span><span className="dot" /><div><b>Modular, error-corrected prototypes</b><span>IBM’s roadmap lists Kookaburra, its first module for storing and processing encoded information. In July 2026 IBM and the University of Chicago announced a 70-logical-qubit sampling experiment they describe as beyond classical simulation. That is a company claim in a preprint, so independent checks are pending.</span></div></li>
              <li><span className="yr">2027</span><span className="dot" /><div><b>Linked modules</b><span>IBM’s Cockatoo is planned to join two Kookaburra modules with long-range couplers.</span></div></li>
              <li><span className="yr">2029</span><span className="dot" /><div><b>First large fault-tolerant machine, by plan</b><span>IBM targets Starling: 200 logical qubits and 100 million operations. Other companies publish their own targets, and these are plans, not guarantees.</span></div></li>
              <li><span className="yr">2030</span><span className="dot" /><div><b>Start of the RSA and ECC phase-out</b><span>Under NIST guidance, quantum-vulnerable algorithms are deprecated after 2030.</span></div></li>
              <li><span className="yr">2030s</span><span className="dot" /><div><b>Larger logical machines</b><span>IBM’s Blue Jay is described with 2,000 logical qubits and a billion operations, without a firm date in its announcement. This is the scale where chemistry and materials results become plausible.</span></div></li>
              <li><span className="yr">2035</span><span className="dot" /><div><b>RSA and ECC disallowed in NIST guidance</b><span>Systems that need long-term secrecy have to migrate well before then.</span></div></li>
            </ol>
          </div>
        </div>
        <div className="callout" style={{marginTop: 12}}><b>Read dates carefully.</b> Hardware dates are company targets and have slipped before. Standards dates are policy. Predictions about when a machine will break RSA-2048 vary widely, and published resource estimates have fallen over time, for example to under one million noisy physical qubits in a 2025 analysis by Craig Gidney.</div>
        <h3 className="sub">Where it may be used in the future</h3>
        <div className="tiltgrid g4">
          <article className="tilt"><h3>Designing medicines</h3><p>Accurate simulation of how a drug binds to a protein, including quantum effects that classical force fields miss, could shorten the search for candidates.</p></article>
          <article className="tilt"><h3>New materials</h3><p>Room-temperature superconductors, better magnets, lighter and safer batteries and efficient solar absorbers are all searches through quantum-mechanical possibility space.</p></article>
          <article className="tilt"><h3>Cleaner industry</h3><p>Catalysts for fertiliser, hydrogen and carbon capture could cut a large share of industrial energy use if simulation can guide their design.</p></article>
          <article className="tilt"><h3>Fusion and energy systems</h3><p>Plasma dynamics and materials for reactor walls are very hard to simulate. Quantum algorithms for differential equations are an active research area.</p></article>
          <article className="tilt"><h3>A quantum internet</h3><p>Entanglement distribution between cities would allow secure communication, networked sensors with higher precision, and cloud access to quantum computers with private data.</p></article>
          <article className="tilt"><h3>Distributed quantum computing</h3><p>Linking many smaller processors with photonic interconnects may scale further than a single chip can.</p></article>
          <article className="tilt"><h3>GPS-free navigation</h3><p>Compact cold-atom inertial sensors could keep ships, aircraft and vehicles on course for hours without satellite signals.</p></article>
          <article className="tilt"><h3>Earth and health sensing</h3><p>Gravimeters for mapping aquifers and tunnels, and magnetometers that read brain and heart signals without shielded rooms.</p></article>
        </div>
        <h3 className="sub">What could slow it down</h3>
        <div className="twocol">
          <ul className="prose" style={{margin: 0, paddingLeft: '1.2em', color: 'var(--body)', display: 'grid', gap: 10}}>
            <li><b>Error rates.</b> Algorithms that matter need logical error rates near 10⁻¹² or lower, many orders of magnitude below today’s physical qubits.</li>
            <li><b>Overhead.</b> Each logical qubit may need hundreds to thousands of physical qubits, depending on the code and the hardware.</li>
            <li><b>Engineering.</b> Wiring, cooling, lasers, real-time decoding and manufacturing yield all have to scale together.</li>
          </ul>
          <ul className="prose" style={{margin: 0, paddingLeft: '1.2em', color: 'var(--body)', display: 'grid', gap: 10}}>
            <li><b>Algorithms.</b> Few problems have a proven large speedup. Finding more, and showing they beat the best classical methods, is open research.</li>
            <li><b>Data loading and readout.</b> Getting big classical data in, and big answers out, can erase a speedup.</li>
            <li><b>People.</b> The field needs engineers who understand both quantum physics and large-scale software and hardware.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
