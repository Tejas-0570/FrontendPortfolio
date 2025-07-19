import CursorAuraParticles from './components/CursorAuraParticles';
import Navbar from './components/Navbar';
import { Box } from '@mui/material';
import Home from './pages/home';
import About from './pages/About';
import Projects from './pages/Projects';
import Tech from './pages/Tech';
import Certificate from './pages/Certificates';
import Contact from './pages/Contact';

function App() {
  return (
     <Box
     sx={{
      position: 'relative',
      minHeight: '100vh',
      backgroundColor: '#0c0d14',
      color: '#ffffff',
      overflow: 'hidden'
     }}
     >
      <CursorAuraParticles />
      <Navbar />
      <Home />
       <Box id="about"><About /></Box>
      <Box id="projects"><Projects /></Box>
      <Box id="tech"><Tech /></Box>
      <Box id="certificates"><Certificate /></Box>
      <Box id="contact"><Contact /></Box>
      
    </Box>
   
  );
}



export default App;