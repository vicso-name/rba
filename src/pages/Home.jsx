import { Swiper, SwiperSlide } from 'swiper/react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Navigation} from 'swiper';
import SwiperCore, { Keyboard, Mousewheel } from "swiper/core";
import 'swiper/css/navigation';
import 'swiper/css';

SwiperCore.use([Keyboard, Mousewheel]);

function Home(){

    const paralaBackground = {
        backgroundImage: 'url(https://vicso-name.github.io/rba/img/paralax-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
    };

    const scrollDownBackground = {
        backgroundImage: 'url(https://vicso-name.github.io/rba/img/arrow-down-white.svg)'
    };
    

    const [pageData, setPageData] = useState([]);

    useEffect(() => {
        axios.get('https://dev-rbabrand.pantheonsite.io/wp-json/wp/v2/pages/10')
          .then(response => {
            setPageData(response.data);
          })
          .catch(error => {
            console.log(error);
          });

        const links = document.querySelectorAll('.scroll');
            links.forEach(link => {
            link.style.scrollBehavior = 'smooth';
        });

    }, []);

    const handleClick = event => {
        event.preventDefault();

        const link = event.target;
        const anchor = link.getAttribute('href');
        const distanceFromTop = document.querySelector(anchor).offsetTop;

        window.scrollTo({
        top: distanceFromTop,
        behavior: 'smooth'
        });
    };


    return(

       

        <div className="wrapper">


            <section className="hero-section">
                <figure className="bg-visual">
                    <video className="hero-video" autoPlay>
						<source src="https://vicso-name.github.io/rba/img/hero_image_preview.mp4" type="video/mp4" />
					</video>
                </figure>
                <a style={scrollDownBackground} onClick={handleClick} href="#intro" className="scroll-down scroll-to scroll" >Down</a> 
                <div className="container">
                    <div className="row">
                        <ul className="hero-section__content">
                        {pageData && pageData.acf && pageData.acf.hero_section_description && (
                            pageData.acf.hero_section_description.map(item => (
                                <li>{item.description_item}</li>
                            ))
                        )}
                        </ul>
                    </div>
                </div>         
            </section>

            <section id="intro" className="services">
                <div className="container">
                    <div className="row">
                        <div className="services-content">
                            
                            {pageData && pageData.acf && pageData.acf.our_services_section_title && (
                               <h2>{pageData?.acf?.our_services_section_title}</h2>
                            )}

                            <ul className="service-list">
                            {pageData && pageData.acf && pageData.acf.our_services && (
                                pageData.acf.our_services.map(item => (
                                    <li>{item.services_item}</li>
                                ))
                            )}
                            </ul>

                        </div>
                    </div>
                </div>
            </section>

            <section className='about-description'>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            {pageData && pageData.acf && pageData.acf.description_section_title && (
                               <h2 className='about-description__title'>{pageData?.acf?.description_section_title}</h2>
                            )}
                        </div>
                        <div className="col-10">
                            {pageData && pageData.acf && pageData.acf.description_section && (
                                <div dangerouslySetInnerHTML={{ __html: pageData.acf.description_section }} />
                            )}
                        </div>
                    </div>
                </div>
            </section>

            <section className='parallax' style={paralaBackground}>

            </section>

            <section className='slogan'>
                <div className='container'>
                    <div className='row'>
                        {pageData && pageData.acf && pageData.acf.slogan_section && (
                            <h2 className='slogan--title'>{pageData?.acf?.slogan_section}</h2>
                        )}
                    </div>
                </div>
            </section>

            <div className="resone-section">
                <div className="container">
                    <div className="row">
                    <div className="col">
                            {pageData && pageData.acf && pageData.acf.resone_section_title && (
                               <h2 className='about-description__title'>{pageData?.acf?.resone_section_title}</h2>
                            )}
                        </div>
                        <div className="col-10">
                            {pageData && pageData.acf && pageData.acf.resone_section_description && (
                                <div dangerouslySetInnerHTML={{ __html: pageData.acf.resone_section_description }} />
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <section className="brands">
                <div className='brands-title'>
                    {pageData && pageData.acf && pageData.acf.brand_section_title && (
                        <h2>{pageData?.acf?.brand_section_title}</h2>
                    )}
                </div>
                <div className="container">
                    <div className="row">
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={50}
                            slidesPerView={4}
                            loop={true}
                        >
                             {pageData && pageData.acf && pageData.acf.brands && (
                                pageData.acf.brands.map(item => (
                                    <SwiperSlide><img src={item.brand_image} alt="" /></SwiperSlide>
                                ))
                            )}
                          
                        </Swiper>
                    </div>
                </div>
            </section>

            <section className="call-action">
                <div className="container">
                    <div className="row">
                        <div className="call-action-content">
                            <h2>Let's build your brand</h2>
                        </div>
                    </div>
                </div>
                <figure className="bg-visual">
                    <img src="https://vicso-name.github.io/rba/img/hero-section.jpg" alt="#" />
                </figure> 
            </section>

        </div>
        
        
    )
}

export default Home;