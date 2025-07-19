import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { LuCodeXml } from "react-icons/lu";
import { FaRocket } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";


const About = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    return isMobile ? (
        <>
            <Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} mt={5} mb={3}>
                <Typography variant='h3' fontWeight={600} color='#6f61c1' mb={4}>
                    About Me
                </Typography>
                <Box width={'100%'} p={1.5}>
                    <Typography variant='body1' fontWeight={400} lineHeight={1.5}>
                                I'm a passionate full-stack developer dedicated to building impactful digital experiences. With hands-on expertise in the MERN stack and Next.js, I enjoy transforming ideas into scalable and modern web applications. I'm driven by curiosity, creativity, and a strong foundation in both frontend and backend development.
                    </Typography>
                    <Box display={'flex'} alignItems={'center'} justifyContent={'center'} gap={2} mt={3}>
                        <Box border={'1px solid #2e2e4a'} p={2} borderRadius={2} sx={{ width: '100%', height: '120px', backgroundColor: '#1a1a2e' }}>
                            <Typography variant='h6' mb={0.5} color='#667eea' fontWeight={600}>Frontend</Typography>
                            <Typography>React, Next.js</Typography>
                        </Box>
                        <Box border={'1px solid #2e2e4a'} p={2} borderRadius={2} sx={{ width: '100%', height: '120px', backgroundColor: '#1a1a2e' }}>
                            <Typography variant='h6' mb={0.5} color='#6d469b' fontWeight={600}>Backend</Typography>
                            <Typography>Node.js, Express, MongoDB</Typography>
                        </Box>
                    </Box>

                </Box>
                <Box display={'flex'} flexDirection={'column'} justifyContent={'left'} gap={2} width={'95%'} border={'1px solid #2e2e4a'} borderRadius={3} bgcolor={'#1a1a2e'} p={4}>
                    <Box display={'flex'} alignItems={'center'} gap={2}>
                        <LuCodeXml size={25} color='#667eea' />
                        <Typography variant='h6' fontWeight={600}>Clean Code Advocate</Typography>
                    </Box>

                    <Box display={'flex'} alignItems={'center'} gap={2}>
                        <FaRocket size={25} color='#6d469b' />
                        <Typography variant='h6' fontWeight={600}>Performance Optimizer</Typography>
                    </Box>

                    <Box display={'flex'} alignItems={'center'} gap={2}>
                        <FaPeopleGroup size={25} color='#f093fb' />
                        <Typography variant='h6' fontWeight={600}>Team Collaborator</Typography>
                    </Box>
                </Box>
            </Box>
        </>
    )
        :
        (
            <>
                <Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} mt={10} mb={10}>
                    <Typography variant='h3' fontWeight={600} color='#6f61c1' mb={8}>
                        About Me
                    </Typography>

                    <Box display={'flex'} alignItems={'center'} justifyContent={'center'} gap={7}>
                        <Box width={'40%'}>
                            <Typography variant='h6' fontWeight={400} lineHeight={1.5}>
                                I'm a passionate full-stack developer dedicated to building impactful digital experiences. With hands-on expertise in the MERN stack and Next.js, I enjoy transforming ideas into scalable and modern web applications. I'm driven by curiosity, creativity, and a strong foundation in both frontend and backend development.
                            </Typography>
                            <Box display={'flex'} alignItems={'center'} justifyContent={'center'} gap={2} mt={3}>
                                <Box border={'1px solid #2e2e4a'} p={3} borderRadius={2} sx={{ width: '100%', backgroundColor: '#1a1a2e' }}>
                                    <Typography variant='h6' mb={0.5} color='#667eea' fontWeight={600}>Frontend</Typography>
                                    <Typography>React, Next.js</Typography>
                                </Box>
                                <Box border={'1px solid #2e2e4a'} p={3} borderRadius={2} sx={{ width: '100%', backgroundColor: '#1a1a2e' }}>
                                    <Typography variant='h6' mb={0.5} color='#6d469b' fontWeight={600}>Backend</Typography>
                                    <Typography>Node.js, Express, MongoDB</Typography>
                                </Box>
                            </Box>

                        </Box>

                        <Box display={'flex'} flexDirection={'column'} justifyContent={'left'} gap={2} width={'40%'} height={"180px"} border={'1px solid #2e2e4a'} borderRadius={3} bgcolor={'#1a1a2e'} p={4}>
                            <Box display={'flex'} alignItems={'center'} gap={2}>
                                <LuCodeXml size={25} color='#667eea' />
                                <Typography variant='h6' fontWeight={600}>Clean Code Advocate</Typography>
                            </Box>

                            <Box display={'flex'} alignItems={'center'} gap={2}>
                                <FaRocket size={25} color='#6d469b' />
                                <Typography variant='h6' fontWeight={600}>Performance Optimizer</Typography>
                            </Box>

                            <Box display={'flex'} alignItems={'center'} gap={2}>
                                <FaPeopleGroup size={25} color='#f093fb' />
                                <Typography variant='h6' fontWeight={600}>Team Collaborator</Typography>
                            </Box>
                        </Box>

                    </Box>



                </Box>
            </>
        )
}

export default About;