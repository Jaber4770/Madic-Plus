import React from 'react';
import { Card } from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Doctor = ({ DoctorData }) => {
    const { name, special, img } = DoctorData;
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 2,
    };

    return (
        <div>
            <Slider {...settings}>
                <Card style={{ width: '18rem' }}>
                    <img src={img} alt="" />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            <p>Specialize in: {special}</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Slider>
        </div>

    );
};

export default Doctor;