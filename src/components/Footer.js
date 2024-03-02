import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGoogle, faInstagram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-light text-center text-white">
  <div className="container p-4 pb-0">
    <section className="mb-4">
      <a className="btn btn-floating m-1 text-white" style={{ backgroundColor: '#3b5998' }} href='https://www.facebook.com/profile.php?id=100005984146817&mibextid=ZbWKwL' role='button'>
        <FontAwesomeIcon icon={faFacebookF} />
      </a>

      <a className="btn btn-floating m-1 text-white" style={{ backgroundColor: '#55acee' }} href='#!' role='button'>
        <FontAwesomeIcon icon={faTwitter} />
      </a>

      <a className="btn btn-floating m-1 text-white" style={{ backgroundColor: '#dd4b39' }} href='mailto:luisdavidpereira672@gmail.com' role='button'>
        <FontAwesomeIcon icon={faGoogle} />
      </a>

      <a className="btn btn-floating m-1 text-white" style={{ backgroundColor: '#ac2bac' }} href='https://www.instagram.com/_luis_david_09?igsh=MTZ1ZnFtcjI2eGVnMg==' role='button'>
        <FontAwesomeIcon icon={faInstagram} />
      </a>

      <a className="btn btn-floating m-1 text-white" style={{ backgroundColor: '#0082ca' }} href='https://www.linkedin.com/in/david-pereira-34389a140?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' role='button'>
        <FontAwesomeIcon icon={faLinkedinIn} />
      </a>
    </section>
  </div>

  <div className="text-center p-3" style={{ backgroundColor: '#ffffff', color: '#000000' }}>
    © 2024 Derechos de autor: José Pereira Altamirano
  </div>
</footer>

  );
}

export default Footer;
