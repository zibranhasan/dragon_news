import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import download from '../../../assets/brands/download.jpg';
import fornews from '../../../assets/brands/fornews.jpg';

const BrandCarousel = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={download}
                    alt="First slide"
                />
                <Carousel.Caption>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={fornews}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>

                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
    );
};

export default BrandCarousel;