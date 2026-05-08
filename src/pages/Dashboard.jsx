import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../App';
import { calculateISSBReadiness, getWeakTopics, getReadinessLabel, getBranchRecommendation, getImprovementSuggestions } from '../utils/adaptive';

const subjectConfig = [
  { key: 'iq', label: 'IQ / Reasoning', icon: '🧠', color: '#00cfff' },
  { key: 'math', label: 'Mathematics', icon: '➗', color: '#c9a227' },
  { key: 'english', label: 'English', icon: '🔤', color: '#40916c' },
  { key: 'gk', label: 'General Knowledge', icon: '🌍', color: '#e63946' },
  { key: 'issb', label: 'ISSB', icon: '⭐', color: '#ffd700' },
];

export default function Dashboard() {
  const { userStats } = useContext(AppContext);
  const { scores, history, totalExams, branch } = userStats;

  const readiness = calculateISSBReadiness(scores);
  const weakTopics = getWeakTopics(history);
  const readinessInfo = getReadinessLabel(readiness);
  const suggestions = getImprovementSuggestions(weakTopics, 'all');

  const hasData = totalExams > 0 || Object.values(scores).some(s => s !== null);

  const rec = scores.iq && scores.math && scores.english && scores.gk
    ? getBranchRecommendation(scores.iq, scores.math, scores.english, scores.gk)
    : null;

  return (
    <div className="page">
      <div className="container" style={{ paddingBottom: '80px' }}>
        {/* Header */}
        <div style={{ marginBottom: '40px' }}>
          <div className="badge badge-easy" style={{ marginBottom: '12px', letterSpacing: '2px' }}>COMMAND CENTER</div>
          <h1 style={{ fontSize: '2.2rem', marginBottom: '8px' }}>
            Your <span className="glow-cyan">Dashboard</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)' }}>
            Track your preparation progress and ISSB readiness
          </p>
        </div>

        {!hasData ? (
          <div className="card" style={{ padding: '60px', textAlign: 'center' }}>
            <div style={{ fontSize: '4rem', marginBottom: '20px' }}>📊</div>
            <h2 style={{ marginBottom: '12px', color: 'var(--text-secondary)' }}>No data yet</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '32px' }}>
              Complete an exam to see your analytics here
            </p>
            <Link to="/exam" className="btn btn-primary">🚀 Start Your First Exam</Link>
          </div>
        ) : (
          <>
            {/* ISSB Readiness Gauge */}
            <div className="card" style={{ padding: '40px', marginBottom: '24px', textAlign: 'center', borderColor: readinessInfo.color + '44' }}>
              <div style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-main)', letterSpacing: '2px', fontSize: '0.85rem', marginBottom: '16px' }}>
                ISSB READINESS SCORE
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '5rem', fontWeight: 900, color: readinessInfo.color, lineHeight: 1, marginBottom: '8px' }}>
                {readiness}
              </div>
              <div style={{ fontSize: '1.5rem', marginBottom: '4px' }}>{readinessInfo.emoji} {readinessInfo.label}</div>
              <div style={{ maxWidth: '400px', margin: '24px auto 0' }}>
                <div className="progress-bar" style={{ height: '12px' }}>
                  <div className="progress-fill" style={{ width: `${readiness}%`, background: `linear-gradient(90deg, ${readinessInfo.color}, #fff)` }} />
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid-4" style={{ marginBottom: '24px' }}>
              <div className="stat-card">
                <div className="stat-value glow-cyan">{totalExams}</div>
                <div className="stat-label">Exams Taken</div>
              </div>
              <div className="stat-card">
                <div className="stat-value" style={{ color: 'var(--gold)' }}>{history.length}</div>
                <div className="stat-label">Questions Answered</div>
              </div>
              <div className="stat-card">
                <div className="stat-value" style={{ color: 'var(--success)' }}>
                  {history.length ? Math.round((history.filter(h => h.correct).length / history.length) * 100) : 0}%
                </div>
                <div className="stat-label">Overall Accuracy</div>
              </div>
              <div className="stat-card">
                <div className="stat-value" style={{ color: '#ffd700' }}>{weakTopics.length}</div>
                <div className="stat-label">Weak Topics</div>
              </div>
            </div>

            {/* Subject Scores */}
            <div className="card" style={{ padding: '32px', marginBottom: '24px' }}>
              <h3 style={{ marginBottom: '24px', fontFamily: 'var(--font-main)' }}>📚 Subject Performance</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {subjectConfig.map(sub => (
                  <div key={sub.key}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                      <span style={{ fontFamily: 'var(--font-main)', fontWeight: 600 }}>{sub.icon} {sub.label}</span>
                      <span style={{ color: sub.color, fontFamily: 'var(--font-display)', fontWeight: 700 }}>
                        {scores[sub.key] !== null ? `${scores[sub.key]}%` : 'N/A'}
                      </span>
                    </div>
                    <div className="progress-bar" style={{ height: '8px' }}>
                      <div className="progress-fill" style={{ width: `${scores[sub.key] || 0}%`, background: `linear-gradient(90deg, ${sub.color}, ${sub.color}88)` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid-2">
              {/* Weak Topics */}
              <div className="card" style={{ padding: '28px' }}>
                <h3 style={{ marginBottom: '20px', fontFamily: 'var(--font-main)' }}>⚠️ Weak Topics</h3>
                {weakTopics.length === 0 ? (
                  <p style={{ color: 'var(--success)' }}>✅ No weak topics found!</p>
                ) : (
                  weakTopics.map(t => (
                    <div key={t.topic} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                      <span style={{ fontSize: '0.9rem' }}>{t.topic}</span>
                      <span className={`badge ${t.accuracy < 30 ? 'badge-hard' : 'badge-medium'}`}>{t.accuracy}%</span>
                    </div>
                  ))
                )}
              </div>

              {/* Suggestions */}
              <div className="card" style={{ padding: '28px' }}>
                <h3 style={{ marginBottom: '20px', fontFamily: 'var(--font-main)' }}>💡 Improvement Plan</h3>
                {suggestions.map((s, i) => (
                  <p key={i} style={{ marginBottom: '12px', fontSize: '0.9rem', lineHeight: 1.5 }}>{s}</p>
                ))}
                {rec && (
                  <div style={{ marginTop: '20px', padding: '16px', background: 'rgba(0,207,255,0.05)', borderRadius: '10px', border: '1px solid var(--border)' }}>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '4px' }}>RECOMMENDED BRANCH</div>
                    <div style={{ fontFamily: 'var(--font-main)', fontWeight: 700 }}>{rec.emoji} {rec.branch}</div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>{rec.reason}</div>
                  </div>
                )}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '16px', marginTop: '24px', flexWrap: 'wrap' }}>
              <Link to="/exam" className="btn btn-primary">🚀 Take New Exam</Link>
              <Link to="/issb" className="btn btn-gold">🧠 ISSB Practice</Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
