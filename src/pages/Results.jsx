import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../App';
import { getReadinessLabel, getImprovementSuggestions, getWeakTopics, formatTime } from '../utils/adaptive';

export default function Results() {
  const { userStats } = useContext(AppContext);
  const result = userStats.lastResult;

  if (!result) return (
    <div className="page">
      <div className="container" style={{ textAlign: 'center', paddingTop: '120px' }}>
        <div style={{ fontSize: '4rem', marginBottom: '20px' }}>📊</div>
        <h2 style={{ fontFamily: 'var(--font-main)', marginBottom: '12px', color: 'var(--text-secondary)' }}>No Results Yet</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '32px' }}>Complete an exam to see your score and analysis here.</p>
        <Link to="/exam" className="btn btn-primary">🚀 Start Exam</Link>
      </div>
    </div>
  );

  const { score, correct, total, config, answers, timeUsed } = result;
  const readiness = getReadinessLabel(score);
  const weakTopics = getWeakTopics(answers);
  const suggestions = getImprovementSuggestions(weakTopics, config?.id);
  const incorrect = total - correct;
  const letters = ['A', 'B', 'C', 'D'];

  return (
    <div className="page">
      <div className="container" style={{ maxWidth: '860px', paddingBottom: '80px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ fontSize: '4rem', marginBottom: '16px' }}>{readiness.emoji}</div>
          <h1 className="display-font" style={{ fontSize: '2.5rem', color: readiness.color, marginBottom: '8px' }}>
            {score}%
          </h1>
          <div style={{ fontSize: '1.2rem', color: readiness.color, fontFamily: 'var(--font-main)', fontWeight: 700, marginBottom: '8px' }}>
            {readiness.label}
          </div>
          <p style={{ color: 'var(--text-secondary)' }}>{config?.label || 'Exam'} Complete</p>
        </div>

        {/* Score Summary */}
        <div className="grid-4" style={{ marginBottom: '24px' }}>
          {[
            { label: 'Score', value: `${score}%`, color: readiness.color },
            { label: 'Correct', value: correct, color: 'var(--success)' },
            { label: 'Wrong', value: incorrect, color: 'var(--red)' },
            { label: 'Time Used', value: formatTime(timeUsed || 0), color: 'var(--cyan)' },
          ].map(s => (
            <div key={s.label} className="stat-card" style={{ textAlign: 'center' }}>
              <div className="stat-value" style={{ color: s.color }}>{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Score Bar */}
        <div className="card" style={{ padding: '28px', marginBottom: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
            <span style={{ fontFamily: 'var(--font-main)', fontWeight: 600 }}>Overall Performance</span>
            <span style={{ color: readiness.color, fontFamily: 'var(--font-display)' }}>{score}%</span>
          </div>
          <div className="progress-bar" style={{ height: '12px' }}>
            <div className="progress-fill" style={{ width: `${score}%`, background: `linear-gradient(90deg, ${readiness.color}, ${readiness.color}88)` }} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            <span>0%</span><span>Pass: 50%</span><span>100%</span>
          </div>
        </div>

        <div className="grid-2" style={{ marginBottom: '24px' }}>
          {/* Weak Topics */}
          <div className="card" style={{ padding: '24px' }}>
            <h3 style={{ fontFamily: 'var(--font-main)', marginBottom: '16px' }}>⚠️ Topics to Improve</h3>
            {weakTopics.length === 0 ? (
              <p style={{ color: 'var(--success)', fontSize: '0.9rem' }}>✅ Great job on all topics!</p>
            ) : weakTopics.map(t => (
              <div key={t.topic} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', alignItems: 'center' }}>
                <span style={{ fontSize: '0.88rem' }}>{t.topic}</span>
                <span className={`badge ${t.accuracy < 40 ? 'badge-hard' : 'badge-medium'}`}>{t.accuracy}%</span>
              </div>
            ))}
          </div>

          {/* Suggestions */}
          <div className="card" style={{ padding: '24px' }}>
            <h3 style={{ fontFamily: 'var(--font-main)', marginBottom: '16px' }}>💡 Action Plan</h3>
            {suggestions.map((s, i) => (
              <p key={i} style={{ fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '10px' }}>{s}</p>
            ))}
          </div>
        </div>

        {/* Answer Review */}
        <div className="card" style={{ padding: '28px', marginBottom: '28px' }}>
          <h3 style={{ fontFamily: 'var(--font-main)', marginBottom: '20px' }}>📋 Answer Review</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {answers.map((ans, idx) => (
              <div key={ans.questionId || idx} style={{
                padding: '16px', borderRadius: '10px',
                background: ans.correct ? 'var(--success-dim)' : 'var(--red-dim)',
                border: `1px solid ${ans.correct ? 'rgba(0,255,136,0.2)' : 'rgba(230,57,70,0.2)'}`,
              }}>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '6px' }}>
                  <span>{ans.correct ? '✅' : '❌'}</span>
                  <span style={{ fontFamily: 'var(--font-main)', fontWeight: 600, fontSize: '0.9rem' }}>Q{idx + 1} — {ans.topic}</span>
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  Your answer: <strong style={{ color: ans.correct ? 'var(--success)' : 'var(--red)' }}>{ans.selected || '(skipped)'}</strong>
                  {!ans.correct && ans.correctAnswer && (
                    <span style={{ marginLeft: '10px', color: 'var(--success)' }}>✓ Correct: {ans.correctAnswer}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <Link to="/exam" className="btn btn-primary">🔁 Retry Exam</Link>
          <Link to="/issb" className="btn btn-gold">🧠 Practice ISSB</Link>
          <Link to="/dashboard" className="btn btn-outline">📊 View Dashboard</Link>
        </div>
      </div>
    </div>
  );
}
