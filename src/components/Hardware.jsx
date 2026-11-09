export default function Hardware() {
  return (
    <section id="hardware">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">Hardware</span>
          <h2>Eight ways to build a qubit</h2>
          <p>No platform has won. Each trades speed, fidelity, connectivity and manufacturability differently, and the field keeps changing, so treat the company names as examples rather than a ranking.</p>
        </div>
        <div className="tiltgrid g4">
          <article className="tilt"><h3>Superconducting circuits</h3>
            <p>A small circuit with a Josephson junction behaves as an artificial atom. Chips are cooled to about 10 to 20 millikelvin and driven with microwave pulses.</p>
            <dl><div><dt>Strengths</dt><dd>Gates in tens to hundreds of nanoseconds, chip-industry fabrication, large software ecosystem.</dd></div>
              <div><dt>Challenges</dt><dd>Short coherence (tens to hundreds of microseconds), fixed neighbour connectivity, dense wiring, dilution refrigerators.</dd></div>
              <div><dt>Examples</dt><dd>IBM, Google, Rigetti, IQM, Alice &amp; Bob.</dd></div></dl></article>
          <article className="tilt"><h3>Trapped ions</h3>
            <p>Individual charged atoms are held in electric fields and laser-cooled. Their internal energy levels are the qubit, and lasers or microwaves drive the gates.</p>
            <dl><div><dt>Strengths</dt><dd>Among the highest gate fidelities, coherence of seconds or more, all-to-all connectivity within a trap.</dd></div>
              <div><dt>Challenges</dt><dd>Slower gates (microseconds to milliseconds), growing the number of ions per trap, precise optics.</dd></div>
              <div><dt>Examples</dt><dd>Quantinuum, IonQ, Alpine Quantum Technologies.</dd></div></dl></article>
          <article className="tilt"><h3>Neutral atoms</h3>
            <p>Atoms such as rubidium or strontium are held in arrays by focused laser beams called optical tweezers. Exciting them to Rydberg states makes neighbours interact and entangle.</p>
            <dl><div><dt>Strengths</dt><dd>Hundreds to thousands of qubits, reconfigurable geometry, no cryostat, natural for analog simulation.</dd></div>
              <div><dt>Challenges</dt><dd>Atom loss, slower cycle times, continuous reloading and mid-circuit readout.</dd></div>
              <div><dt>Examples</dt><dd>QuEra, Pasqal, Atom Computing, Infleqtion.</dd></div></dl></article>
          <article className="tilt"><h3>Photonic</h3>
            <p>Photons carry the qubit in their path, polarisation, time bin or in squeezed modes of light. Circuits are waveguides on a chip with beam splitters and phase shifters.</p>
            <dl><div><dt>Strengths</dt><dd>Operates largely at room temperature, natural for networking, compatible with chip manufacturing.</dd></div>
              <div><dt>Challenges</dt><dd>Photon loss, probabilistic two-photon gates, enormous component counts, fast cryogenic detectors.</dd></div>
              <div><dt>Examples</dt><dd>PsiQuantum, Xanadu, Quandela.</dd></div></dl></article>
          <article className="tilt"><h3>Silicon spin qubits</h3>
            <p>The spin of a single electron, or of a donor nucleus, is trapped in a transistor-like structure and controlled with microwaves and voltages.</p>
            <dl><div><dt>Strengths</dt><dd>Nanometre size, long coherence in purified silicon, direct path to existing CMOS factories.</dd></div>
              <div><dt>Challenges</dt><dd>Device-to-device variability, wiring density, reaching high fidelity across many qubits.</dd></div>
              <div><dt>Examples</dt><dd>Intel, Diraq, Quantum Motion, Silicon Quantum Computing.</dd></div></dl></article>
          <article className="tilt"><h3>Diamond colour centres</h3>
            <p>A nitrogen atom next to a missing carbon atom (an NV centre) has a spin that can be initialised and read with light, even at room temperature.</p>
            <dl><div><dt>Strengths</dt><dd>Room-temperature operation, atom-scale sensor size, optical readout.</dd></div>
              <div><dt>Challenges</dt><dd>Hard to scale into a computer. Mainly used for sensing and as network nodes.</dd></div>
              <div><dt>Uses</dt><dd>Magnetometry, nanoscale NMR, quantum memory.</dd></div></dl></article>
          <article className="tilt"><h3>Quantum annealers</h3>
            <p>Superconducting flux qubits implement an Ising-type Hamiltonian that is slowly changed so the system settles into a low-energy solution of an optimisation problem.</p>
            <dl><div><dt>Strengths</dt><dd>Thousands of qubits available today for a specific problem class.</dd></div>
              <div><dt>Challenges</dt><dd>Not a universal gate-model computer. Whether it beats the best classical heuristics on practical problems is still debated.</dd></div>
              <div><dt>Examples</dt><dd>D-Wave.</dd></div></dl></article>
          <article className="tilt"><h3>Topological qubits</h3>
            <p>An idea in which information lives in non-local properties of exotic quasiparticles, so local noise cannot easily damage it.</p>
            <dl><div><dt>Strengths</dt><dd>If realised, built-in protection could greatly reduce error-correction overhead.</dd></div>
              <div><dt>Challenges</dt><dd>Microsoft reported a topological device in 2025, and the physics behind that claim is still being examined by the community.</dd></div>
              <div><dt>Status</dt><dd>Early research.</dd></div></dl></article>
        </div>
      </div>
    </section>
  );
}
