import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Keyboard, Mousewheel } from "swiper/core";
import { useState, useEffect } from 'react';
import axios from 'axios';
import 'swiper/css';

SwiperCore.use([Keyboard, Mousewheel]);


function Projects(){ 
    
    const [works, setWorks] = useState([]);

    useEffect(() => {
        axios.get('https://dev-rbabrand.pantheonsite.io/wp-json/wp/v2/works')
          .then(response => {
            setWorks(response.data);
          })
          .catch(error => {
            console.log(error);
          });

          axios.get('https://dev-rbabrand.pantheonsite.io/wp-json/wp/v2/works?_embed&acf.service_name')
            .then(response => {
                setWorks(response.data);
            })
            .catch(error => {
                console.log(error);
            });

    }, []);
    
    return(

    <section className="projects">

            <Swiper
                slidesPerView={1}
                keyboard={true}
                mousewheel={true}
                loop={false}
            >
            {works.map(work => (
               
                <SwiperSlide>
                    <div key={work.id} className="project-item">
                        <span>{work.acf.service_name}</span>
                        <h2>{work.title.rendered}</h2>
                        <div dangerouslySetInnerHTML={{ __html: work.content.rendered }} />
                    </div>
                </SwiperSlide>    
              
            ))}
          </Swiper>
    
    </section>
) }

export default Projects;