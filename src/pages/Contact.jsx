import { Box, Typography, useMediaQuery, useTheme, Link as MuiLink } from "@mui/material";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaMessage } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button, Snackbar, Alert } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';


const Contact = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [snackOpen, setSnackOpen] = useState(false);
    const [snackMessage, setSnackMessage] = useState('');
    const [snackSeverity, setSnackSeverity] = useState('success');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.post('https://backendportfolio-mt4t.onrender.com/api/contact', formData);
            setFormData({ name: '', email: '', message: '' });
            handleClose(); // Close dialog immediately

            // Show success Snackbar
            setSnackMessage('✅ Message sent successfully!');
            setSnackSeverity('success');
            setSnackOpen(true);
        } catch (error) {
            console.error('Email error:', error);

            // Show error Snackbar
            setSnackMessage('❌ Failed to send message. Try again later.');
            setSnackSeverity('error');
            setSnackOpen(true);
        }
    };


    return isMobile ? (
        <>
            <Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} mt={5} mb={10} p={2}>
                <Typography variant="h3" mb={3} color="#6f61c1" fontWeight={600} textAlign={'center'}>
                    Let's Work Together
                </Typography>
                <Typography variant="body1" mb={5}>
                    Ready to bring your ideas to life? Let's create something amazing together.
                </Typography>


                <Box display={'flex'} alignItems={'center'} justifyContent={'center'} gap={1}>

                    <Box onClick={handleOpen} display={'flex'} gap={1} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} height={'80px'} width={'110px'} bgcolor={'#1a1a2e'} border={'1px solid #2e2e4a'} borderRadius={3} ml={1}
                        sx={{
                            transition: 'transform 0.3s ease',
                            '&:hover': {
                                transform: 'scale(1.1)',
                            },
                        }}
                    >
                        <FaMessage size={20} color="#667eea" />
                        <Typography fontSize={'10px'}>Leave Message</Typography>


                    </Box>

                    <MuiLink
                        href="https://www.instagram.com/_tejas.___07/"
                        target="_blank"
                        rel="noopener noreferrer"
                        underline="none"
                        sx={{ textDecoration: "none" }}
                    >
                        <Box display={'flex'} gap={1} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} height={'80px'} width={'110px'} bgcolor={'#1a1a2e'} border={'1px solid #2e2e4a'} borderRadius={3}
                            sx={{
                                transition: 'transform 0.3s ease',
                                '&:hover': {
                                    transform: 'scale(1.1)',
                                },
                            }}
                        >
                            <GrInstagram size={20} color="#764ba2" />
                            <Typography fontSize={'10px'} color="#ffffff">Instagram</Typography>
                        </Box>
                    </MuiLink>


                    <MuiLink
                        href="https://www.linkedin.com/in/tejas-waydande/" // use your real username here
                        target="_blank"
                        rel="noopener noreferrer"
                        underline="none"
                        sx={{ textDecoration: "none" }}
                    >
                        <Box display={'flex'} gap={1} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} height={'80px'} width={'110px'} bgcolor={'#1a1a2e'} border={'1px solid #2e2e4a'} borderRadius={3}
                            sx={{
                                transition: 'transform 0.3s ease',
                                '&:hover': {
                                    transform: 'scale(1.1)',
                                },
                            }}
                        >
                            <FaLinkedinIn size={20} color="#f093fb" />
                            <Typography fontSize={'10px'} color="#ffffff">Linked In</Typography>
                        </Box>
                    </MuiLink>




                </Box>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                        sx: {
                            width: '90%',
                            height: '590px',
                            bgcolor: '#f5f5f5', // light background like your screenshot
                            color: '#1a1a1a',
                            borderRadius: 4,
                            p: 4,
                        },
                    }}
                >
                    <DialogTitle sx={{ textAlign: 'center', fontSize: '32px', fontWeight: 'bold', mb: 1 }}>
                        Contact Me
                    </DialogTitle>
                    <Typography textAlign="center" variant="h6" color="#1e40af" mb={1}>
                        tejaswaydande00@gmail.com
                    </Typography>
                    <Typography textAlign="center" color="gray" mb={4}>
                        Feel free to contact me with any inquiries or questions!
                    </Typography>

                    <DialogContent
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 3,
                            px: 2,
                        }}
                    >
                        <Box display="flex" flexDirection={'column'} gap={2} flexWrap="wrap">
                            <TextField
                                label="Name"
                                name="name"
                                variant="standard"
                                value={formData.name}
                                onChange={handleChange}
                                fullWidth
                                sx={{
                                    flex: 1,
                                }}
                                InputProps={{ disableUnderline: false }}
                            />
                            <TextField
                                label="Email Address"
                                name="email"
                                variant="standard"
                                value={formData.email}
                                onChange={handleChange}
                                fullWidth
                                sx={{
                                    flex: 1,
                                }}
                                InputProps={{ disableUnderline: false }}
                            />
                        </Box>

                        <TextField
                            label="Message"
                            name="message"
                            variant="standard"
                            value={formData.message}
                            onChange={handleChange}
                            fullWidth
                            multiline
                            rows={6}
                            InputProps={{ disableUnderline: false }}
                        />
                    </DialogContent>

                    <DialogActions sx={{ justifyContent: 'flex-end', mt: 3 }}>
                        <Button
                            onClick={handleSubmit}
                            sx={{
                                px: 4,
                                py: 1.5,
                                bgcolor: '#1e40af',
                                color: 'white',
                                borderRadius: '9999px',
                                textTransform: 'none',
                                fontWeight: 600,
                                '&:hover': {
                                    bgcolor: '#1e3a8a',
                                },
                            }}
                        >
                            Submit
                        </Button>
                    </DialogActions>
                </Dialog>
                <Snackbar
                    open={snackOpen}
                    autoHideDuration={3000}
                    onClose={() => setSnackOpen(false)}
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                >
                    <Alert
                        onClose={() => setSnackOpen(false)}
                        severity={snackSeverity}
                        variant="filled"
                        sx={{ width: '100%', fontWeight: 'bold', fontSize: '1rem' }}
                    >
                        {snackMessage}
                    </Alert>
                </Snackbar>
            </Box>

        </>
    )

        : (
            <>
                <Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} mt={9} mb={10}>
                    <Typography variant="h3" mb={3} color="#6f61c1" fontWeight={600}>
                        Let's Work Together
                    </Typography>
                    <Typography variant="h5" mb={5}>
                        Ready to bring your ideas to life? Let's create something amazing together.
                    </Typography>
                    <Box display={'flex'} alignItems={'center'} justifyContent={'center'} gap={5} >

                        <Box onClick={handleOpen} display={'flex'} gap={1} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} height={'140px'} width={'250px'} bgcolor={'#1a1a2e'} border={'1px solid #2e2e4a'} borderRadius={3}
                            sx={{
                                transition: 'transform 0.3s ease',
                                '&:hover': {
                                    transform: 'scale(1.1)',
                                },
                            }}
                        >
                            <FaMessage size={40} color="#667eea" />
                            <Typography fontWeight={600}>Leave Message</Typography>


                        </Box>

                        <MuiLink
                            href="https://www.instagram.com/_tejas.___07/"
                            target="_blank"
                            rel="noopener noreferrer"
                            underline="none"
                            sx={{ textDecoration: "none" }}
                        >
                            <Box
                                display="flex"
                                gap={1}
                                flexDirection="column"
                                alignItems="center"
                                justifyContent="center"
                                height="140px"
                                width="250px"
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
                                <GrInstagram size={40} color="#764ba2" />
                                <Typography fontWeight={600} color="#fff">
                                    Instagram
                                </Typography>
                            </Box>
                        </MuiLink>

                        <MuiLink
                            href="https://www.linkedin.com/in/tejas-waydande/" // use your real username here
                            target="_blank"
                            rel="noopener noreferrer"
                            underline="none"
                            sx={{ textDecoration: "none" }}
                        >
                            <Box display={'flex'} gap={1} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} height={'140px'} width={'250px'} bgcolor={'#1a1a2e'} border={'1px solid #2e2e4a'} borderRadius={3}
                                sx={{
                                    transition: 'transform 0.3s ease',
                                    '&:hover': {
                                        transform: 'scale(1.1)',
                                    },
                                }}
                            >
                                <FaLinkedinIn size={40} color="#f093fb" />
                                <Typography fontWeight={600} color="#ffffff">Linked In</Typography>
                            </Box>
                        </MuiLink>


                    </Box>
                </Box>

                <Dialog
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                        sx: {
                            width: '90%',
                            maxWidth: '700px',
                            bgcolor: '#f5f5f5', // light background like your screenshot
                            color: '#1a1a1a',
                            borderRadius: 4,
                            p: 4,
                        },
                    }}
                >
                    <DialogTitle sx={{ textAlign: 'center', fontSize: '32px', fontWeight: 'bold', mb: 1 }}>
                        Contact Me
                    </DialogTitle>
                    <Typography textAlign="center" variant="h6" color="#1e40af" mb={1}>
                        tejaswaydande00@gmail.com
                    </Typography>
                    <Typography textAlign="center" color="gray" mb={4}>
                        Feel free to contact me with any inquiries or questions!
                    </Typography>

                    <DialogContent
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 3,
                            px: 2,
                        }}
                    >
                        <Box display="flex" gap={2} flexWrap="wrap">
                            <TextField
                                label="Name"
                                name="name"
                                variant="standard"
                                value={formData.name}
                                onChange={handleChange}
                                fullWidth
                                sx={{
                                    flex: 1,
                                }}
                                InputProps={{ disableUnderline: false }}
                            />
                            <TextField
                                label="Email Address"
                                name="email"
                                variant="standard"
                                value={formData.email}
                                onChange={handleChange}
                                fullWidth
                                sx={{
                                    flex: 1,
                                }}
                                InputProps={{ disableUnderline: false }}
                            />
                        </Box>

                        <TextField
                            label="Message"
                            name="message"
                            variant="standard"
                            value={formData.message}
                            onChange={handleChange}
                            fullWidth
                            multiline
                            rows={6}
                            InputProps={{ disableUnderline: false }}
                        />
                    </DialogContent>

                    <DialogActions sx={{ justifyContent: 'flex-end', mt: 3 }}>
                        <Button
                            onClick={handleSubmit}
                            sx={{
                                px: 4,
                                py: 1.5,
                                bgcolor: '#1e40af',
                                color: 'white',
                                borderRadius: '9999px',
                                textTransform: 'none',
                                fontWeight: 600,
                                '&:hover': {
                                    bgcolor: '#1e3a8a',
                                },
                            }}
                        >
                            Submit
                        </Button>
                    </DialogActions>
                </Dialog>

                <Snackbar
                    open={snackOpen}
                    autoHideDuration={3000}
                    onClose={() => setSnackOpen(false)}
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                >
                    <Alert
                        onClose={() => setSnackOpen(false)}
                        severity={snackSeverity}
                        variant="filled"
                        sx={{ width: '100%', fontWeight: 'bold', fontSize: '1rem' }}
                    >
                        {snackMessage}
                    </Alert>
                </Snackbar>



            </>
        );
}

export default Contact;