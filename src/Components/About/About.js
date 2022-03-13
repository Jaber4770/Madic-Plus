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
                        <div className='history-div'>
                            <h1 className='our-history-underline'>Our <span className='span-color'>Stories</span></h1>
                        </div>
                        <div>
                            <h3>Back in 1982</h3>
                            <p>Aliquam magna nibh, mattis a urna nec, semper venenatis magna. Cras suscipit neque libero, in bibendum orci scelerisque mollis. Nunc auctor ut erat vel euismod. Aenean tristique leo eros, at gravida massa semper eu.

                                Fusce imperdiet libero et eros tincidunt, vitae accumsan purus pulvinar. Vivamus varius, metus et scelerisque viverra. Morbi mattis, lorem sit amet gravida eleifend, nisl felis tincidunt dui, nec porta turpis ligula eu nisl. Donec lacus dolor, facilisis at tortor ac, congue vulputate.</p>
                        </div>
                        <div>
                            <h3>The tipping point</h3>
                            <p>Quisque eleifend volutpat orci nec fermentum. Curabitur quis dignissim nibh. Suspendisse potenti. Vivamus dictum volutpat dapibus. Fusce sed varius massa. Fusce et purus sit amet erat fermentum rutrum. Pellentesque pellentesque auctor vehicula. Integer ut ligula blandit, pellentesque neque in, hendrerit magna.

                                Nunc porta vehicula mauris, a hendrerit dolor tempor sed. Etiam euismod dignissim fermentum. Maecenas tincidunt finibus auctor.

                                Proin nec tempus nulla, et euismod nulla. Donec ut sem ipsum. Integer ultricies nisi sed augue interdum porta. Vestibulum ac aliquam risus, ac dictum magna. Fusce lacus arcu, facilisis eu odio nec, varius vestibulum sem.

                                Nulla venenatis auctor quam, ac porta lectus dictum in
                                Aliquam sodales nisi sit amet lorem
                                Suspendisse vulputate tellus in justo convallis imperdiet
                                Morbi id lorem consequat, sodales mi non
                                Cras fringilla efficitur elementum
                                Nulla venenatis auctor quam, ac porta lectus dictum in
                                Aliquam sodales nisi sit amet lorem
                                Aliquam sodales facilisis dolor, feugiat elementum tellus condimentum at. Mauris sem nisi, dictum eget facilisis quis, placerat eu nisl. Phasellus consectetur pharetra elit id maximus. Aliquam facilisis sodales erat, sit amet euismod eros dignissim aliquam.</p>
                        </div>
                    </div>
                    <div className='side-bar'>

                    </div>
                </div>
            </Container>
        </div>
    );
};

export default About;