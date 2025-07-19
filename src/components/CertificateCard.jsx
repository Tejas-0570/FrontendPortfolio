import { Box, Typography, Chip, Button } from '@mui/material';
import { Launch } from '@mui/icons-material';

const CertificateCard = ({ course, platform, date, topics, link, colors }) => {
  return (
    <>
      <Box
        height="290px"
        width="350px"
        borderRadius={3}
        overflow="hidden"
        display="flex"
        flexDirection="column"
        sx={{
          background: `linear-gradient(180deg, ${colors[0]}, ${colors[1]})`,
          transition: 'transform 0.3s ease',
          '&:hover': {
            transform: 'scale(1.02)',
          },
        }}
      >
        {/* Top Half (for visual gradient/header only) */}
        <Box flex={1}></Box>

        {/* Bottom Half with Content */}
        <Box
          flex={1}
          bgcolor="#0e0e23"
          p={2}
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Box>
            <Typography variant="h6" color={colors[2]} fontWeight="bold">
              {course}
            </Typography>
            <Typography variant="body2" color="gray">
              {platform} • {date}
            </Typography>
          </Box>

          <Box display="flex" flexWrap="wrap" gap={1} mt={1}>
            {topics.map((item, idx) => (
              <Chip
                key={idx}
                label={item}
                size="small"
                sx={{
                  bgcolor: '#1f1f3a',
                  color: '#b5b5ff',
                  fontSize: '12px',
                  height: '22px',
                }}
              />
            ))}
          </Box>

          <Box mt={2}>
            <Button
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              size="small"
              endIcon={<Launch />}
              sx={{
                borderColor: colors[2],
                color: colors[2],
                '&:hover': {
                  borderColor: '#ffffff',
                  color: '#ffffff',
                },
              }}
            >
              View Certificate
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default CertificateCard;
