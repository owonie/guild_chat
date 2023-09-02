import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/login';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </>
  );
};

export default App;
