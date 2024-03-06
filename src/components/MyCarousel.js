import React, { useRef, useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import '../css/MyCarousel.css';
import { Typography, Dialog, DialogTitle, DialogContent, Button } from '@material-ui/core'; // Importa los componentes necesarios

const MyCarousel = () => {
  const swiperRef = useRef(null);
  const [openImageDialog, setOpenImageDialog] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState(null);

  useEffect(() => {
    swiperRef.current = new Swiper('.swiper-container', {
      loop: true,
      slidesPerView: 'auto', // Ahora el número de diapositivas por vista será automático
      spaceBetween: 30,
      centeredSlides: true,
      grabCursor: true,
      effect: 'coverflow',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      loopAdditionalSlides: 3,
      loopedSlides: 7,
      // Configuración para que el carrusel se adapte al redimensionar la ventana
      breakpoints: {
        // Cuando el ancho de la ventana sea menor o igual a 768px
        768: {
          slidesPerView: 3, // Mostrar 3 diapositivas por vista
          spaceBetween: 30, // Espacio entre las diapositivas
        },
      },
    });

    // Iniciar temporizador para avanzar las diapositivas automáticamente
    const interval = setInterval(() => {
      swiperRef.current.slideNext();
    }, 3000);

    // Detener el temporizador al salir del componente
    return () => clearInterval(interval);
  }, []);

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
    setOpenImageDialog(true);
  };

  const handleCloseImageDialog = () => {
    setOpenImageDialog(false);
  };

  return (
    <div className="swiper-container">
      <Typography variant="h5" gutterBottom style={{ marginTop: '20px', color: '#333', fontFamily: 'Impact, sans-serif', textAlign: 'center' }}>
        Material Visual
      </Typography>
      <div className="swiper-wrapper">
        <div className="swiper-slide" onClick={() => handleImageClick("/imagenes/imagen1.jpeg")}>
          <img src="/imagenes/imagen1.jpeg" alt="Slide 1" className="swiper-slide-image" />
        </div>
        <div className="swiper-slide" onClick={() => handleImageClick("/imagenes/imagen2.jpeg")}>
          <img src="/imagenes/imagen2.jpeg" alt="Slide 2" className="swiper-slide-image" />
        </div>
        <div className="swiper-slide" onClick={() => handleImageClick("/imagenes/imagen3.jpg")}>
          <img src="/imagenes/imagen3.jpg" alt="Slide 3" className="swiper-slide-image" />
        </div>
        <div className="swiper-slide" onClick={() => handleImageClick("/imagenes/imagen4.jpg")}>
          <img src="/imagenes/imagen4.jpg" alt="Slide 4" className="swiper-slide-image" />
        </div>
        <div className="swiper-slide" onClick={() => handleImageClick("/imagenes/imagen5.jpg")}>
          <img src="/imagenes/imagen5.jpg" alt="Slide 5" className="swiper-slide-image" />
        </div>
        <div className="swiper-slide" onClick={() => handleImageClick("/imagenes/imagen6.jpg")}>
          <img src="/imagenes/imagen6.jpg" alt="Slide 6" className="swiper-slide-image" />
        </div>
        <div className="swiper-slide" onClick={() => handleImageClick("/imagenes/imagen7.jpg")}>
          <img src="/imagenes/imagen7.jpg" alt="Slide 7" className="swiper-slide-image" />
        </div>
      </div>
      <div className="swiper-pagination"></div>

      {/* Diálogo para mostrar la imagen en grande */}
      <Dialog open={openImageDialog} onClose={handleCloseImageDialog}>
        <DialogTitle>Imagen en Grande</DialogTitle>
        <DialogContent>
          <img src={selectedImage} alt="Imagen en Grande" style={{ width: '100%' }} />
          <Button onClick={handleCloseImageDialog} variant="contained" color="secondary" style={{ marginLeft: 'auto', marginTop: '10px' }}>
            Cerrar
          </Button>


        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MyCarousel;
