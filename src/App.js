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
import Settings from './components/Settings';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import NotFound from './components/NotFound'; // 404 bileşeni
const theme = createTheme({
  palette: {
    mode: 'light', // 'dark' yaparak koyu tema seçebilirsin
    primary: {
      main: '#1976d2', // Ana tema rengi
    },
    secondary: {
      main: '#ff4081', // İkincil tema rengi
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif', // Yazı tiplerini özelleştirebilirsin
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MyProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/adminpanel" element={<AdminPanel />} />
            <Route path="/detailpage" element={<NewDetailPage />} />
            <Route path="/news/:uri/:source" element={<NewDetailPage />} />
            <Route path="/category/:section" element={<CategoryPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Settings />
          <Footer />
        </Router>
      </MyProvider>
    </ThemeProvider>
  );
}
export default App;
