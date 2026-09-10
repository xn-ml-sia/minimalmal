import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { MalShell } from './mal/MalShell';
import { WorkPage } from './mal/pages/WorkPage';
import { AboutPage } from './mal/pages/AboutPage';
import { ProjectPage } from './mal/pages/ProjectPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MalShell />}>
          <Route path="/" element={<WorkPage />} />
          <Route path="/work" element={<Navigate to="/" replace />} />
          <Route path="/work/:slug" element={<ProjectPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
