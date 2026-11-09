export default function Path() {
  return (
    <section id="path">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">Learning path</span>
          <h2>Five levels, in the order a working quantum engineer learns them</h2>
          <p>Tick topics off as you finish them. Progress is saved in this browser only.</p>
        </div>
        <div className="progress"><span>Overall progress</span><div className="bar"><i id="overall-bar" /></div><strong id="overall-txt" /></div>
        <div className="tabs" id="tabs" role="tablist" aria-label="Levels" />
        <div className="panel" id="panel" role="tabpanel" />
        <h3 className="sub">The gates you will use in every circuit</h3>
        <div className="gtable" id="gtable" />
        <p className="gnote">CNOT rows and columns are ordered |00⟩, |01⟩, |10⟩, |11⟩ with the control qubit written first. H, S and CNOT generate the Clifford group. Adding T makes the set universal.</p>
      </div>
    </section>
  );
}
