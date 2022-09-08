import React, { useEffect, useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import LogoBMCE from '../../images/logoBMCE.png';
import "./navBarStyle.css"
import '@fortawesome/fontawesome-free/js/all.js';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentToken } from '../../features/auth/authSlice';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const NavBar =()=>{
    // const rightBtnTxt= localStorage.getItem("user")!=undefined ? "Ma Profile":
    //const rightBtnLinkTo=localStorage.getItem("user")!=undefined ? "/home":"/new-access-code"
    const [rightBtnTxt,setRightBtnTxt]=useState("Ma demande");
    const [rightBtnLinkTo,setRightBtnLinkTo]=useState("/new-access-code");
    const location=useLocation();

    const token=useSelector(selectCurrentToken);
    useEffect(() => {
        if(localStorage.getItem("user")!=undefined){
            setRightBtnTxt("Ma Profile")
            setRightBtnLinkTo("/home")
        }
        else{
            setRightBtnTxt("Ma demande")
            setRightBtnLinkTo("/login")
        }
    }, [location])
    
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    return (
        <AppBar position="static" style={{ backgroundColor: 'white' }} >
            <Container maxWidth="xl w-100" style={{ color: '#2E3B55',margin:'-7px'}} >
                <Toolbar disableGutters sx={{justifyContent:"space-between"}}>
                    <Link to="/accueil">
                        <img src={LogoBMCE} className="NavBar-Logo" alt="" width="150px" sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}/>
                    </Link>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }} style={{ color: '#2E3B55' }}>
                        <IconButton
                            size="large" aria-label="account of current user" aria-controls="menu-appbar"
                            aria-haspopup="true" onClick={handleOpenNavMenu} color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar" anchorEl={anchorElNav}
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'left', }}
                            keepMounted  transformOrigin={{ vertical: 'top', horizontal: 'left', }}
                            open={Boolean(anchorElNav)} onClose={handleCloseNavMenu} sx={{display: { xs: 'block', md: 'none' }, justifyContent: 'space-between'}}
                        >
                            <Link to='/' className='text-decoration-none'>
                                <MenuItem key="Accueil" onClick={handleCloseNavMenu} style={{ color: '#2E3B55' }}>
                                    <Typography textAlign="center">Accueil</Typography>
                                </MenuItem>
                            </Link>
                            <Link to='/comment-ca-marche' className='text-decoration-none'>
                                <MenuItem key="CCM" onClick={handleCloseNavMenu} style={{ color: '#2E3B55' }}>
                                    <Typography textAlign="center">Comment ça marche ?</Typography>
                                </MenuItem>
                            </Link>
                            <Link to='/contact' className='text-decoration-none'>
                                <MenuItem key="Contact" onClick={handleCloseNavMenu} style={{ color: '#2E3B55' }}>
                                    <Typography textAlign="center">Contact</Typography>
                                </MenuItem>
                            </Link>
                            <Link to='/faq' className='text-decoration-none'>
                                <MenuItem key="FAQ" onClick={handleCloseNavMenu} style={{ color: '#2E3B55' }}>
                                    <Typography textAlign="center">FAQ</Typography>
                                </MenuItem>
                            </Link>
                        </Menu>
                    </Box>
                    <Toolbar sx={{marginRight:'-30px'}}>
                        <Box sx={{ display: { xs: 'none', md: 'flex' },marginBottom:'-5px',marginRight:'10px'}}>
                            <Link to="/accueil" className='text-decoration-none'>
                                <Button key="Accueil" name="Accueil" onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block','&:hover': { background: 'white' } }} style={{ color: '#2E3B55' , textTransform: 'none'}} >
                                    <span className='navBar-btns'>
                                        <i className="fa fa-house navbar-icons"></i>
                                        Accueil
                                    </span>
                                </Button>
                            </Link>
                            <Link to="/comment-ca-marche" className='text-decoration-none'>
                            <Button key="CCM" name="CCM" onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block','&:hover': { background: 'white' } }} style={{ color: '#2E3B55' , textTransform: 'none'}} >
                                <span className='navBar-btns'>
                                    <i className="fa fa-circle-question navbar-icons"></i>
                                    Comment ça marche ?
                                </span>
                            </Button>
                            </Link>
                            <Link to="/contact" className='text-decoration-none'>
                            <Button key="Contact" name="Contact" onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block','&:hover': { background: 'white' } }} style={{ color: '#2E3B55' , textTransform: 'none'}} >
                                <span className='navBar-btns'>
                                    <i className="fa fa-phone navbar-icons"></i>
                                    Contact
                                </span>
                            </Button>
                            </Link>
                            <Link to="/faq" className='text-decoration-none'>
                            <Button key="FAQ" name="FAQ" onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block','&:hover': { background: 'white' } }} style={{ color: '#2E3B55' ,textTransform: 'none' }}>
                                <span className='navBar-btns'>
                                    <i className="fa fa-message navbar-icons" style={{marginBottom:'0px'}}></i>
                                    FAQ
                                </span>
                            </Button>
                            </Link>
                        </Box>
                        <Box>
                            <Link to={rightBtnLinkTo} className='text-decoration-none'>
                                <Button variant="contained" name="MaDemande" onClick={handleCloseNavMenu} sx={{ color: 'white', background:"#00BDBB", '&:hover': { background: '#279D2C' }}} style={{textTransform: 'none'}}>
                                    <i className="fa fa-user navbar-icons" style={{marginBottom:'1px',marginRight:"10px",}}></i>
                                    {rightBtnTxt}
                                </Button>
                            </Link>
                            <Menu sx={{ mt: '45px' }} id="menu-appbar" anchorEl={anchorElUser} anchorOrigin={{ vertical: 'top', horizontal: 'right', }}
                                keepMounted transformOrigin={{ vertical: 'top', horizontal: 'right', }} open={Boolean(anchorElUser)} onClose={handleCloseUserMenu}
                            >
                            </Menu>
                        </Box>
                    </Toolbar>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default NavBar;