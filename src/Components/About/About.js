import React from 'react';
import { Container } from 'react-bootstrap';
import "./About.css"

const About = () => {
    return (
        <div className='font'>
            <div className='abou-flex'>
                <div className='width-half text-width'>
                    <h1>About us!</h1>
                </div>
                <div className='width-half'>
                    <img src="https://i.ibb.co/6nHFGVs/20943446-prev-ui.png" alt="" />
                </div>
            </div>
            <Container>
                <div className='history-div my-5'>
                    <div className='text-center my-4 history-underline'>
                        <h2><span className='span-color'>Medica Plus</span> History<span className='span-color'>!</span></h2>
                        <h3>EVERYTHING BEGAN IN A <span className='span-color'>GARAGE.</span></h3>
                        <p className='history-pera'>Aliquam magna nibh, mattis a urna nec, semper venenatis magna. Cras suscipit neque libero, <br /> in bibendum orci scelerisque mollis. Nunc auctor ut erat vel euismod. Aenean tristique leo eros, at gravida massa semper eu.</p>
                    </div>
                </div>
                <div className='d-flex'>
                    <div className='maing-text main-text-margin'>
                        <div className='history-div'>
                            <h1 className='our-history-underline mt-3 mb-4'>Our <span className='span-color'>Stories</span></h1>
                        </div>
                        <div>
                            <h4>Back in 1982</h4>
                            <p className='history-pera'>Aliquam magna nibh, mattis a urna nec, semper venenatis magna. Cras suscipit neque libero, in bibendum orci scelerisque mollis. Nunc auctor ut erat vel euismod. Aenean tristique leo eros, at gravida massa semper eu.</p>
                            <p className='history-pera'>Fusce imperdiet libero et eros tincidunt, vitae accumsan purus pulvinar. Vivamus varius, metus et scelerisque viverra. Morbi mattis, lorem sit amet gravida eleifend, nisl felis tincidunt dui, nec porta turpis ligula eu nisl. Donec lacus dolor, facilisis at tortor ac, congue vulputate.</p>
                        </div>
                        <div>
                            <h4>The tipping point</h4>
                            <p className='history-pera'>Proin nec tempus nulla, et euismod nulla. Donec ut sem ipsum. Integer ultricies nisi sed augue interdum porta. Vestibulum ac aliquam risus, ac dictum magna. Fusce lacus arcu, facilisis eu odio nec, varius vestibulum sem.</p>
                            <p className='history-pera'>Nulla venenatis auctor quam, ac porta lectus dictum in
                                <p className='ms-4 history-pera'>
                                    <br />Aliquam sodales nisi sit amet lorem
                                    <br />Suspendisse vulputate tellus in justo <br />convallis imperdiet
                                    <br />Morbi id lorem consequat, sodales mi non
                                    <br />Cras fringilla efficitur elementum
                                    <br />Nulla venenatis auctor quam, ac porta <br />lectus dictum in
                                    <br />Aliquam sodales nisi sit amet lorem</p></p>
                            <p className='history-pera'>Aliquam sodales facilisis dolor, feugiat elementum tellus condimentum at. Mauris sem nisi, dictum eget facilisis quis, placerat eu nisl. Phasellus consectetur pharetra elit id maximus. Aliquam facilisis sodales erat, sit amet euismod eros dignissim aliquam.</p>
                        </div>
                    </div>
                    <div className='side-bar'>
                        <div className='mb-4'>
                            <div>
                                <img src="https://i.ibb.co/SmyK0hD/heart.jpg" alt="" />
                            </div>
                            <div>
                                <h2>Our Missions</h2>
                                <p className='history-pera'>Proin nec lacus lacus. Sed vitae consectetur est, et mattis felis. Fusce lacinia nibh vitae fermentum finibus. Donec malesuada efficitur dapibus. Cras euismod nunc tellus.</p>
                                <a className='read-more' href="https://www.wikipedia.org/">Read more</a>
                            </div>
                        </div>
                        <div className='mb-3'>
                            <div>
                                <img src="https://i.ibb.co/VppBLyk/heart2.jpg" alt="" />
                            </div>
                            <div>
                                <h2>Our Vision & Plan</h2>
                                <p className='history-pera'>Proin nec lacus lacus. Sed vitae consectetur est, et mattis felis. Fusce lacinia nibh vitae fermentum finibus. Donec malesuada efficitur dapibus. Cras euismod nunc tellus.</p>
                                <a className='read-more' href="https://www.wikipedia.org/">Read more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default About;