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
      <h2>Material visual</h2>
      <div style={carouselStyle}>
        <Slider {...settings}>
          <div>
            <img src="/imagenes/Foto1.jpg" alt="First slide" />
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
          <div>
            <img src="/imagenes/Foto2.jpg" alt="Second slide" />
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div>
            <img src="/imagenes/Foto3.jpg" alt="Third slide" />
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default MyCarousel;
