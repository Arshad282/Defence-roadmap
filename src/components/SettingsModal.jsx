import { useState } from 'react';
import { getApiKey, setApiKey, clearApiKey } from '../utils/gemini';

export default function SettingsModal({ onClose }) {
  const [key, setKey] = useState(getApiKey());
  const [saved, setSaved] = useState(false);
  const [show, setShow] = useState(false);

  const handleSave = () => {
    setApiKey(key.trim());
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleClear = () => {
    clearApiKey();
    setKey('');
  };

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 999,
      background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(6px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '24px',
    }} onClick={onClose}>
      <div onClick={e => e.stopPropagation()} style={{
        background: '#ffffff', border: '1px solid rgba(0,0,0,0.10)',
        borderRadius: '20px', padding: '40px', maxWidth: '520px', width: '100%',
        boxShadow: '0 24px 64px rgba(0,0,0,0.6)',
      }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px' }}>
          <div>
            <h2 style={{ fontFamily: 'var(--font-main)', fontSize: '1.5rem', marginBottom: '4px' }}>
              ⚙️ Settings
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Configure AI question generation</p>
          </div>
          <button onClick={onClose} style={{
            background: 'none', border: '1px solid var(--border)', borderRadius: '8px',
            color: 'var(--text-secondary)', cursor: 'pointer', padding: '8px 12px', fontSize: '1rem',
          }}>✕</button>
        </div>

        {/* AI Status Banner */}
        <div style={{
          padding: '14px 18px', borderRadius: '12px', marginBottom: '24px',
          background: getApiKey() ? 'rgba(0,255,136,0.08)' : 'rgba(255,215,0,0.08)',
          border: `1px solid ${getApiKey() ? 'rgba(0,255,136,0.2)' : 'rgba(255,215,0,0.2)'}`,
          display: 'flex', alignItems: 'center', gap: '12px',
        }}>
          <span style={{ fontSize: '1.4rem' }}>{getApiKey() ? '🟢' : '🟡'}</span>
          <div>
            <div style={{ fontFamily: 'var(--font-main)', fontWeight: 600, fontSize: '0.95rem', color: getApiKey() ? 'var(--success)' : 'var(--warning)' }}>
              {getApiKey() ? 'AI Generation: Active' : 'AI Generation: Inactive'}
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
              {getApiKey() ? 'Using Gemini AI + Static bank fallback' : 'Using static question bank only'}
            </div>
          </div>
        </div>

        {/* API Key Input */}
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', fontFamily: 'var(--font-main)', fontWeight: 600, marginBottom: '8px', fontSize: '0.9rem' }}>
            🔑 Google Gemini API Key
          </label>
          <div style={{ position: 'relative' }}>
            <input
              type={show ? 'text' : 'password'}
              value={key}
              onChange={e => setKey(e.target.value)}
              placeholder="AIza..."
              style={{
                width: '100%', padding: '14px 48px 14px 16px',
                borderRadius: '10px',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid var(--border)',
                color: 'var(--text-primary)', fontFamily: 'var(--font-body)',
                fontSize: '0.95rem', outline: 'none',
              }}
            />
            <button onClick={() => setShow(s => !s)} style={{
              position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)',
              background: 'none', border: 'none', cursor: 'pointer',
              color: 'var(--text-secondary)', fontSize: '1rem',
            }}>{show ? '🙈' : '👁️'}</button>
          </div>
          <p style={{ marginTop: '8px', fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
            Get your free key at{' '}
            <a href="https://aistudio.google.com/apikey" target="_blank" rel="noreferrer"
              style={{ color: 'var(--cyan)', textDecoration: 'none' }}>
              aistudio.google.com/apikey
            </a>. Stored locally in your browser only.
          </p>
        </div>

        {/* How it works */}
        <div style={{ padding: '16px', borderRadius: '10px', background: 'rgba(0,207,255,0.04)', border: '1px solid var(--border)', marginBottom: '24px' }}>
          <div style={{ fontFamily: 'var(--font-main)', fontWeight: 700, fontSize: '0.85rem', color: 'var(--cyan)', marginBottom: '10px' }}>
            🤖 HOW IT WORKS
          </div>
          {[
            '✅ With API key → Gemini AI generates fresh questions every exam',
            '🔄 If AI fails → Falls back to 116+ static questions instantly',
            '🔒 Key saved in browser — never sent to any server',
          ].map(t => (
            <div key={t} style={{ fontSize: '0.83rem', color: 'var(--text-secondary)', marginBottom: '6px' }}>{t}</div>
          ))}
        </div>

        {/* Buttons */}
        <div style={{ display: 'flex', gap: '12px' }}>
          <button className="btn btn-primary" style={{ flex: 1, justifyContent: 'center' }} onClick={handleSave}>
            {saved ? '✅ Saved!' : '💾 Save Key'}
          </button>
          {getApiKey() && (
            <button className="btn btn-danger" style={{ padding: '12px 20px' }} onClick={handleClear}>
              🗑️ Remove
            </button>
          )}
          <button className="btn btn-outline" style={{ padding: '12px 20px' }} onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
