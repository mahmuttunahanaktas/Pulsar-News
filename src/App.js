import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import MainPage from './components/MainPage';
import { MyProvider } from './context';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminPanel from './components/AdminPanel';
import Footer from './components/Footer';
import NewDetail from './components/NewDetail';

function App() {
  return (
    <MyProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/adminpanel" element={<AdminPanel />} />
          <Route path="/detailpage" element={<NewDetail />} />
          <Route path="/news/:uri" element={<NewDetail/>}/>
        </Routes>
      
        <Footer /> {/* Footer'ı Routes'ın dışına koyun */}
      </Router>
    </MyProvider>
  );
}

export default App;
