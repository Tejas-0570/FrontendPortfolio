import { Box, Typography, Chip, Link as MuiLink } from '@mui/material';


const ProjectCard = ({ title, tech, stack, colors, link }) => {
    return (
        <>
            <MuiLink
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                underline="none"
                sx={{ display: 'inline-block' }}
            >
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
                            transform: 'scale(1.05)',
                        },
                    }}
                >
                    <Box flex={1}></Box>

                    <Box
                        flex={1}
                        bgcolor="#0e0e23"
                        p={2}
                        display="flex"
                        flexDirection="column"
                        justifyContent="space-evenly"
                    >
                        <Box>
                            <Typography variant="h6" color={colors[2]} fontWeight="bold">
                                {title}
                            </Typography>
                            <Typography variant="body2" color="gray">
                                {tech}
                            </Typography>
                        </Box>

                        <Box display="flex" gap={1} mt={1}>
                            {stack.map((item) => (
                                <Chip
                                    key={item}
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
                    </Box>
                </Box>
            </MuiLink>

        </>
    );
}

export default ProjectCard;