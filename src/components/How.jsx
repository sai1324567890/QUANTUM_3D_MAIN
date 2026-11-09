export default function How() {
  return (
    <section id="how">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">How it is used</span>
          <h2>A quantum computer is an accelerator inside a classical workflow</h2>
          <p>Nobody runs a whole application on a quantum chip. A classical program prepares the problem, calls the quantum processor for the one step it does well, and processes the answer.</p>
        </div>
        <div className="flow">
          <div><b>Find the structure</b><span>Decide whether the problem has the hidden structure a quantum algorithm exploits, such as periodicity, a Hamiltonian, or a searchable oracle.</span></div>
          <div><b>Encode</b><span>Map the problem onto qubits: a molecule becomes a Hamiltonian of Pauli operators, a search becomes an oracle, a graph becomes a cost function.</span></div>
          <div><b>Compile</b><span>Break the circuit into the device’s native gates, route it across the qubit connectivity, and shorten it as much as possible.</span></div>
          <div><b>Run in shots</b><span>Execute the circuit thousands of times. Each shot ends in a random measurement, and the distribution holds the answer.</span></div>
          <div><b>Mitigate or correct</b><span>Reduce the damage from noise with error mitigation today, and with error-correcting codes on future machines.</span></div>
          <div><b>Post-process</b><span>Classical code turns the counts into the final result, for example continued fractions in Shor’s algorithm or an optimiser update in VQE.</span></div>
        </div>
        <div className="twocol" style={{marginTop: 44}}>
          <div>
            <h3 className="sub" style={{marginTop: 0}}>The hybrid stack</h3>
            <div className="stack" aria-label="Layers of a quantum computing stack, top to bottom">
              <div><b>Application</b>Chemistry, finance or logistics code in Python.</div>
              <div><b>Algorithm library</b>VQE, QAOA, phase estimation, amplitude estimation.</div>
              <div><b>SDK and compiler</b>Qiskit, Cirq, PennyLane, Braket, Q#.</div>
              <div><b>Classical control</b>FPGAs and microwave or laser electronics, real-time decoders.</div>
              <div><b>Quantum control layer</b>Pulses, calibration, readout.</div>
              <div><b>Quantum processor</b>Qubits in a cryostat, a vacuum chamber or a photonic chip.</div>
            </div>
          </div>
          <div className="prose">
            <h3 className="sub" style={{marginTop: 0}}>How you can use one today</h3>
            <p>Several vendors offer cloud access to real quantum processors, including IBM Quantum, Amazon Braket, Azure Quantum and the cloud services of ion-trap, neutral-atom and photonic companies. Free tiers or credits exist on some of them, so check current terms. All the major SDKs also ship simulators that run on a laptop.</p>
            <p>A sensible path is to write circuits for 2 to 5 qubits, run them on a simulator first, then run the same circuit on real hardware and compare the two histograms. The difference between them is a direct picture of noise.</p>
            <p>Quantum sensors and QKD systems are bought as instruments. They plug into existing navigation, imaging or network equipment and need no quantum programming.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
