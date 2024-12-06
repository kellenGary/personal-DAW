import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './../components/Home.tsx'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
      </Routes>
    </Router>
  );
}
