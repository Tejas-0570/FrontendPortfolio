import { Box, Typography } from '@mui/material';
import Tejas from '../assets/Tejas.jpg';
import { keyframes } from '@emotion/react'; // 👈 import this for animation
import { useMediaQuery, useTheme } from '@mui/material';
import { IoIosArrowDown } from "react-icons/io";
import { Typewriter } from 'react-simple-typewriter';

// 👇 Define keyframes for the glowing effect
const pulseShadow = keyframes`
  0% {
    box-shadow: 0 0 60px 10px rgba(102, 126, 234, 0.15);
  }
  50% {
    box-shadow: 0 0 120px 30px rgba(102, 126, 234, 0.3);
  }
  100% {
    box-shadow: 0 0 60px 10px rgba(102, 126, 234, 0.15);
  }
`;
const blinkImage = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0.85; }
  100% { opacity: 1; }
`;
const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px); /* 👈 moves up 10px */
  }
`;




const Home = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    return isMobile ?
        (<>
            <Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} gap={1.5}>
                <Box
                    component={'img'}
                    height={'400px'}
                    src={Tejas}
                    borderRadius={5}
                    border={'1px solid #2e2e4a'}
                    sx={{
                        animation: `${pulseShadow} 2.5s ease-in-out infinite`,
                    }}
                />
                <Typography>
                    Hi, I'm
                </Typography>
                <Typography variant='h5' color='#f093fb' fontWeight={600}>
                    Tejas Waydande
                </Typography>
               <Typography component={'span'} variant='h6' fontWeight={600} display={'flex'} gap={1}>
                            And I'm a{' '}
                            <Typography variant='h6' fontWeight={600} color='#6f61c1'>
                                <Typewriter
                                    words={['Frontend Developer','Backend Developer', 'React.js Developer']}
                                    loop={0} // 0 = infinite
                                    cursor
                                    cursorStyle='|'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1500}
                                />
                            </Typography>
                        </Typography>


            </Box>
            <Box display={'flex'} alignItems={'center'} justifyContent={'center'} mt={5}
                sx={{
                    animation: `${bounce} 1.5s ease-in-out infinite`,
                }}>
                <IoIosArrowDown size={20} color='#f093fb' />
            </Box>
        </>
        )
        :
        (
            <>
                <Box display={'flex'} alignItems={'center'} justifyContent={'center'} gap={10} mt={15} mr={'10%'} ml={'10%'}>
                    <Box
                        component={'img'}
                        height={'400px'}
                        src={Tejas}
                        borderRadius={5}
                        border={'1px solid #2e2e4a'}
                        sx={{
                            animation: `${pulseShadow} 2.5s ease-in-out infinite`,
                        }}
                    />
                    <Box
                        width={'40%'}
                        height={'400px'}
                        display={'flex'}
                        flexDirection={'column'}
                        gap={2}
                        justifyContent={'center'}
                    >
                        <Typography variant='h5' fontWeight={600}>
                            Hi I'm
                        </Typography>
                        <Typography variant='h2' color='#f093fb' fontWeight={600}>
                            Tejas Waydande
                        </Typography>
                        

                        <Typography variant='h5' fontWeight={600} display={'flex'} gap={1}>
                            And I'm a{' '}
                            <Typography component={'span'} variant='h6' fontWeight={600} color='#6f61c1'>
                                <Typewriter
                                    words={['Frontend Developer','Backend Engineer (Node.js + MongoDB)']}
                                    loop={0} // 0 = infinite
                                    cursor
                                    cursorStyle='|'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1500}
                                />
                            </Typography>
                        </Typography>

                    </Box>
                </Box>

                <Box display={'flex'} alignItems={'center'} justifyContent={'center'} mt={12.5}
                    sx={{
                        animation: `${bounce} 1.5s ease-in-out infinite`,
                    }}>
                    <IoIosArrowDown size={30} color='#f093fb' />
                </Box>
            </>
        );
};

export default Home;
