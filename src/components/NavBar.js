import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import '../css/Menu.css'
import '../css/Navbar.css'


export function NavBar() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [openDialog, setOpenDialog] = useState(false);
    const [openImageDialog, setOpenImageDialog] = useState(false); // Nuevo estado para controlar el clic en la imagen
    const [confirmDownloadOpen, setConfirmDownloadOpen] = useState(false); // Estado para controlar la apertura del diálogo de confirmación

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleImageClick = () => {
        setOpenImageDialog(true); // Abrir el diálogo solo cuando se hace clic en la imagen
    };

    const handleCloseImageDialog = () => {
        setOpenImageDialog(false);
    };

    const handleContactClick = () => {
        setOpenDialog(true); // Abrir el diálogo cuando se hace clic en el botón "Contacto"
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };


    const handleDownloadConfirmationOpen = () => {
        setConfirmDownloadOpen(true);
    };

    const handleDownloadConfirmationClose = () => {
        setConfirmDownloadOpen(false);
    };

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const shouldBeScrolled = scrollTop > 0;
            setIsScrolled(shouldBeScrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleDownloadConfirm = () => {
        // Lógica para descargar el documento
        const link = document.createElement('a');
        link.href = '/Documentos/David.pdf'; // Ruta al documento
        link.download = 'David.pdf'; // Nombre del archivo
        document.body.appendChild(link);
        link.click();
        handleDownloadConfirmationClose(); // Cierra el diálogo de confirmación
    };

    const handleMenuItemClick = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.classList.add('scroll-transition');
            setTimeout(() => {
                section.classList.remove('scroll-transition');
            }, 500); // Elimina la clase de transición después de 0.5 segundos
        }
        handleClose(); // Cierra el menú
    };

    return (
        <div className={isScrolled ? 'fixed-navbar' : ''}>
            <AppBar position="static" sx={{ backgroundColor: '#066098' }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={handleClick}
                    >
                        <MenuIcon />
                    </IconButton>

                    <div style={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
                        <Avatar
                            alt="Foto de perfil"
                            src="/imagenes/david.jpg"
                            sx={{ width: 40, height: 40, marginRight: 1 }}
                            onClick={handleImageClick}
                        />
                        <Typography variant="h6" component="div" style={{ fontFamily: 'Josefin Slab, serif' }}>
                            Ing. Luis David Pereira
                        </Typography>
                    </div>

                    <div>
                        <Button color="inherit" onClick={handleContactClick}>
                            <img src="/iconos/contacto.png" alt="Contacto" style={{ width: '45px', height: 'auto' }} />
                        </Button>
                    </div>
                </Toolbar>
            </AppBar>
            <Menu
    id="menu"
    anchorEl={anchorEl}
    open={Boolean(anchorEl)}
    onClose={handleClose}
>
    <MenuItem component="a" href="#perfil-profesional" onClick={handleMenuItemClick}>
        {/* Agrega el icono desde tu carpeta de iconos */}
        <img src="iconos/ingenieros.png" alt="Icono 1" style={{ marginRight: '10px', width: '20px', height: '20px', color: '#FFD700' }} />
        Perfil Profesional
    </MenuItem>
    <MenuItem component="a" href="#habilidades-profesionales" onClick={handleMenuItemClick}>
        {/* Agrega el icono desde tu carpeta de iconos */}
        <img src="iconos/experiencia.png" alt="Icono 2" style={{ marginRight: '10px', width: '20px', height: '20px', color: '#FF6347' }} />
        Habilidades Profesionales
    </MenuItem>
    <MenuItem component="a" href="#experiencia-profesional" onClick={handleMenuItemClick}>
        {/* Agrega el icono desde tu carpeta de iconos */}
        <img src="iconos/carrera-profesional.png" alt="Icono 3" style={{ marginRight: '10px', width: '20px', height: '20px', color: '#7FFFD4' }} />
        Experiencia Profesional
    </MenuItem>
    <MenuItem component="a" href="#educacion" onClick={handleMenuItemClick}>
        {/* Agrega el icono desde tu carpeta de iconos */}
        <img src="iconos/educacion.png" alt="Icono 4" style={{ marginRight: '10px', width: '20px', height: '20px', color: '#9370DB' }} />
        Educación
    </MenuItem>
    <MenuItem component="a" href="#informacion-adicional" onClick={handleMenuItemClick}>
        {/* Agrega el icono desde tu carpeta de iconos */}
        <img src="iconos/informacion.png" alt="Icono 5" style={{ marginRight: '10px', width: '20px', height: '20px', color: '#FFA500' }} />
        Información adicional
    </MenuItem>
    <MenuItem component="a" href="#logros-y-competencias" onClick={handleMenuItemClick}>
        {/* Agrega el icono desde tu carpeta de iconos */}
        <img src="iconos/trofeo.png" alt="Icono 6" style={{ marginRight: '10px', width: '20px', height: '20px', color: '#FF69B4' }} />
        Logros y competencias
    </MenuItem>
    <MenuItem onClick={handleDownloadConfirmationOpen}>
        {/* Agrega el icono desde tu carpeta de iconos */}
        <img src="iconos/curriculum.png" alt="Icono 7" style={{ marginRight: '10px', width: '20px', height: '20px', color: '#32CD32' }} />
        Documentos de cv
    </MenuItem>
</Menu>



            {/* Diálogo de confirmación de descarga */}
            <Dialog open={confirmDownloadOpen} onClose={handleDownloadConfirmationClose}>
                <DialogTitle>Documentos</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        ¿Desea descargar los documentos de respaldo?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDownloadConfirmationClose} color="primary">
                        No
                    </Button>
                    <Button onClick={handleDownloadConfirm} color="primary" autoFocus>
                        Sí
                    </Button>
                </DialogActions>
            </Dialog>

            {/* Dialog para mostrar el modal de contacto */}
            <Dialog open={openDialog} onClose={handleCloseDialog} style={{ zIndex: 9999 }}>
                <DialogTitle align="center" style={{ fontFamily: 'Arial, sans-serif' }}>¿Cómo contactarme?</DialogTitle>
                <DialogContent>
                    <div style={{ textAlign: 'center' }}>
                        <p style={{ display: 'flex', alignItems: 'center', fontFamily: 'Arial, sans-serif' }}>
                            <img src="/iconos/mapas.png" alt="Google Maps" style={{ width: '24px', marginRight: '10px' }} />
                            Heredia, Costa Rica
                        </p>
                        <p style={{ display: 'flex', alignItems: 'center', fontFamily: 'Arial, sans-serif' }}>
                            <img src="/iconos/whatsapp.png" alt="WhatsApp" style={{ width: '24px', marginRight: '10px' }} />
                            <a href="https://wa.me/86673310" style={{ textDecoration: 'none', color: 'inherit' }}>86673310</a>
                        </p>
                        <p style={{ display: 'flex', alignItems: 'center', fontFamily: 'Arial, sans-serif' }}>
                            <img src="/iconos/gmail.png" alt="Gmail" style={{ width: '24px', marginRight: '10px' }} />
                            <a href="mailto:luisdavidpereira672@gmail.com" style={{ textDecoration: 'none', color: 'inherit' }}>luisdavidpereira672@gmail.com</a>
                        </p>
                    </div>
                </DialogContent>

            </Dialog>

            {/* Dialog para mostrar la imagen */}
            <Dialog open={openImageDialog} onClose={handleCloseImageDialog}>
                <DialogTitle>Foto de perfil</DialogTitle>
                <DialogContent>
                    <img src="/imagenes/david.jpg" alt="Foto de perfil" style={{ width: '100%' }} />
                </DialogContent>
            </Dialog>
        </div>
    );
}
