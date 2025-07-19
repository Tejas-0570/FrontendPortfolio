import { Box, Typography } from "@mui/material";

const TechStackCard = ({ icon, name }) => {
    return (
        <>
            <Box display={'flex'} alignItems={'center'} justifyContent={'center'} gap={2}>
                <Box
                    display={'flex'}
                    flexDirection={'column'}
                    alignItems={'center'}
                    justifyContent={'center'}
                    gap={0.5} height={'120px'}
                    width={'180px'}
                    p={3}
                    borderRadius={2}
                    border={'1px solid #2e2e4a'}
                    bgcolor={'#1a1a2e'}
                    sx={{
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                            transform: 'scale(1.1)',
                            border: '1px solid #667eea'
                        },
                    }}
                    
                >
                    
                    {icon}
                    <Typography fontWeight={600}>{name}</Typography>

                </Box>

            </Box>
        </>
    );
}

export default TechStackCard;