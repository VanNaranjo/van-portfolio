import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Experience } from './pages/Experience';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';

// HashRouter keeps URLs like /van-portfolio/#/projects working on GitHub Pages,
// which has no server-side fallback for client routes.
export function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="experience" element={<Experience />} />
          <Route path="projects" element={<Projects />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
