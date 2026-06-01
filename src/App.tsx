import { Routes, Route, Navigate } from 'react-router-dom';
import { HelpLayout } from './components/HelpLayout';
import { HelpHome } from './pages/HelpHome';
import { ArticlePage } from './pages/ArticlePage';

export function App() {
  return (
    <HelpLayout>
      <Routes>
        <Route path="/" element={<HelpHome />} />
        <Route path="/article/:slug" element={<ArticlePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HelpLayout>
  );
}
