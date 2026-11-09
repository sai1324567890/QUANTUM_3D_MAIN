// Each guide becomes a real page at /guides/<slug>/ (good for Google + AdSense).
// To add a guide: copy one object, change slug/title/description/body, run `npm run build`.
// `body` is a function so it can use ctx.book(title, author) for affiliate-aware book links.

export const guides = [
  {
    slug: 'what-is-a-qubit',
    title: 'What Is a Qubit? A Plain-English Beginner’s Guide',
    description:
      'What a qubit is, how it differs from a classical bit, what superposition and entanglement really mean, and how the Bloch sphere helps you picture it.',
    keywords: 'what is a qubit, qubit explained, superposition, entanglement, Bloch sphere, quantum bit',
    published: '2026-11-09',
    minutes: 6,
    body: () => `
<p class="lead">A qubit is the basic unit of quantum information. A normal bit is either 0 or 1; a qubit is described by two numbers called amplitudes. That one change is the source of everything quantum computers can do, and of most of what people get wrong about them.</p>

<h2>Bit versus qubit</h2>
<p>A classical bit is always in exactly one of two states. A qubit’s state is written <b>|ψ⟩ = α|0⟩ + β|1⟩</b>, where α and β are complex numbers and |α|² + |β|² = 1. When you measure the qubit, you get 0 with probability |α|² and 1 with probability |β|².</p>

<h2>Superposition, without the myths</h2>
<p>You will often read that a qubit is “both 0 and 1 at the same time.” That is a loose summary. More precisely, before measurement the qubit is in one definite quantum state that is a weighted combination of 0 and 1. Measuring it always returns one ordinary bit, and the state then matches that result.</p>
<p>Quantum algorithms do not “try every answer at once.” They arrange the amplitudes so that wrong answers cancel each other out and right answers reinforce, a process called interference.</p>

<h2>The Bloch sphere: a picture of one qubit</h2>
<p>Any pure single-qubit state can be drawn as a point on a sphere: <b>|ψ⟩ = cos(θ/2)|0⟩ + e<sup>iφ</sup> sin(θ/2)|1⟩</b>. The north pole is |0⟩, the south pole is |1⟩, and points on the equator are equal superpositions such as (|0⟩ + |1⟩)/√2. Gates are simply rotations of that point. You can drag a live Bloch sphere in the <a href="/#lab">interactive concept lab</a>.</p>

<h2>The gates that change a qubit</h2>
<ul>
  <li><b>X gate:</b> swaps |0⟩ and |1⟩, the quantum version of NOT.</li>
  <li><b>Hadamard (H):</b> turns |0⟩ into an equal superposition. Most algorithms begin with it.</li>
  <li><b>Z gate:</b> flips the sign (the phase) of the |1⟩ amplitude. Phase cannot be seen by measuring directly, but it decides how amplitudes interfere later.</li>
  <li><b>CNOT:</b> a two-qubit gate that flips the target qubit when the control qubit is 1. It is how qubits become entangled.</li>
</ul>

<h2>Entanglement</h2>
<p>Apply H to one qubit, then a CNOT with that qubit as the control, and you get the Bell state (|00⟩ + |11⟩)/√2. Measuring the two qubits gives perfectly correlated results, yet neither qubit has a complete state of its own. Entanglement does <b>not</b> let you send messages faster than light.</p>

<h2>How real qubits are built</h2>
<p>Qubits are made from superconducting circuits, trapped ions, neutral atoms, photons, electron spins in silicon, and other systems. Each trades off speed, error rate and how easily it scales. The <a href="/#hardware">hardware section</a> compares eight approaches.</p>

<h2>Why qubits are fragile</h2>
<p>Qubits lose their quantum behaviour when they interact with their surroundings (decoherence), and quantum gates are never perfect. That is why quantum error correction, which spreads one logical qubit across many physical qubits, is the central engineering challenge of the field.</p>

<h2>Where to go next</h2>
<p>Try the <a href="/#lab">simulations</a> to see a qubit rotate in real time, then follow the <a href="/guides/how-to-learn-quantum-computing/">free learning roadmap</a>.</p>
`,
  },

  {
    slug: 'how-to-learn-quantum-computing',
    title: 'How to Learn Quantum Computing: A Free Roadmap for Beginners',
    description:
      'A step-by-step plan to learn quantum computing from scratch: the maths you need, which SDK to pick, free courses, and projects to build at each stage.',
    keywords: 'how to learn quantum computing, quantum computing for beginners, quantum computing roadmap, learn qiskit, free quantum course',
    published: '2026-11-09',
    minutes: 7,
    body: () => `
<p class="lead">You do not need a physics degree to start learning quantum computing. You need some linear algebra, basic Python, and a sensible order of topics. This roadmap follows the order working quantum engineers actually learn things in.</p>

<h2>Before you start: the prerequisites</h2>
<ul>
  <li><b>Complex numbers and vectors:</b> adding, multiplying, and what a complex amplitude is.</li>
  <li><b>Matrices:</b> multiplying a matrix by a vector. Quantum gates are matrices.</li>
  <li><b>Basic probability:</b> measurement outcomes are probabilistic.</li>
  <li><b>Python:</b> every major quantum SDK is Python-based.</li>
</ul>
<p>If linear algebra feels rusty, a few weeks of review is enough. You do not need to master it first. Learn it alongside the quantum material.</p>

<h2>Stage 1: Core ideas (1–2 weeks)</h2>
<p>Learn what a qubit is, what superposition and measurement mean, and how the Bloch sphere represents one qubit. Read <a href="/guides/what-is-a-qubit/">What is a qubit?</a> and play with the <a href="/#lab">interactive lab</a> until the pictures make sense.</p>

<h2>Stage 2: Gates and circuits (2–3 weeks)</h2>
<p>Learn the single-qubit gates (X, Y, Z, H, S, T) and the two-qubit CNOT. Build a Bell state by hand. Learn how circuits are drawn and how to read them. The <a href="/#path">five-level learning path</a> on the home page tracks your progress.</p>

<h2>Stage 3: Pick one SDK and run real code (2–4 weeks)</h2>
<p>Pick one framework and stay with it for a while, because the concepts transfer between all of them:</p>
<ul>
  <li><a href="https://www.ibm.com/quantum/qiskit" target="_blank" rel="noopener">Qiskit</a> (IBM) has the largest community and learning material.</li>
  <li><a href="https://quantumai.google/cirq" target="_blank" rel="noopener">Cirq</a> (Google) is good for noisy-device circuits.</li>
  <li><a href="https://pennylane.ai" target="_blank" rel="noopener">PennyLane</a> is strong for quantum machine learning.</li>
</ul>
<p>Start on a simulator, then run a small circuit on real hardware. Hardware access, free tiers and limits change often, so check your provider’s current terms.</p>

<h2>Stage 4: Algorithms (1–2 months)</h2>
<p>Work through the classic algorithms in order of difficulty: Deutsch–Jozsa, Bernstein–Vazirani, Grover’s search, the quantum Fourier transform, phase estimation, and Shor’s factoring. Then look at variational algorithms such as VQE and QAOA, which are designed for today’s noisy machines.</p>

<h2>Stage 5: Noise, error correction and hardware</h2>
<p>Learn why real devices make errors and how error-correcting codes (such as the surface code) protect information. This is where the field is moving fastest, so lean on current papers and documentation.</p>

<h2>Best free resources</h2>
<ul>
  <li><a href="https://quantum.cloud.ibm.com/learning/en/courses" target="_blank" rel="noopener">IBM Quantum Learning</a>: courses built around Qiskit.</li>
  <li><a href="https://learn.microsoft.com/en-us/training/paths/quantum-computing-fundamentals/" target="_blank" rel="noopener">Microsoft Learn</a>: a quantum computing fundamentals path.</li>
  <li><a href="https://quantumai.google/" target="_blank" rel="noopener">Google Quantum AI</a>: education and research material.</li>
</ul>
<p>For book recommendations see <a href="/guides/best-quantum-computing-books-and-courses/">best quantum computing books and courses</a>.</p>

<h2>Projects that prove you can do it</h2>
<p>Learning sticks when you build. Good beginner projects: implement a Bell-state demo, write a tiny state-vector simulator in Python, and build a Grover search for a small puzzle. The <a href="/#projects">projects section</a> lists ideas for every level, and the <a href="/#practice">practice quiz</a> checks your understanding before you move up.</p>
`,
  },

  {
    slug: 'best-quantum-computing-books-and-courses',
    title: 'Best Quantum Computing Books and Free Courses for Beginners',
    description:
      'A curated list of the best quantum computing books and free online courses, with who each one is for and which to read first.',
    keywords: 'best quantum computing books, quantum computing books for beginners, free quantum computing courses, Nielsen and Chuang, qiskit course',
    published: '2026-11-09',
    minutes: 6,
    body: (ctx) => `
<p class="lead">The right book depends on your background. Below are well-regarded options, grouped by who they suit, plus free courses that cost nothing. Editions and availability change, so check the current listing before you buy.</p>
${ctx.affiliateNote}

<h2>Books for complete beginners</h2>
<ul>
  <li>${ctx.book('Quantum Computing for Computer Scientists', 'Yanofsky Mannucci')} (Yanofsky and Mannucci): builds the maths from the ground up, aimed at readers with a computer-science background.</li>
  <li>${ctx.book('Programming Quantum Computers', 'Johnston Harrigan Gimeno-Segovia')} (Johnston, Harrigan, Gimeno-Segovia): a hands-on introduction that teaches through code and circuits.</li>
</ul>

<h2>Books for the next step</h2>
<ul>
  <li>${ctx.book('Quantum Computer Science: An Introduction', 'N David Mermin')} (N. David Mermin): a short, clear route in for readers comfortable with maths.</li>
  <li>${ctx.book('Quantum Computing Since Democritus', 'Scott Aaronson')} (Scott Aaronson): complexity and foundations, written in a conversational style. Best after you know the basics.</li>
</ul>

<h2>The standard reference</h2>
<ul>
  <li>${ctx.book('Quantum Computation and Quantum Information', 'Nielsen Chuang')} (Nielsen and Chuang): the standard graduate textbook. It is best used alongside a course rather than read cover to cover as your first book.</li>
</ul>

<h2>Free reading</h2>
<ul>
  <li><a href="https://www.theory.caltech.edu/~preskill/ph229/" target="_blank" rel="noopener">John Preskill’s lecture notes</a> (Caltech): free, with a strong treatment of error correction. Advanced.</li>
  <li>Your chosen SDK’s own tutorials, which are kept in step with its current API.</li>
</ul>

<h2>Free online courses</h2>
<ul>
  <li><a href="https://quantum.cloud.ibm.com/learning/en/courses" target="_blank" rel="noopener">IBM Quantum Learning</a>: self-paced courses built around Qiskit.</li>
  <li><a href="https://learn.microsoft.com/en-us/training/paths/quantum-computing-fundamentals/" target="_blank" rel="noopener">Microsoft Learn: Quantum computing fundamentals</a>.</li>
  <li><a href="https://quantumai.google/" target="_blank" rel="noopener">Google Quantum AI</a>: education resources and research.</li>
</ul>

<h2>Which should you start with?</h2>
<p>If you are new, begin with a free course and an interactive tool, then add one beginner book. Our <a href="/guides/how-to-learn-quantum-computing/">free roadmap</a> shows where each resource fits, and the <a href="/#resources">resources section</a> lists the main software tools.</p>
`,
  },
];
