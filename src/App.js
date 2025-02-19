import './App.css';
import Navbar from './components/other/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './components/screens/MainPage';
import { MyProvider } from './context';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminPanel from './components/screens/admin/AdminPanel';
import Footer from './components/other/Footer';
import NewDetailPage from './components/screens/News/NewDetailPage';
import CategoryPage from './components/screens/News/CategoryPage';
import Settings from './components/screens/Settings';
import SignIn from './components/screens/auth/SignIn';
import SignUp from './components/screens/auth/SignUp';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import NotFound from './components/other/NotFound'; // 404 bileşeni
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
