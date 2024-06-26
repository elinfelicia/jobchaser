import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import Header from './components/header';
import Footer from './components/Footer';
import SignInPage from './components/pages/SignInPage';
import SignUpPage from './components/pages/SignUpPage';
import LandingPage from './components/pages/LandingPage';
import Jobs from './components/pages/Jobs';
import { AuthContext } from './components/context/AuthContext';
import { Provider } from 'react-redux'; // Import Provider from react-redux
import { store } from './components/store'; // Import your Redux store
import './styles/index.css';

function ProtectedRoute() {
    const authContext = useContext(AuthContext);
    const isAuthenticated = authContext && authContext.name !== null;

    console.log("isAuthenticated", isAuthenticated);

    return isAuthenticated ? <Outlet /> : <Navigate to="/signin" replace />;
}

function App() {
  return (
      <Provider store={store}> 
          <BrowserRouter>
              <Header />
              <main>
                  <Routes>
                      <Route path="/" element={<LandingPage />} />
                      <Route path="/signup" element={<SignUpPage />} />
                      <Route path="/signin" element={<SignInPage />} />
                      <Route path="/jobs" element={<ProtectedRoute />}>
                          <Route path="/jobs" element={<Jobs />} />
                      </Route>
                  </Routes>
              </main>
              <Footer />
          </BrowserRouter>
      </Provider> 
  );
}

export default App;
