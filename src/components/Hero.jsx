export default function Hero() {
  return (
    <div className="hero">
      <canvas id="hero3d" aria-label="Animated 3D scene: a Bloch sphere with a precessing qubit, orbiting electrons and an entangled pair" role="img" />
      <div className="wrap">
        <div className="hero-copy">
          <span className="eyebrow">Quantum technology hub</span>
          <h1>Learn quantum computing: from the first qubit to the <em>fault-tolerant</em> future.</h1>
          <p className="lead">What quantum technology is, why it exists, where it already works, what it may do next, and how to learn it from basic to advanced. Every concept has a long explanation and a live simulation you can break and rebuild.</p>
          <div className="cta">
            <a className="btn" href="#overview">Start with the basics</a>
            <a className="btn ghost" href="#lab">Jump to the concept lab</a>
            <a className="btn ghost" href="#universe">Enter the 3D course</a>
          </div>
          <div className="hero-stats" id="hero-stats" />
          <p className="hint">Drag the scene to rotate it.</p>
        </div>
      </div>
    </div>
  );
}
