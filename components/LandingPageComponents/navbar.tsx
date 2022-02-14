import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import AddIcon from "../Icons/AddIcon"
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import styles from "../../styles/Navbar.module.css"
import Link from 'next/link'

const pages = ['Audios', 'Home', 'Videos', 'About', 'Gallery'];


const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event: any): void => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: any): void => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (): void => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ "background": "white", "padding": "30px" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, color: 'black' }}
            className={styles.typographyColor}
          >

            DATTAKAKA.COM
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>

            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <AddIcon />

            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}

              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >

              <MenuItem onClick={handleCloseNavMenu} className={styles.typographyColor}>
                <Typography textAlign="center"><Link href="/audio">Audios</Link></Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu} className={styles.typographyColor}>
                <Link href="/"><a>Home</a></Link>
              </MenuItem>

              <MenuItem onClick={handleCloseNavMenu} className={styles.typographyColor}>
                <Typography textAlign="center">Videos</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu} className={styles.typographyColor}>
                <Typography textAlign="center"><Link href="/about">About</Link></Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu} className={styles.typographyColor}>
                <Typography textAlign="center">Gallery</Typography>
              </MenuItem>

            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none', color: 'black' } }}
            className="typography-color"
          >
            DATTAKAKA.COM
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>


            <Button

              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'black', display: 'block' }}
            >
              <Link href="/audio">Audios</Link>


            </Button>


            <Button

              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'black', display: 'block' }}
            >
              <Link href="/">Home</Link>

            </Button>
            <Button

              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'black', display: 'block' }}
            >
              Videos

            </Button>

            <Button

              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'black', display: 'block' }}
            >
              <Link href="/about">About</Link>

            </Button>
            <Button

              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'black', display: 'block' }}
            >
              Gallery

            </Button>

          </Box>


        </Toolbar>
      </Container>
    </AppBar >
  );
};
export default ResponsiveAppBar;