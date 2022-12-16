

import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainLayout from './layout/MainLayout';
import { HomePage } from './pages/HomePage';
import { NewsPage } from './pages/NewsPage';
import { PredictionPage } from './pages/PredictionPage';


function App() {
  return (
    <div className="App">
      {/* Set up router */}
      <Routes>
        <Route path="/" element={<MainLayout />}> {/*Layout for the app  */}
          <Route index element={<HomePage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/prediction" element={<PredictionPage />} />
        </Route>

      </Routes>

    </div>
  );
}

export default App;
