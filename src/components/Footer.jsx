export default function Footer() {
  return (
    <div className="qh-b"><footer>
        <div className="wrap">
          <nav aria-label="Footer" style={{display:'flex',gap:'18px',flexWrap:'wrap',marginBottom:'12px'}}><a href="/guides/">Guides</a><a href="/about/">About</a><a href="/privacy/">Privacy Policy</a><a href="/contact/">Contact</a></nav>
          <div>Quantum Hub is a self-study guide. Hardware, SDKs and standards change quickly, so check current documentation before you start a project.</div>
          <div className="src">
            <span>Sources used for the roadmap and standards dates:</span>
            <a href="https://thequantuminsider.com/2025/06/10/ibm-offers-roadmap-toward-large-scale-fault-tolerant-quantum-computer/" target="_blank" rel="noopener">IBM fault-tolerant roadmap (The Quantum Insider, June 2025)</a>
            <a href="https://quantumcomputingreport.com/nist-releases-final-ir-8547-establishing-definitive-post-quantum-cryptography-transition-timeline-and-deprecation-schedules/" target="_blank" rel="noopener">NIST IR 8547 transition timeline (Quantum Computing Report)</a>
            <a href="https://newsroom.ibm.com/2026-07-30-ibm-and-the-university-of-chicago-demonstrate-quantum-advantage,-establishing-trusted-quantum-computation-on-logical-circuits" target="_blank" rel="noopener">IBM and University of Chicago announcement, 30 July 2026 (company press release)</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
