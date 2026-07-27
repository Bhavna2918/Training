import { Routes, Route } from 'react-router-dom';
import { BlogHome } from './pages/BlogHome/BlogHome';

function App() {
  return (
    <Routes>
      <Route path="/" element={<BlogHome />} />
    </Routes>
  );
}

export default App;
