import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { MalShell } from './mal/MalShell';
import { HomePage } from './mal/pages/HomePage';
import { WorkPage } from './mal/pages/WorkPage';
import { AboutPage } from './mal/pages/AboutPage';
import { ProjectPage } from './mal/pages/ProjectPage';

function LegacyPrefixRedirect() {
  const { pathname, search, hash } = useLocation();
  const next = pathname.replace(/^\/mix1/, '') || '/';
  return <Navigate to={`${next}${search}${hash}`} replace />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MalShell />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/work/:slug" element={<ProjectPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Route>
        <Route path="/mix1/*" element={<LegacyPrefixRedirect />} />
        <Route path="/mix1" element={<Navigate to="/" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
