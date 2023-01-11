import { useState, useEffect } from 'react';
import axios from 'axios';


function Contact(){

    const [pageData, setPageData] = useState([]);

    useEffect(() => {
        axios.get('https://dev-rbabrand.pantheonsite.io/wp-json/wp/v2/pages/22')
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

    return(

        <>
        
        <section className="contact-section-hero">

            <div className="container">
                <div className="row">
                    {pageData && pageData.acf && pageData.acf.hero_title && (
                        <h1>{pageData?.acf?.hero_title}</h1>
                    )}
                </div>
            </div>

        </section>
        
        <section className='contacts'>
            <div className='container'>
                <div className="row">
                    <div class="col">
                        {pageData && pageData.acf && pageData.acf.adress && (
                            <p dangerouslySetInnerHTML={{ __html: pageData.acf.adress }} />
                        )}
                    </div>
                    <div class="col-6 d-flex align-items-end justify-content-center">
                        {pageData && pageData.acf && pageData.acf.email && (
                             <a href={'mailto:'+pageData?.acf?.email}>{pageData?.acf?.email}</a>
                        )}
                    </div>
                    <div class="col d-flex align-items-end">
                        {pageData && pageData.acf && pageData.acf.phone_number && (
                             <a href={'tel:'+pageData?.acf?.phone_number}>{pageData?.acf?.phone_number}</a>
                        )}
                        
                    </div>
                </div>
            </div>
        </section>
        
        
        
        </>
        
        
    )
}

export default Contact;