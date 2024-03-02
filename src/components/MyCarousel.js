import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../css/MyCarousel.css'; // Importa un archivo CSS para definir estilos personalizados

const MyCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const carouselStyle = {
    marginTop: '60px', // Ajusta el margen superior según sea necesario
  };

  return (
    <div>
      <h4 style={{ marginBottom: '20px', color: '#333', fontFamily: 'Impact, sans-serif' }} >Material visual</h4>
      <div style={carouselStyle}>
        <Slider {...settings}>
          <div>
            <img src="/imagenes/Foto1.jpg" alt="First slide" />
          </div>
          <div>
            <img src="/imagenes/Foto2.jpg" alt="Second slide" />  
          </div>
          <div>
            <img src="/imagenes/Foto3.jpg" alt="Third slide" />           
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default MyCarousel;
