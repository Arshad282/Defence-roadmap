import { useState, useEffect, useContext } from 'react';
import { AppContext } from '../App';
import { issb } from '../data/questions';
import { formatTime } from '../utils/adaptive';

const MODULES = [
  { id: 'wat', label: 'WAT', fullName: 'Word Association Test', icon: '💬', color: '#00cfff', desc: '60 words · 15 seconds each · Evaluate leadership & positivity' },
  { id: 'sct', label: 'SCT', fullName: 'Sentence Completion Test', icon: '✏️', color: '#c9a227', desc: 'Complete sentences · Reveal mindset & personality' },
  { id: 'tat', label: 'TAT', fullName: 'Thematic Apperception Test', icon: '🖼️', color: '#40916c', desc: 'Write stories from scenarios · Assess leadership thinking' },
  { id: 'gd', label: 'GD', fullName: 'Group Discussion', icon: '🗣️', color: '#e63946', desc: 'Current topics · Practice arguments & communication' },
  { id: 'ct', label: 'Command Task', fullName: 'Command Task', icon: '🎯', color: '#ffd700', desc: 'Real-life scenarios · Lead your team to solutions' },
];

// WAT MODULE
function WATModule({ onComplete }) {
  const [idx, setIdx] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);
  const [response, setResponse] = useState('');
  const [responses, setResponses] = useState([]);
  const [done, setDone] = useState(false);
  const words = issb.wat;

  useEffect(() => {
    if (done) return;
    if (timeLeft === 0) { nextWord(); return; }
    const t = setTimeout(() => setTimeLeft(t => t - 1), 1000);
    return () => clearTimeout(t);
  }, [timeLeft, done]);

  const nextWord = () => {
    const newResponses = [...responses, { word: words[idx], response }];
    if (idx + 1 >= words.length) { setDone(true); onComplete(newResponses); return; }
    setResponses(newResponses);
    setIdx(i => i + 1);
    setResponse('');
    setTimeLeft(15);
  };

  if (done) return <div style={{ textAlign: 'center', padding: '40px' }}><div style={{ fontSize: '3rem' }}>✅</div><p>WAT Complete!</p></div>;

  const progress = (idx / words.length) * 100;
  return (
    <div style={{ maxWidth: '560px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
        <span style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-main)' }}>Word {idx + 1} of {words.length}</span>
        <span className={`timer ${timeLeft <= 5 ? 'danger' : timeLeft <= 10 ? 'warning' : ''}`}>⏱ {timeLeft}s</span>
      </div>
      <div className="progress-bar" style={{ height: '6px', marginBottom: '32px' }}>
        <div className="progress-fill" style={{ width: `${progress}%` }} />
      </div>
      <div className="card" style={{ padding: '48px', textAlign: 'center', marginBottom: '24px' }}>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.8rem', color: 'var(--cyan)', fontWeight: 700 }}>
          {words[idx]}
        </div>
        <div style={{ color: 'var(--text-muted)', marginTop: '8px', fontSize: '0.85rem' }}>Write the first word that comes to your mind</div>
      </div>
      <input
        autoFocus
        value={response}
        onChange={e => setResponse(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && nextWord()}
        placeholder="Type your response and press Enter..."
        style={{
          width: '100%', padding: '16px 20px', borderRadius: '12px',
          background: 'var(--bg-card)', border: '1px solid var(--border)',
          color: 'var(--text-primary)', fontFamily: 'var(--font-body)',
          fontSize: '1rem', outline: 'none', marginBottom: '16px',
        }}
      />
      <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={nextWord}>
        Submit & Next →
      </button>
    </div>
  );
}

// SCT MODULE
function SCTModule({ onComplete }) {
  const [idx, setIdx] = useState(0);
  const [response, setResponse] = useState('');
  const [responses, setResponses] = useState([]);
  const sentences = issb.sct;

  const next = () => {
    const r = [...responses, { sentence: sentences[idx], completion: response }];
    if (idx + 1 >= sentences.length) { onComplete(r); return; }
    setResponses(r);
    setIdx(i => i + 1);
    setResponse('');
  };

  const progress = (idx / sentences.length) * 100;
  return (
    <div style={{ maxWidth: '640px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
        <span style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-main)' }}>{idx + 1} / {sentences.length}</span>
        <span className="badge badge-medium">SCT</span>
      </div>
      <div className="progress-bar" style={{ height: '6px', marginBottom: '32px' }}>
        <div className="progress-fill" style={{ width: `${progress}%` }} />
      </div>
      <div className="card" style={{ padding: '36px', marginBottom: '24px' }}>
        <div style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', letterSpacing: '1px', marginBottom: '12px', fontFamily: 'var(--font-main)' }}>COMPLETE THE SENTENCE</div>
        <p style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--gold)', lineHeight: 1.6 }}>"{sentences[idx]}"</p>
      </div>
      <textarea
        autoFocus value={response}
        onChange={e => setResponse(e.target.value)}
        placeholder="Complete the sentence..."
        rows={3}
        style={{
          width: '100%', padding: '16px', borderRadius: '12px',
          background: 'var(--bg-card)', border: '1px solid var(--border)',
          color: 'var(--text-primary)', fontFamily: 'var(--font-body)',
          fontSize: '1rem', outline: 'none', resize: 'vertical', marginBottom: '16px',
        }}
      />
      <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={next}>
        {idx + 1 >= sentences.length ? '✅ Finish SCT' : 'Next Sentence →'}
      </button>
    </div>
  );
}

// TAT MODULE
function TATModule({ onComplete }) {
  const [idx, setIdx] = useState(0);
  const [story, setStory] = useState('');
  const [stories, setStories] = useState([]);
  const scenarios = issb.tat;
  const [timeLeft, setTimeLeft] = useState(300);

  useEffect(() => {
    setTimeLeft(300);
  }, [idx]);

  useEffect(() => {
    if (timeLeft <= 0) { nextScenario(); return; }
    const t = setTimeout(() => setTimeLeft(t => t - 1), 1000);
    return () => clearTimeout(t);
  }, [timeLeft]);

  const nextScenario = () => {
    const r = [...stories, { scenario: scenarios[idx].scenario, story }];
    if (idx + 1 >= scenarios.length) { onComplete(r); return; }
    setStories(r);
    setIdx(i => i + 1);
    setStory('');
  };

  const s = scenarios[idx];
  return (
    <div style={{ maxWidth: '720px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <span style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-main)' }}>Scenario {idx + 1} of {scenarios.length}</span>
        <span className={`timer ${timeLeft < 60 ? 'danger' : timeLeft < 120 ? 'warning' : ''}`}>⏱ {formatTime(timeLeft)}</span>
      </div>
      <div className="card" style={{ padding: '32px', marginBottom: '20px', borderColor: 'rgba(64,145,108,0.4)', background: 'rgba(64,145,108,0.05)' }}>
        <div style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '16px' }}>{s.image_desc.split(' ')[0]}</div>
        <div style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', letterSpacing: '1px', marginBottom: '10px', fontFamily: 'var(--font-main)' }}>SCENARIO</div>
        <p style={{ lineHeight: 1.7, marginBottom: '12px' }}>{s.scenario}</p>
        <p style={{ color: 'var(--gold)', fontSize: '0.9rem', fontStyle: 'italic' }}>{s.prompt}</p>
      </div>
      <textarea
        autoFocus value={story}
        onChange={e => setStory(e.target.value)}
        placeholder="Write your story here (Situation → Action → Result)..."
        rows={8}
        style={{
          width: '100%', padding: '16px', borderRadius: '12px',
          background: 'var(--bg-card)', border: '1px solid var(--border)',
          color: 'var(--text-primary)', fontFamily: 'var(--font-body)',
          fontSize: '0.95rem', outline: 'none', resize: 'vertical', marginBottom: '16px', lineHeight: 1.7,
        }}
      />
      <div style={{ display: 'flex', gap: '12px' }}>
        <button className="btn btn-primary" style={{ flex: 1, justifyContent: 'center' }} onClick={nextScenario}>
          {idx + 1 >= scenarios.length ? '✅ Finish TAT' : 'Next Scenario →'}
        </button>
      </div>
    </div>
  );
}

// GD MODULE
function GDModule({ onComplete }) {
  const [topicIdx, setTopicIdx] = useState(0);
  const [notes, setNotes] = useState('');
  const topics = issb.gd_topics;
  const topic = topics[topicIdx];

  return (
    <div style={{ maxWidth: '720px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <span style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-main)' }}>Topic {topicIdx + 1} of {topics.length}</span>
        <div style={{ display: 'flex', gap: '8px' }}>
          {topicIdx > 0 && <button className="btn btn-outline" style={{ padding: '8px 16px', fontSize: '0.85rem' }} onClick={() => setTopicIdx(i => i - 1)}>← Prev</button>}
          <button className="btn btn-outline" style={{ padding: '8px 16px', fontSize: '0.85rem' }} onClick={() => setTopicIdx(i => Math.min(i + 1, topics.length - 1))}>Next →</button>
        </div>
      </div>
      <div className="card" style={{ padding: '36px', marginBottom: '20px', borderColor: 'rgba(230,57,70,0.3)', background: 'rgba(230,57,70,0.04)' }}>
        <div style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', letterSpacing: '1px', marginBottom: '12px', fontFamily: 'var(--font-main)' }}>DISCUSSION TOPIC</div>
        <p style={{ fontSize: '1.2rem', fontWeight: 600, lineHeight: 1.6 }}>{topic}</p>
      </div>
      <div className="card" style={{ padding: '20px', marginBottom: '20px' }}>
        <div style={{ fontFamily: 'var(--font-main)', fontWeight: 600, marginBottom: '12px', fontSize: '0.9rem', color: 'var(--cyan)' }}>💡 EVALUATION CRITERIA</div>
        {['Clear argument with supporting points', 'Listen & acknowledge other views', 'Maintain composure & confidence', 'Encourage quiet members to speak', 'Summarize effectively at the end'].map(c => (
          <div key={c} style={{ display: 'flex', gap: '8px', marginBottom: '8px', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
            <span>▸</span><span>{c}</span>
          </div>
        ))}
      </div>
      <textarea value={notes} onChange={e => setNotes(e.target.value)}
        placeholder="Write your key points, arguments, and counter-arguments here..."
        rows={6}
        style={{
          width: '100%', padding: '16px', borderRadius: '12px',
          background: 'var(--bg-card)', border: '1px solid var(--border)',
          color: 'var(--text-primary)', fontFamily: 'var(--font-body)',
          fontSize: '0.95rem', outline: 'none', resize: 'vertical', marginBottom: '16px',
        }}
      />
      <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={() => onComplete({ topic, notes })}>
        ✅ Complete GD Practice
      </button>
    </div>
  );
}

// COMMAND TASK
function CTModule({ onComplete }) {
  const [idx, setIdx] = useState(0);
  const [plan, setPlan] = useState('');
  const tasks = issb.command_tasks;
  const task = tasks[idx];

  return (
    <div style={{ maxWidth: '720px', margin: '0 auto' }}>
      <div style={{ display: 'flex', gap: '12px', marginBottom: '20px' }}>
        {tasks.map((t, i) => (
          <button key={t.id} onClick={() => setIdx(i)}
            style={{ padding: '8px 16px', borderRadius: '8px', border: `1px solid ${i === idx ? 'var(--gold)' : 'var(--border)'}`, background: i === idx ? 'rgba(201,162,39,0.1)' : 'var(--bg-card)', color: i === idx ? 'var(--gold)' : 'var(--text-secondary)', cursor: 'pointer', fontFamily: 'var(--font-main)', fontWeight: 600 }}>
            {t.title}
          </button>
        ))}
      </div>
      <div className="card" style={{ padding: '36px', marginBottom: '20px', borderColor: 'rgba(255,215,0,0.3)', background: 'rgba(255,215,0,0.03)' }}>
        <div style={{ color: 'var(--gold)', fontSize: '0.8rem', letterSpacing: '1px', marginBottom: '12px', fontFamily: 'var(--font-main)', fontWeight: 700 }}>🎯 COMMAND TASK: {task.title.toUpperCase()}</div>
        <p style={{ lineHeight: 1.7, marginBottom: '16px' }}>{task.scenario}</p>
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '16px' }}>
          <div style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', marginBottom: '8px', fontFamily: 'var(--font-main)' }}>EVALUATION CRITERIA</div>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {task.evaluation.map(e => <span key={e} className="badge badge-medium">{e}</span>)}
          </div>
        </div>
      </div>
      <div className="card" style={{ padding: '20px', marginBottom: '20px', background: 'rgba(0,207,255,0.04)' }}>
        <div style={{ color: 'var(--cyan)', fontSize: '0.82rem', letterSpacing: '1px', marginBottom: '10px', fontFamily: 'var(--font-main)', fontWeight: 700 }}>💡 HINTS</div>
        {task.hints.map(h => <div key={h} style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '6px' }}>▸ {h}</div>)}
      </div>
      <textarea value={plan} onChange={e => setPlan(e.target.value)}
        placeholder="Write your leadership plan and solution strategy..."
        rows={8}
        style={{
          width: '100%', padding: '16px', borderRadius: '12px',
          background: 'var(--bg-card)', border: '1px solid var(--border)',
          color: 'var(--text-primary)', fontFamily: 'var(--font-body)',
          fontSize: '0.95rem', outline: 'none', resize: 'vertical', marginBottom: '16px',
        }}
      />
      <button className="btn btn-gold" style={{ width: '100%', justifyContent: 'center' }} onClick={() => onComplete({ task: task.title, plan })}>
        ✅ Submit Command Plan
      </button>
    </div>
  );
}

export default function ISSBSuite() {
  const [activeModule, setActiveModule] = useState(null);
  const [completed, setCompleted] = useState({});
  const { setUserStats } = useContext(AppContext);

  const handleComplete = (id, data) => {
    setCompleted(prev => ({ ...prev, [id]: data }));
    if (id === 'issb') {
      setUserStats(prev => ({ ...prev, scores: { ...prev.scores, issb: 72 } }));
    }
    setActiveModule(null);
  };

  if (activeModule) {
    const mod = MODULES.find(m => m.id === activeModule);
    return (
      <div className="page">
        <div className="container" style={{ paddingBottom: '80px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '40px' }}>
            <button onClick={() => setActiveModule(null)} className="btn btn-outline" style={{ padding: '8px 16px' }}>← Back</button>
            <div>
              <div style={{ color: mod.color, fontFamily: 'var(--font-display)', fontSize: '0.8rem', letterSpacing: '2px' }}>ISSB MODULE</div>
              <h2 style={{ fontFamily: 'var(--font-main)', fontSize: '1.4rem' }}>{mod.icon} {mod.fullName}</h2>
            </div>
          </div>
          {activeModule === 'wat' && <WATModule onComplete={(d) => handleComplete('wat', d)} />}
          {activeModule === 'sct' && <SCTModule onComplete={(d) => handleComplete('sct', d)} />}
          {activeModule === 'tat' && <TATModule onComplete={(d) => handleComplete('tat', d)} />}
          {activeModule === 'gd' && <GDModule onComplete={(d) => handleComplete('gd', d)} />}
          {activeModule === 'ct' && <CTModule onComplete={(d) => handleComplete('ct', d)} />}
        </div>
      </div>
    );
  }

  const completedCount = Object.keys(completed).length;

  return (
    <div className="page">
      <div className="container" style={{ paddingBottom: '80px' }}>
        <div style={{ marginBottom: '40px' }}>
          <div className="badge badge-medium" style={{ marginBottom: '12px', letterSpacing: '2px' }}>ISSB SIMULATION CENTER</div>
          <h1 style={{ fontSize: '2.2rem', marginBottom: '8px' }}>
            ISSB <span className="glow-gold">Suite</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '520px' }}>
            Complete all ISSB modules to simulate the full Inter Services Selection Board experience
          </p>
        </div>

        {/* Progress */}
        <div className="card" style={{ padding: '24px', marginBottom: '32px', display: 'flex', alignItems: 'center', gap: '24px' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', color: 'var(--gold)', fontWeight: 700 }}>
            {completedCount}/{MODULES.length}
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: 'var(--font-main)', fontWeight: 600, marginBottom: '8px' }}>Modules Completed</div>
            <div className="progress-bar" style={{ height: '8px' }}>
              <div className="progress-fill" style={{ width: `${(completedCount / MODULES.length) * 100}%`, background: 'linear-gradient(90deg, var(--gold), var(--gold-light))' }} />
            </div>
          </div>
        </div>

        {/* Module Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {MODULES.map((mod) => {
            const isDone = !!completed[mod.id];
            return (
              <div key={mod.id} className="card" style={{ padding: '28px', display: 'flex', alignItems: 'center', gap: '24px', borderColor: isDone ? 'rgba(0,255,136,0.2)' : 'var(--border)', cursor: 'pointer', transition: 'all 0.3s' }}
                onClick={() => setActiveModule(mod.id)}
                onMouseEnter={e => { e.currentTarget.style.borderColor = mod.color + '55'; e.currentTarget.style.transform = 'translateX(4px)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = isDone ? 'rgba(0,255,136,0.2)' : 'var(--border)'; e.currentTarget.style.transform = 'none'; }}
              >
                <div style={{ width: '56px', height: '56px', borderRadius: '14px', background: `${mod.color}18`, border: `1px solid ${mod.color}44`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', flexShrink: 0 }}>
                  {mod.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
                    <span style={{ fontFamily: 'var(--font-main)', fontWeight: 700, fontSize: '1.1rem' }}>{mod.fullName}</span>
                    <span className="badge" style={{ background: `${mod.color}18`, color: mod.color, border: `1px solid ${mod.color}44` }}>{mod.label}</span>
                    {isDone && <span className="badge badge-easy">✓ Done</span>}
                  </div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem' }}>{mod.desc}</p>
                </div>
                <div style={{ color: 'var(--text-muted)', fontSize: '1.3rem' }}>›</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
