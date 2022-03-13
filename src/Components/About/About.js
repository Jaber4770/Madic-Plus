import React from 'react';
import { Container } from 'react-bootstrap';
import "./About.css"

const About = () => {
    return (
        <div>
            <div className='abou-flex'>
                <div className='width-half text-width'>
                    <h1>About us!</h1>
                </div>
                <div className='width-half'>
                    <img src="https://i.ibb.co/6nHFGVs/20943446-prev-ui.png" alt="" />
                </div>
            </div>
            <Container>
                <div className='history-div'>
                    <div className='text-center my-4 history-underline'>
                        <h2><span className='span-color'>Medica Plus</span> History<span className='span-color'>!</span></h2>
                        <h3>EVERYTHING BEGAN IN A <span className='span-color'>GARAGE.</span></h3>
                        <p>Pellentesque semper quis neque dictum hendrerit. Sed nulla ipsum, porttitor pharetra tortor in, <br></br>
                            consequat imperdiet nisi. Phasellus at quam tristique, cursus tellus vitae, convallis neque.</p>
                    </div>
                </div>
                <div>
                    <div className='maing-text'>

                    </div>
                    <div className='side-bar'>

                    </div>
                </div>
            </Container>
        </div>
    );
};

export default About;