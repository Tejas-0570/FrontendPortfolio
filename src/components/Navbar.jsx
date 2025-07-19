// import { useLocation } from 'react-router-dom';
import { Box, Link as MuiLinks, IconButton, Drawer, Typography } from '@mui/material';
import { TiHome } from "react-icons/ti";
import { useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
const navItem = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Tech', href: '#tech' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' },

]

const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    return isMobile ? (
        <>
            <Box display={'flex'} alignItems={'center'} justifyContent={'center'} mb={3} mt={2}>
                <Box component={'nav'} display={'flex'} alignItems={'center'} justifyContent={'space-between'} width={'80%'}>
                    <Box
                        sx={{
                            color: '#f093fb',
                            transition: 'color 0.3s ease',
                            '&:hover': { color: '#7e4e99' },
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <TiHome size={25} />
                    </Box>

                    <Box>
                        <IconButton
                            onClick={() => setDrawerOpen(true)}
                            sx={{ color: '#ffffff' }}
                        >
                            <MenuIcon fontSize="medium" />
                        </IconButton>
                        <Drawer
                            anchor="right"
                            open={drawerOpen}
                            onClose={() => setDrawerOpen(false)}
                            PaperProps={{
                                sx: { bgcolor: '#171728', width: '70%' },
                            }}
                        >
                            <Box
                                display="flex"
                                flexDirection="column"
                                gap={2}
                                p={3}
                            >
                                <Box
                                    display="flex"
                                    justifyContent="space-between"
                                    alignItems="center"
                                >
                                    <Typography fontWeight={600} color="#f093fb" fontSize="1.2rem">
                                        Menu
                                    </Typography>
                                    <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: '#ffffff' }}>
                                        <CloseIcon />
                                    </IconButton>
                                </Box>
                                {navItem.map((item) => (
                                    <MuiLinks
                                        key={item.name}
                                        href={item.href}
                                        underline="none"
                                        fontWeight={600}
                                        fontSize="1rem"
                                        sx={{
                                            color: '#ffffff',
                                            transition: 'color 0.3s ease',
                                            '&:hover': { color: '#667eea' },
                                        }}
                                        onClick={() => setDrawerOpen(false)}
                                    >
                                        {item.name}
                                    </MuiLinks>
                                ))}
                            </Box>
                        </Drawer>
                    </Box>

                </Box>
            </Box>
        </>
    )
        :

        (
            <>
                <Box
                    component={'nav'}
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'center'}
                    padding={'1rem 10rem'}
                    gap={3}
                    mt={3}

                >
                    <Box display={'flex'} alignItems={'center'} justifyContent={'center'} gap={'1.5rem'} border={'1px solid #2e2e4a'} p={1.5} borderRadius={10} width={'60%'} bgcolor={'#171728'}>
                        <Box
                            sx={{
                                color: '#667eea',
                                transition: 'color 0.3s ease',
                                '&:hover': {
                                    color: '#7e4e99',
                                },
                            }}
                        >
                            <TiHome size={23} />
                        </Box>

                        {navItem.map((item) => (
                            <MuiLinks
                                key={item.name}
                                href={item.href}
                                underline='none'
                                fontWeight={600}
                                sx={{
                                    color: '#ffffff',
                                    transition: 'color 0.3s ease',
                                    '&:hover': {
                                        color: '#667eea'
                                    }
                                }}

                            >
                                {item.name}
                            </MuiLinks>
                        ))}

                    </Box>
                </Box>
            </>
        )
}


export default Navbar;