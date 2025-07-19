import { Box, Typography, Link as MuiLink } from "@mui/material";
import { GrInstagram } from "react-icons/gr";

const TestLink = () => {
  return (
    <MuiLink
      href="https://www.instagram.com/_tejas.___07/"
      target="_blank"
      rel="noopener noreferrer"
      underline="none"
      onClick={() => console.log("Clicked Instagram Link")}
      sx={{
        textDecoration: "none",
      }}
    >
      <Box
        display="flex"
        gap={1}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="80px"
        width="110px"
        bgcolor="#1a1a2e"
        border="1px solid #2e2e4a"
        borderRadius={3}
        sx={{
          transition: "transform 0.3s ease",
          "&:hover": {
            transform: "scale(1.1)",
          },
          cursor: "pointer",
        }}
      >
        <GrInstagram size={20} color="#764ba2" />
        <Typography fontSize="10px" color="#fff">
          Instagram
        </Typography>
      </Box>
    </MuiLink>
  );
};

export default TestLink;
