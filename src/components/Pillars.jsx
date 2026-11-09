export default function Pillars() {
  return (
    <section id="pillars">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">Technologies</span>
          <h2>Four families of quantum technology</h2>
          <p>Computing gets the headlines, but communication and sensing are further along commercially.</p>
        </div>
        <div className="tiltgrid g4" id="pillar-grid">
          <article className="tilt">
            <div className="row1"><h3>Quantum computing</h3><span className="tag research">Research, early cloud</span></div>
            <p>Qubits plus gates plus measurement. Three models exist: gate-based (circuits, the one on this page), annealing (optimisation by slowly changing a Hamiltonian) and analog (a device that directly mimics one physical system).</p>
            <dl>
              <div><dt>Today</dt><dd>Hundreds to a few thousand noisy physical qubits, cloud access, first small logical qubits with error correction.</dd></div>
              <div><dt>Next</dt><dd>Error-corrected machines with hundreds of logical qubits and billions of operations.</dd></div>
            </dl>
          </article>
          <article className="tilt">
            <div className="row1"><h3>Quantum communication</h3><span className="tag use">In use</span></div>
            <p>Quantum key distribution (BB84, E91) shares encryption keys whose secrecy rests on physics. Quantum networks send entangled photons between nodes, and repeaters will extend range beyond the roughly one hundred kilometres loss allows in fibre.</p>
            <dl>
              <div><dt>Today</dt><dd>Fibre QKD networks including China’s Beijing to Shanghai backbone, satellite links since the Micius satellite in 2016, and European EuroQCI plans.</dd></div>
              <div><dt>Next</dt><dd>Entanglement distribution, a quantum internet, and linking separate quantum processors.</dd></div>
            </dl>
          </article>
          <article className="tilt">
            <div className="row1"><h3>Quantum sensing</h3><span className="tag early">Early commercial</span></div>
            <p>A superposition accumulates phase in proportion to a field or to elapsed time. Reading that phase gives extreme sensitivity. Atomic clocks, diamond NV magnetometers, atom interferometers and squeezed-light detectors all work this way.</p>
            <dl>
              <div><dt>Today</dt><dd>Atomic clocks in satellite navigation, wearable magnetoencephalography, quantum gravimeters in field trials, squeezed light in gravitational-wave detectors.</dd></div>
              <div><dt>Next</dt><dd>Navigation without GPS, mineral and water mapping, cheaper medical imaging, entangled sensor arrays.</dd></div>
            </dl>
          </article>
          <article className="tilt">
            <div className="row1"><h3>Quantum simulation</h3><span className="tag pilot">Pilots</span></div>
            <p>Analog simulators use cold atoms in optical lattices, Rydberg atom arrays or trapped ions as a stand-in for a material you cannot compute. Digital simulation uses a gate-based computer to evolve the same model step by step.</p>
            <dl>
              <div><dt>Today</dt><dd>Studies of magnetism, phase transitions and dynamics at sizes that stress classical methods.</dd></div>
              <div><dt>Next</dt><dd>Chemistry and materials with accuracy that classical approximations cannot reach.</dd></div>
            </dl>
          </article>
        </div>
        <h3 className="sub">Post-quantum cryptography is not quantum technology</h3>
        <div className="prose">
          <p>It is classical mathematics, run on ordinary computers, designed to resist attacks from quantum computers. NIST published its first three post-quantum standards in 2024: ML-KEM (FIPS 203) for key exchange, and ML-DSA (FIPS 204) and SLH-DSA (FIPS 205) for signatures. Most organisations will migrate to these long before they ever buy a QKD link, because they run on existing networks and hardware. The two approaches are complementary.</p>
        </div>
      </div>
    </section>
  );
}
