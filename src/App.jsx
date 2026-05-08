import { useState, createContext, useContext } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import ExamRoom from './pages/ExamRoom';
import Results from './pages/Results';
import ISSBSuite from './pages/ISSBSuite';
import SettingsModal from './components/SettingsModal';
import { getApiKey } from './utils/gemini';

export const AppContext = createContext(null);

function Navbar() {
  const location = useLocation();
  const [showSettings, setShowSettings] = useState(false);
  const active = (p) => location.pathname === p ? 'nav-link active' : 'nav-link';
  const hasKey = !!getApiKey();

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="nav-logo">
          <span style={{ fontSize: '1.6rem' }}>🛡️</span>
          <span className="nav-logo-text">BD DEFENCE MOCK</span>
        </Link>
        <div className="nav-links">
          <Link to="/" className={active('/')}>Home</Link>
          <Link to="/dashboard" className={active('/dashboard')}>Dashboard</Link>
          <Link to="/exam" className={active('/exam')}>Exam</Link>
          <Link to="/issb" className={active('/issb')}>ISSB</Link>
          <button onClick={() => setShowSettings(true)} style={{
            padding: '8px 14px', borderRadius: '8px', cursor: 'pointer',
            background: hasKey ? 'rgba(0,255,136,0.1)' : 'rgba(255,215,0,0.1)',
            border: `1px solid ${hasKey ? 'rgba(0,255,136,0.3)' : 'rgba(255,215,0,0.3)'}`,
            color: hasKey ? 'var(--success)' : 'var(--warning)',
            fontFamily: 'var(--font-main)', fontWeight: 600, fontSize: '0.88rem',
            display: 'flex', alignItems: 'center', gap: '6px',
          }}>
            {hasKey ? '🟢' : '🟡'} AI
          </button>
        </div>
      </nav>
      {showSettings && <SettingsModal onClose={() => setShowSettings(false)} />}
    </>
  );
}

export default function App() {
  const [userStats, setUserStats] = useState({
    totalExams: 0,
    history: [],
    scores: { iq: null, math: null, english: null, gk: null, issb: null },
    branch: null,
  });

  return (
    <AppContext.Provider value={{ userStats, setUserStats }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/exam" element={<ExamRoom />} />
          <Route path="/results" element={<Results />} />
          <Route path="/issb" element={<ISSBSuite />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}
