import React, { Component } from 'react';
import Slider from 'react-slick';
import { SRLWrapper } from "simple-react-lightbox";
import './style.scss';

class MainProd extends Component {
        
        state = {
            image: [],
            thumb: [],
        }

    componentDidMount(){
        fetch("/api/catalog_system/pub/products/search/?fq=productId:3760")
        .then(res => res.json())
        .then((result) => {
                this.setState({
                    image: result[0].items[0].images[0].imageUrl,
                    thumb: result[0].items[0].images[1].imageUrl
                });
            }
        )   
    }

    render(){
        const carousel = {
            dots: true,
            infinite: false,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive:[
                {
                    breakpoint: 2000,
                    settings: 'unslick'
                },
                {
                    breakpoint: 900,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                }
            ]
        };


        const {image, thumb} = this.state;
        return (
            <div className="content--leftProd">
                <div className="slider-img">
                <SRLWrapper>
                    <div>
                    <Slider {...carousel}>
                    <div>
                        <img src={image}/>
                    </div>
                    <div>
                        <img src={thumb}/>
                    </div>
                    </Slider>
                    </div>
                </SRLWrapper>
                </div>
            </div>
        );
    }
}
export default MainProd;