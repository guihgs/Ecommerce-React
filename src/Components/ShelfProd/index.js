import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./style.scss"

const productList = [3788, 3877, 3756, 3896, 1948017366];

class ShelfProd extends Component{
        produto = [];
        state = {
        
        }
     
      async productListRes(list){
            const response = await fetch(`/api/catalog_system/pub/products/search/?fq=productId:${productList[list]}`)
            const data = await response.json();
            this.produto.push(data);
            console.log(data);
            this.setState({
                produto: this.produto
            }) 
        }
        

      componentDidMount(){
        for(let cont = 0; cont < productList.length; cont++){
            this.productListRes(cont)
        }
    }
    
        render(){
       
        const {produto} = this.produto;

        const carousel = {
            dots: true,
            infinite: false,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 4,
            responsive:[
                {
                    breakpoint: 1191,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                      slidesToShow: 3,
                      slidesToScroll: 3
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                      slidesToShow: 2, 
                      slidesToScroll: 2
                    }
                }
            ]
        };

        return(
            <section className="content--carouselColection">
                {this.state.produto ? (
                                    <div className="content">
                                    <h3>Você pode gostar</h3>
                                    <div className="slider-img">
                                        <Slider {...carousel}>
                                                {this.produto.map(itens => (
                                                    <li className="slick-product" key={itens[0].productId}>
                                                        <div className="box-item">
                                                            <a className="product-image" href={itens[0].items[0].images[0].imageUrl} tabIndex="-1">
                                                                <img src={itens[0].items[0].images[0].imageUrl}></img>
                                                                <span className="imgHover"></span>
                                                            </a>
                                                            <h3 className="product-name">
                                                                <a title={itens[0].productName} href={itens[0].link}>
                                                                    {itens[0].productName}
                                                                </a>
                                                            </h3>
                                                            <div className="box-available">
                                                                <div className="price">
                                                                <a title={itens[0].productName} href={itens[0].link}>
                                                                   <div className="prices">
                                                                       <span className="best-price">
                                                                       <span className={itens[0].items[0].sellers[0].commertialOffer.ListPrice === itens[0].items[0].sellers[0].commertialOffer.Price ? "hide-price" : "old-price"}><del>R$ {itens[0].items[0].sellers[0].commertialOffer.ListPrice.toString().replace(".",",")}</del></span>
                                                                            <strong>R$ {itens[0].items[0].sellers[0].commertialOffer.Price.toString().replace(".",",")}</strong>
                                                                       </span>
                                                                   </div>
                                                                </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                ))}
                                        </Slider>
                                    </div>
                                </div>
                ) : (
                    <div className="content">
                        <h3>Produtos Indisponiveis</h3>
                    </div>
                )}
            </section>
        );
    }
}

export default ShelfProd;