import { useState, useEffect, useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../App';
import { getAllQuestions } from '../data/questions';
import { getNextDifficulty, calculateAccuracy, formatTime } from '../utils/adaptive';
import { getSmartQuestions, getApiKey } from '../utils/gemini';

const EXAM_CONFIGS = [
  { id:'full',    label:'Full Mock Exam',    icon:'📋', desc:'All subjects · 20 questions · 25 min', subjects:['iq','math','english','gk'], count:20, time:25*60 },
  { id:'iq',      label:'IQ & Reasoning',    icon:'🧠', desc:'Pattern, series, analogies · 10 q · 12 min', subjects:['iq'],     count:10, time:12*60 },
  { id:'math',    label:'Mathematics',       icon:'➗', desc:'Algebra, arithmetic, geometry · 10 q · 15 min', subjects:['math'], count:10, time:15*60 },
  { id:'english', label:'English',           icon:'🔤', desc:'Grammar, vocabulary, idioms · 10 q · 12 min', subjects:['english'],count:10, time:12*60 },
  { id:'gk',      label:'General Knowledge', icon:'🌍', desc:'Bangladesh, International, Defence · 10 q · 10 min', subjects:['gk'], count:10, time:10*60 },
];

export default function ExamRoom() {
  const navigate = useNavigate();
  const { userStats, setUserStats } = useContext(AppContext);
  const [phase, setPhase] = useState('select');
  const [config, setConfig] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [showExplanation, setShowExplanation] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [difficulty, setDifficulty] = useState('easy');
  const [loading, setLoading] = useState(false);
  const [questionSource, setQuestionSource] = useState('static');
  const [loadingMsg, setLoadingMsg] = useState('');
  const timeLeftRef = useRef(0);

  useEffect(() => {
    if (phase !== 'exam') return;
    if (timeLeft <= 0) { finishExam(); return; }
    timeLeftRef.current = timeLeft;
    const t = setTimeout(() => setTimeLeft(t => t - 1), 1000);
    return () => clearTimeout(t);
  }, [timeLeft, phase]);

  const startExam = async (cfg) => {
    setLoading(true);
    setConfig(cfg);
    const hasKey = !!getApiKey();
    setLoadingMsg(hasKey
      ? '🤖 Gemini AI is generating fresh questions...'
      : '📚 Loading from question bank...'
    );

    try {
      const { questions: qs, source } = await getSmartQuestions(
        cfg.subjects,
        'easy',
        cfg.count,
        getAllQuestions
      );
      setQuestions(qs);
      setQuestionSource(source);
    } catch {
      const fallback = getAllQuestions(cfg.subjects).slice(0, cfg.count);
      setQuestions(fallback);
      setQuestionSource('static');
    }

    setAnswers([]);
    setCurrent(0);
    setSelected(null);
    setShowExplanation(false);
    setTimeLeft(cfg.time);
    setDifficulty('easy');
    setLoading(false);
    setPhase('exam');
  };

  const handleAnswer = (opt) => {
    if (selected) return;
    setSelected(opt);
    setShowExplanation(true);
  };

  const nextQuestion = () => {
    const q = questions[current];
    const isCorrect = selected === q.correct_answer;
    const newAnswers = [...answers, { questionId: q.id, selected, correct: isCorrect, topic: q.topic, correctAnswer: q.correct_answer }];
    setAnswers(newAnswers);

    const accuracy = calculateAccuracy(newAnswers.filter(a => a.correct).length, newAnswers.length);
    setDifficulty(getNextDifficulty(accuracy, difficulty));

    if (current + 1 >= questions.length) {
      finishExam(newAnswers);
    } else {
      setCurrent(c => c + 1);
      setSelected(null);
      setShowExplanation(false);
    }
  };

  const finishExam = (finalAnswers = answers) => {
    const correct = finalAnswers.filter(a => a.correct).length;
    const score = calculateAccuracy(correct, finalAnswers.length || 1);
    const subjectKey = config.id === 'full' ? null : config.id;

    setUserStats(prev => {
      const newScores = { ...prev.scores };
      if (subjectKey) newScores[subjectKey] = score;
      else { newScores.iq = score; newScores.math = score; newScores.english = score; newScores.gk = score; }
      return {
        ...prev,
        totalExams: prev.totalExams + 1,
        history: [...prev.history, ...finalAnswers],
        scores: newScores,
        lastResult: { score, correct, total: finalAnswers.length, config, answers: finalAnswers, timeUsed: config.time - timeLeftRef.current },
      };
    });
    navigate('/results');
  };

  const q = questions[current];
  const letters = ['A', 'B', 'C', 'D'];
  const progress = questions.length ? (current / questions.length) * 100 : 0;
  const timerClass = timeLeft < 60 ? 'timer danger' : timeLeft < 180 ? 'timer warning' : 'timer';

  // LOADING SCREEN
  if (loading) return (
    <div className="page" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '3rem', marginBottom: '20px', animation: 'float 1.5s ease-in-out infinite' }}>🤖</div>
        <h2 style={{ fontFamily: 'var(--font-main)', marginBottom: '12px' }}>{loadingMsg}</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Please wait...</p>
        <div style={{ marginTop: '24px', width: '200px', margin: '24px auto 0' }}>
          <div className="progress-bar" style={{ height: '4px' }}>
            <div className="progress-fill" style={{ width: '100%', animation: 'shimmer 1.5s infinite' }} />
          </div>
        </div>
      </div>
    </div>
  );

  // SELECTION SCREEN
  if (phase === 'select') return (
    <div className="page">
      <div className="container" style={{ paddingBottom: '80px' }}>
        <div style={{ marginBottom: '40px' }}>
          <div className="badge badge-easy" style={{ marginBottom: '12px', letterSpacing: '2px' }}>EXAM SELECTION</div>
          <h1 style={{ fontSize: '2.2rem', marginBottom: '8px' }}>
            Choose Your <span className="glow-cyan">Exam</span>
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <p style={{ color: 'var(--text-secondary)' }}>Select an exam type to begin adaptive simulation</p>
            <span style={{
              padding: '4px 12px', borderRadius: '20px', fontSize: '0.78rem', fontWeight: 600,
              background: getApiKey() ? 'rgba(0,255,136,0.1)' : 'rgba(255,215,0,0.1)',
              color: getApiKey() ? 'var(--success)' : 'var(--warning)',
              border: `1px solid ${getApiKey() ? 'rgba(0,255,136,0.3)' : 'rgba(255,215,0,0.3)'}`,
            }}>
              {getApiKey() ? '🟢 AI Mode ON' : '🟡 Static Mode — Add API key in Settings'}
            </span>
          </div>
        </div>
        <div className="grid-3" style={{ gap: '20px' }}>
          {EXAM_CONFIGS.map(cfg => (
            <button key={cfg.id} onClick={() => startExam(cfg)} style={{
              background: 'var(--bg-card)', border: '1px solid var(--border)',
              borderRadius: '16px', padding: '32px 24px', cursor: 'pointer',
              color: 'var(--text-primary)', textAlign: 'left', transition: 'all 0.3s',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--cyan)'; e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.background = 'var(--cyan-dim)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'none'; e.currentTarget.style.background = 'var(--bg-card)'; }}
            >
              <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>{cfg.icon}</div>
              <h3 style={{ fontFamily: 'var(--font-main)', fontSize: '1.15rem', marginBottom: '8px' }}>{cfg.label}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{cfg.desc}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  if (!q) return null;

  // EXAM SCREEN
  return (
    <div className="page">
      <div className="container" style={{ maxWidth: '760px', paddingBottom: '80px' }}>
        {/* Top Bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
            <span className="badge badge-easy">{q.type}</span>
            <span className={`badge ${q.difficulty === 'easy' ? 'badge-easy' : q.difficulty === 'medium' ? 'badge-medium' : 'badge-hard'}`}>
              {q.difficulty?.toUpperCase()}
            </span>
            <span style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-main)' }}>
              Q{current + 1}/{questions.length}
            </span>
            {/* Source tag */}
            <span style={{
              fontSize: '0.72rem', padding: '3px 8px', borderRadius: '12px', fontWeight: 600,
              background: questionSource === 'ai' ? 'rgba(0,207,255,0.1)' : 'rgba(255,255,255,0.05)',
              color: questionSource === 'ai' ? 'var(--cyan)' : 'var(--text-muted)',
              border: `1px solid ${questionSource === 'ai' ? 'rgba(0,207,255,0.3)' : 'var(--border)'}`,
            }}>
              {questionSource === 'ai' ? '🤖 AI Generated' : '📚 Static Bank'}
            </span>
          </div>
          <div className={timerClass}>⏱ {formatTime(timeLeft)}</div>
        </div>

        {/* Progress */}
        <div className="progress-bar" style={{ height: '6px', marginBottom: '32px' }}>
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>

        {/* Question */}
        <div className="card animate-fade-up" style={{ padding: '36px', marginBottom: '20px' }}>
          <div style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-main)', fontSize: '0.8rem', letterSpacing: '1px', marginBottom: '12px' }}>
            {q.topic}
          </div>
          <p style={{ fontSize: '1.15rem', lineHeight: 1.7, fontWeight: 500 }}>{q.question}</p>
        </div>

        {/* Options */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
          {q.options?.map((opt, i) => {
            let cls = 'option-btn';
            if (selected) {
              if (opt === q.correct_answer) cls += ' correct';
              else if (opt === selected) cls += ' wrong';
            }
            return (
              <button key={i} className={cls} onClick={() => handleAnswer(opt)} disabled={!!selected}>
                <span className="option-letter">{letters[i]}</span>
                {opt}
              </button>
            );
          })}
        </div>

        {/* Explanation */}
        {showExplanation && (
          <div className="card animate-fade-up" style={{
            padding: '20px', marginBottom: '20px',
            borderColor: selected === q.correct_answer ? 'var(--success)' : 'var(--red)',
            background: selected === q.correct_answer ? 'var(--success-dim)' : 'var(--red-dim)',
          }}>
            <div style={{ fontWeight: 700, marginBottom: '6px', color: selected === q.correct_answer ? 'var(--success)' : 'var(--red)' }}>
              {selected === q.correct_answer ? '✅ Correct!' : `❌ Incorrect — Correct: ${q.correct_answer}`}
            </div>
            <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: 'var(--text-secondary)' }}>{q.explanation}</p>
          </div>
        )}

        {selected && (
          <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={nextQuestion}>
            {current + 1 >= questions.length ? '📊 View Results' : 'Next Question →'}
          </button>
        )}
      </div>
    </div>
  );
}
