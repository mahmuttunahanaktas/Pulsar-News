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
import NewDetailPage from './components/NewDetailPage';
import CategoryPage from './components/CategoryPage';
function App() {
  return (
    <MyProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/adminpanel" element={<AdminPanel />} />
          <Route path="/detailpage" element={<NewDetailPage />} />
          <Route path="/news/:uri/:source" element={<NewDetailPage/>}/>
          <Route path="/category/:section" element={<CategoryPage />} />
        </Routes>
        <Footer /> 
      </Router>
    </MyProvider>
  );
}

export default App;
