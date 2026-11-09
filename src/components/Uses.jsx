export default function Uses() {
  return (
    <section id="uses">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">Where it is used</span>
          <h2>Applications, and how mature each one really is</h2>
          <p>The tag on each card says how close the application is to everyday use. Several well-known promises are still research.</p>
        </div>
        <div className="tiltgrid g3">
          <article className="tilt"><div className="row1"><h3>Drug discovery and chemistry</h3><span className="tag research">Research</span></div>
            <p>Molecular energies are quantum problems. Accurate simulation of reaction mechanisms, binding and enzymes is limited by classical approximations. A widely studied target is the iron-molybdenum cofactor of nitrogenase, which fixes nitrogen in nature.</p>
            <dl><div><dt>How</dt><dd>Phase estimation on an error-corrected machine, or VQE on small molecules today.</dd></div><div><dt>Reality check</dt><dd>Useful advantage is expected to need fault-tolerant hardware. Today’s demonstrations use small molecules.</dd></div></dl></article>
          <article className="tilt"><div className="row1"><h3>Materials and batteries</h3><span className="tag research">Research</span></div>
            <p>Electrolytes, catalysts, magnets and high-temperature superconductors are hard because electrons interact strongly. Simulating them could guide the search for better batteries and cheaper catalysts.</p>
            <dl><div><dt>How</dt><dd>Analog simulators for model Hamiltonians now, digital simulation later.</dd></div><div><dt>Reality check</dt><dd>Analog simulators already study idealised models. Real-material accuracy needs larger machines.</dd></div></dl></article>
          <article className="tilt"><div className="row1"><h3>Cryptography and security</h3><span className="tag use">In use</span></div>
            <p>A large fault-tolerant machine running Shor’s algorithm would break RSA and elliptic-curve cryptography. Data stolen today can be decrypted later, so migration is already under way.</p>
            <dl><div><dt>How</dt><dd>Post-quantum algorithms on classical hardware. QKD in a few high-security links.</dd></div><div><dt>Reality check</dt><dd>NIST plans to deprecate RSA and ECC after 2030 and disallow them from 2035.</dd></div></dl></article>
          <article className="tilt"><div className="row1"><h3>Optimisation and logistics</h3><span className="tag pilot">Pilots</span></div>
            <p>Routing, scheduling, portfolio selection and supply chains are combinatorial. Annealers and QAOA are tried on them by airlines, ports, banks and manufacturers.</p>
            <dl><div><dt>How</dt><dd>Encode as an Ising or QUBO problem and sample low-energy solutions.</dd></div><div><dt>Reality check</dt><dd>Clear advantage over strong classical solvers has not been shown for practical sizes.</dd></div></dl></article>
          <article className="tilt"><div className="row1"><h3>Finance</h3><span className="tag research">Research</span></div>
            <p>Pricing derivatives and measuring risk rely on Monte Carlo sampling. Amplitude estimation offers a quadratic reduction in the number of samples needed for a given accuracy.</p>
            <dl><div><dt>How</dt><dd>Amplitude estimation, quantum linear algebra, portfolio optimisation.</dd></div><div><dt>Reality check</dt><dd>The quadratic gain can be eaten by error-correction overhead and the cost of loading data.</dd></div></dl></article>
          <article className="tilt"><div className="row1"><h3>AI and machine learning</h3><span className="tag research">Research</span></div>
            <p>Ideas include quantum kernels, variational classifiers and faster sampling for generative models. Quantum data from sensors and simulators is a more natural fit than classical images or text.</p>
            <dl><div><dt>How</dt><dd>Parameterised circuits trained with classical optimisers.</dd></div><div><dt>Reality check</dt><dd>Loading large classical datasets into qubits is a bottleneck, and many proposed speedups have been matched by classical methods.</dd></div></dl></article>
          <article className="tilt"><div className="row1"><h3>Energy and climate</h3><span className="tag research">Research</span></div>
            <p>Fertiliser production by the Haber–Bosch process consumes on the order of one to two percent of the world’s energy. Better catalysts, carbon-capture materials and fusion plasma models are all quantum-simulation targets.</p>
            <dl><div><dt>How</dt><dd>Quantum chemistry and materials simulation, grid optimisation.</dd></div><div><dt>Reality check</dt><dd>Long-term. Results depend on fault-tolerant machines.</dd></div></dl></article>
          <article className="tilt"><div className="row1"><h3>Timing and navigation</h3><span className="tag use">In use</span></div>
            <p>Atomic clocks keep satellite navigation and telecom networks synchronised. Optical clocks are far more precise, and cold-atom accelerometers and gyroscopes can navigate when GPS is unavailable.</p>
            <dl><div><dt>How</dt><dd>Ramsey interferometry on atoms, laser-cooled atom interferometers.</dd></div><div><dt>Reality check</dt><dd>Clocks are mature. Atom-based inertial navigation is in field trials.</dd></div></dl></article>
          <article className="tilt"><div className="row1"><h3>Medical and brain imaging</h3><span className="tag early">Early commercial</span></div>
            <p>Optically pumped magnetometers sit in a wearable helmet and record the tiny magnetic fields of brain activity without a bulky cryogenic scanner. Diamond sensors probe single cells and molecules.</p>
            <dl><div><dt>How</dt><dd>Spin-based magnetometry.</dd></div><div><dt>Reality check</dt><dd>Wearable magnetoencephalography is in research and early clinical use. MRI is built on nuclear spins but is run classically.</dd></div></dl></article>
          <article className="tilt"><div className="row1"><h3>Telecom and the quantum internet</h3><span className="tag early">Early commercial</span></div>
            <p>Quantum links will secure key exchange and eventually connect quantum computers into larger distributed machines. Repeaters with quantum memories are the key missing component.</p>
            <dl><div><dt>How</dt><dd>Entangled photons over fibre or satellite, entanglement swapping and teleportation.</dd></div><div><dt>Reality check</dt><dd>QKD links are deployed. A full entanglement-based internet is a research programme.</dd></div></dl></article>
        </div>
      </div>
    </section>
  );
}
