export default function Why() {
  return (
    <section id="why">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">Why it exists</span>
          <h2>The purpose: do what classical machines cannot do efficiently</h2>
          <p>Quantum technology is not built for speed in general. It is built for four specific jobs.</p>
        </div>
        <div className="twocol">
          <div className="prose">
            <p><b>1. Simulate nature.</b> In 1981 Richard Feynman pointed out that a classical computer needs exponentially more resources to track a quantum system, so the natural simulator is another quantum system. Molecules, catalysts, magnets and superconductors are the target.</p>
            <p><b>2. Solve certain mathematical problems with fewer steps.</b> Shor’s algorithm factors large integers in polynomial time. Grover’s algorithm searches unstructured data with a quadratic speedup. Other algorithms help with linear algebra, sampling and estimating averages.</p>
            <p><b>3. Measure more precisely.</b> A quantum probe such as an atom or a spin is extremely sensitive to magnetic fields, gravity, rotation and time. Quantum sensors already tell time for satellite navigation and image brain activity.</p>
            <p><b>4. Communicate with physics-backed security.</b> Measuring an unknown quantum state disturbs it, so eavesdropping on a quantum key exchange leaves a detectable trace. Quantum networks will also link quantum computers together.</p>
          </div>
          <div className="sim" id="sim-statespace" />
        </div>
        <h3 className="sub">Why the speedup is real for some problems</h3>
        <div className="twocol">
          <div className="prose">
            <p>The best known classical algorithm for factoring, the general number field sieve, takes time that grows faster than any polynomial in the number of digits. Shor’s algorithm grows roughly as the cube of the number of bits. The chart shows the shape of that gap on a log scale. It ignores constant factors and the large overhead of error correction, so read it as a statement about how the cost grows, not as a prediction of run time.</p>
            <p>For unstructured search the gain is smaller. Grover gives a square-root speedup, which turns 10¹² steps into 10⁶ queries but does not make hard problems easy.</p>
          </div>
          <div className="sim" id="sim-scaling" />
        </div>
      </div>
    </section>
  );
}
