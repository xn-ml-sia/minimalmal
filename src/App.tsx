import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { MalShell } from './mal/MalShell';
import { HomePage } from './mal/pages/HomePage';
import { WorkPage } from './mal/pages/WorkPage';
import { AboutPage } from './mal/pages/AboutPage';
import { ProjectPage } from './mal/pages/ProjectPage';

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
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
