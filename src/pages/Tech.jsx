import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import TechStackCard from '../components/TechStackCard';
import { FaReact, FaNodeJs, FaPython, FaDatabase } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri"
import { FaAws } from "react-icons/fa6";



const Tech = () => {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    return isMobile ? (
        <>
            <Box
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
                justifyContent={'center'}
            >
                <Typography variant='h3' fontWeight={600} color='#6f61c1' mb={4}>Tech Stack</Typography>

                <Box
                    display={'flex'}
                    flexWrap={'wrap'}
                    gap={1.5}
                    justifyContent={'center'}
                >
                    <TechStackCard icon={<FaReact size={40} color="#667eea" />} name="React" />
                    <TechStackCard icon={<FaNodeJs size={40} color="#764ba2" />} name="Node.js" />
                    <TechStackCard icon={<RiJavascriptFill size={40} color="#f093fb" />} name="Javascript" />
                    <TechStackCard icon={<FaPython size={40} color="#667eea" />} name="Python" />
                    <TechStackCard icon={<FaDatabase size={40} color="#764ba2" />} name="MongoDB" />
                    <TechStackCard icon={<FaAws size={40} color="#f093fb" />} name="AWS" />
                </Box>


            </Box>
        </>
    )
        : (
            <>
                <Box
                    display={'flex'}
                    flexDirection={'column'}
                    alignItems={'center'}
                    justifyContent={'center'}
                >
                    <Typography variant='h3' fontWeight={600} color='#6f61c1' mb={8}>Tech Stack</Typography>

                    <Box display={'flex'} alignItems={'center'} justifyContent={'center'} gap={2.5}>
                        <TechStackCard
                            icon={<FaReact size={40} color="#667eea" />}
                            name='React'

                        />
                        <TechStackCard
                            icon={<FaNodeJs size={40} color="#764ba2" />}
                            name='Node.js'

                        />
                        <TechStackCard
                            icon={<RiJavascriptFill size={40} color="#f093fb" />}
                            name='Javascript'

                        />
                        <TechStackCard
                            icon={<FaPython size={40} color="#667eea" />}
                            name='Python'

                        />
                        <TechStackCard
                            icon={<FaDatabase size={40} color="#764ba2" />}
                            name='MongoDB'

                        />
                        <TechStackCard
                            icon={<FaAws size={40} color="#f093fb" />}
                            name='AWS'

                        />
                    </Box>

                </Box>

            </>
        );
}

export default Tech;