import { Box, Typography } from '@mui/material';
import CertificateCard from '../components/CertificateCard';

const Certificates = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" px={4} py={6} mt={10}>
      <Typography variant="h3" mb={6} color="#6f61c1" fontWeight={600}>
        Certificates
      </Typography>

      <Box display="flex" flexWrap="wrap" justifyContent="center" gap={4}>
        <CertificateCard
          course="Dipex-2k25 Exhibition & Competition"
          platform="First Prize Winner • State Level"
          date="3 to 6 April 2025"
          topics={['IoT Project', 'Web Dashboard', 'Team Collaboration']}
          link="/Dipex-2k25.pdf"
          colors={['#6C63FF', '#AB47BC', '#7C4DFF']}
        />
        <CertificateCard
          course="Flutter & Dart - The Complete Guide"
          platform="Udemy"
          date="10 July 2024"
          topics={['Flutter', 'Dart', 'Mobile Development']}
          link="/FlutterAndDart.pdf"
          colors={['#BA68C8', '#7986CB', '#EC407A']}
        />
        <CertificateCard
          course="Fourise - C and C++ Programming"
          platform="Fourise Software Solutions Pvt. Ltd."
          date="6 Oct - 11 Oct 2024"
          topics={['C', 'C++', 'Programming Fundamentals']}
          link="Fourise.pdf"
          colors={['#9C27B0', '#CE93D8', '#BA68C8']}
        />
      </Box>
    </Box>
  );
};

export default Certificates;
