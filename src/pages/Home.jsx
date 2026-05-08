import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../App';

const branches = [
  { name: 'Bangladesh Army', emoji: '🪖', color: '#2d6a4f', desc: 'Land Forces — Ground combat & defence operations', key: 'army' },
  { name: 'Bangladesh Navy', emoji: '⚓', color: '#0a3d62', desc: 'Naval Forces — Maritime security & operations', key: 'navy' },
  { name: 'Bangladesh Air Force', emoji: '✈️', color: '#1a1a5e', desc: 'Air Forces — Aerial defence & strategic missions', key: 'airforce' },
];

const roadmapSteps = [
  { step: 1, title: 'Preliminary', icon: '📋', desc: 'Basic aptitude & viva', color: '#00cfff' },
  { step: 2, title: 'Written Exam', icon: '📝', desc: 'IQ · Math · English · GK', color: '#c9a227' },
  { step: 3, title: 'ISSB', icon: '🧠', desc: 'WAT · TAT · SCT · GD · Command Task', color: '#40916c' },
  { step: 4, title: 'Medical', icon: '🏥', desc: 'Physical & medical fitness', color: '#e63946' },
  { step: 5, title: 'Final Board', icon: '🏆', desc: 'Commissioning & selection', color: '#ffd700' },
];

export default function Home() {
  const { setUserStats } = useContext(AppContext);

  const selectBranch = (branch) => {
    setUserStats(prev => ({ ...prev, branch }));
  };

  return (
    <div className="page">
      {/* HERO */}
      <section style={{ padding: '60px 0 80px', textAlign: 'center' }}>
        <div className="container">
          <div className="animate-float" style={{ fontSize: '5rem', marginBottom: '24px' }}>🛡️</div>
          <div style={{ marginBottom: '16px' }}>
            <span className="badge badge-easy" style={{ fontSize: '0.8rem', letterSpacing: '2px' }}>
              DEFENCE EXAM PREP SYSTEM
            </span>
          </div>
          <h1 className="display-font glow-cyan"
            style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', marginBottom: '16px', lineHeight: 1.1 }}>
            BD DEFENCE MOCK
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.15rem', maxWidth: '560px', margin: '0 auto 40px', lineHeight: 1.7 }}>
            Your complete AI-powered preparation system for <strong style={{ color: 'var(--gold)' }}>Bangladesh Armed Forces</strong> — Preliminary, Written, ISSB & beyond.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/exam" className="btn btn-primary" style={{ fontSize: '1.05rem' }}>
              🚀 Start Exam
            </Link>
            <Link to="/issb" className="btn btn-gold">
              🧠 ISSB Suite
            </Link>
            <Link to="/dashboard" className="btn btn-outline">
              📊 Dashboard
            </Link>
          </div>
        </div>
      </section>

      {/* BRANCH SELECTION */}
      <section style={{ padding: '0 0 80px' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '8px', fontSize: '1.6rem' }}>
            Choose Your <span className="glow-gold">Branch</span>
          </h2>
          <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '40px' }}>
            Select the armed forces branch you are preparing for
          </p>
          <div className="grid-3">
            {branches.map((b) => (
              <button key={b.key} onClick={() => selectBranch(b.key)}
                style={{
                  background: `linear-gradient(135deg, ${b.color}22 0%, transparent 100%)`,
                  border: `1px solid ${b.color}55`,
                  borderRadius: '16px', padding: '32px 24px',
                  cursor: 'pointer', color: 'var(--text-primary)',
                  textAlign: 'center', transition: 'all 0.3s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = b.color; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = `${b.color}55`; e.currentTarget.style.transform = 'none'; }}
              >
                <div style={{ fontSize: '3rem', marginBottom: '16px' }}>{b.emoji}</div>
                <h3 style={{ fontFamily: 'var(--font-main)', fontSize: '1.2rem', marginBottom: '8px' }}>{b.name}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{b.desc}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ROADMAP */}
      <section style={{ padding: '0 0 80px' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '8px', fontSize: '1.6rem' }}>
            The <span className="glow-cyan">Defence Roadmap</span>
          </h2>
          <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '48px' }}>
            Your journey from candidate to commissioned officer
          </p>
          <div style={{ display: 'flex', gap: '0', overflowX: 'auto', paddingBottom: '8px', alignItems: 'stretch' }}>
            {roadmapSteps.map((s, i) => (
              <div key={s.step} style={{ flex: '1 0 180px', display: 'flex', alignItems: 'stretch' }}>
                <div className="card" style={{ flex: 1, padding: '28px 20px', textAlign: 'center', borderColor: `${s.color}33` }}>
                  <div style={{
                    width: '48px', height: '48px', borderRadius: '50%',
                    background: `${s.color}22`, border: `2px solid ${s.color}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.5rem', margin: '0 auto 16px',
                  }}>{s.icon}</div>
                  <div style={{ color: s.color, fontFamily: 'var(--font-display)', fontSize: '0.7rem', marginBottom: '6px' }}>
                    STAGE {s.step}
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-main)', fontSize: '1.1rem', marginBottom: '8px' }}>{s.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.82rem' }}>{s.desc}</p>
                </div>
                {i < roadmapSteps.length - 1 && (
                  <div style={{ display: 'flex', alignItems: 'center', padding: '0 4px', color: 'var(--text-muted)', flexShrink: 0 }}>▶</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section style={{ padding: '0 0 80px' }}>
        <div className="container">
          <div className="grid-4">
            {[
              { icon: '🎯', title: 'Adaptive AI', desc: 'Questions adjust to your skill level automatically' },
              { icon: '📊', title: 'Live Analytics', desc: 'Track accuracy, speed & weak topics in real-time' },
              { icon: '🧠', title: 'Full ISSB Suite', desc: 'WAT, TAT, SCT, GD & Command Task simulations' },
              { icon: '🏆', title: 'ISSB Score', desc: 'Get your ISSB Readiness score from 0–100' },
            ].map((f) => (
              <div key={f.title} className="card" style={{ padding: '24px', textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '12px' }}>{f.icon}</div>
                <h4 style={{ fontFamily: 'var(--font-main)', fontSize: '1.05rem', marginBottom: '6px', color: 'var(--cyan)' }}>{f.title}</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
