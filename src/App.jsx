import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Industries from './pages/Industries';
import CaseStudies from './pages/CaseStudies';
import About from './pages/About';
import Careers from './pages/Careers';
import Contact from './pages/Contact';

const AppLayout = ({ children }) => (
  <div className="min-h-screen bg-transparent text-slate-800">
    <Navbar />
    <main>{children}</main>
    <Footer />
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <AppLayout>
              <Home />
            </AppLayout>
          }
        />
        <Route
          path="/services"
          element={
            <AppLayout>
              <Services />
            </AppLayout>
          }
        />
        <Route
          path="/industries"
          element={
            <AppLayout>
              <Industries />
            </AppLayout>
          }
        />
        <Route
          path="/case-studies"
          element={
            <AppLayout>
              <CaseStudies />
            </AppLayout>
          }
        />
        <Route
          path="/about"
          element={
            <AppLayout>
              <About />
            </AppLayout>
          }
        />
        <Route
          path="/careers"
          element={
            <AppLayout>
              <Careers />
            </AppLayout>
          }
        />
        <Route
          path="/contact"
          element={
            <AppLayout>
              <Contact />
            </AppLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
