import { Icon } from '@iconify/react/dist/iconify.js';
import parser from 'html-react-parser';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import SocialLinks from '../SocialLinks/SocialLinks';
import './Hero.scss';

const Hero = ({ data, socialData }) => {
  const { subTitle, designation, imgLink, title, bgImgLink, fiverr, upwork, youtube } = data;
   
  useEffect(() => {
    const handleScroll = () => {
      const scrollValue = window.scrollY;
      const heroElements = document.querySelector('.st-hero-wrap .st-hero-img');
      if (heroElements) {
        heroElements.style.right = `${scrollValue * -0.1}px`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="home" className="st-hero-wrap">
      <div
        className="st-hero st-bg st-style1"
        style={{ backgroundImage: `url(${bgImgLink})` }}
      >
        <div className="st-height-b80 st-height-lg-b80"></div>
        <div className="container">
          <div className="st-hero-text">
            <h3 data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
              {subTitle}
            </h3>
            <h1 data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
              {parser(title)}
            </h1>
            <h2 data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
              {designation}
            </h2>
            
            <div
              className="st-hero-btn"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="500"
            >
             
             {/* Link to Upwork */}
             <a className='st-btn st-style1 st-color1  mr-5' href={upwork} target="_blank" rel="noopener noreferrer">
                Hire me on Upwork
              </a>

              {/* Link to Fiverr */}
              <a className='st-btn st-style1 st-color3' href={fiverr} target="_blank" rel="noopener noreferrer">
                Hire me on Fiverr
              </a>
              {/* Link to youtube */}
              <a className='st-btn st-style3 st-color3' href={youtube} target="_blank" rel="noopener noreferrer">
                <span className="st-social-icon"><Icon icon="fa6-brands:youtube"/></span>
                        
              </a>

             
            </div>
          </div>
        </div>
      </div>
      <div className="st-hero-img st-to-right">
        <img
          src={`${imgLink}`}
          alt="Hero"
          data-aos="fade-left"
          data-aos-delay="1000"
          data-aos-duration="1000"
        />
        <div
          className="st-social-group"
          data-aos="fade-right"
          data-aos-delay="1000"
          data-aos-duration="1000"
        >
          <SocialLinks data={socialData}  />
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = {
  data: PropTypes.object,
  socialData: PropTypes.array,
};

export default Hero;
