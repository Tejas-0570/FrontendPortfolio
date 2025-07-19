import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import ProjectCard from "../components/projectCards";

const Projects = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    return isMobile ? (
        <>
            <Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} mt={5} mb={5}>
                <Typography variant='h3' fontWeight={600} color='#6f61c1' mb={4}>
                    Featured Projects
                </Typography>

                <Box display="flex" justifyContent="center" gap={4} flexWrap="wrap" p={4}>
                    <ProjectCard
                        title="Learning Platform"
                        tech="React.js, Express.js, MongoDB"
                        stack={['React', 'Node.js']}
                        colors={['#6C63FF', '#AB47BC', '#7C4DFF']}
                    // link={''}
                    />
                    <ProjectCard
                        title="Social Media App"
                        tech="MERN Stack, Socket.io"
                        stack={['MongoDB', 'Express']}
                        colors={['#9C27B0', '#CE93D8', '#BA68C8']}
                    // link={''}
                    />
                    <ProjectCard
                        title="Task Management"
                        tech="Vue.js, Firebase"
                        stack={['Vue.js', 'Firebase']}
                        colors={['#BA68C8', '#7986CB', '#EC407A']}
                    // link={''}
                    />
                </Box>
            </Box>
        </>
    )
        : (
            <>
                <Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} mt={20} mb={10}>
                    <Typography variant='h3' fontWeight={600} color='#6f61c1' mb={8}>
                        Featured Projects
                    </Typography>

                    <Box display="flex" justifyContent="center" gap={4} flexWrap="wrap" p={4}>
                        <ProjectCard
                            title="Learning Platform"
                            tech="React.js, Express.js, MongoDB"
                            stack={['React', 'Node.js']}
                            colors={['#6C63FF', '#AB47BC', '#7C4DFF']}
                        // link={''}
                        />
                        <ProjectCard
                            title="Social Media App"
                            tech="MERN Stack, Socket.io"
                            stack={['MongoDB', 'Express']}
                            colors={['#9C27B0', '#CE93D8', '#BA68C8']}
                        // link={''}
                        />
                        <ProjectCard
                            title="Task Management"
                            tech="Vue.js, Firebase"
                            stack={['Vue.js', 'Firebase']}
                            colors={['#BA68C8', '#7986CB', '#EC407A']}
                        // link={''}
                        />
                    </Box>
                </Box>
            </>
        );
}


export default Projects;