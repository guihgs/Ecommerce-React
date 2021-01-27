import React, { Component } from 'react';
import ColorVariation from '../ColorVariation';
import swal from 'sweetalert';
import './style.scss';

class DetailsProd extends Component {

    render(){
        const showAlert = (event) => {
            event.preventDefault();
            swal({
                position: 'top-end',
                icon: 'success',
                title: 'Produto adicionado ao carrinho',
                showConfirmButton: false,
                timer: 2000
            })
        }

        return (
            <div className="content--rightProd">
                <div className="content--product">
                    <div className="content--bread-crumb">
                        <div className="bread-crumb">
                            <ul>
                                <li>
                                    <a href="/">Hummel</a>
                                </li>
                                <li>
                                    <a href="/">Roupas</a>
                                </li>
                                <li>
                                    <a href="/">Camisetas</a>
                                </li>   
                            </ul>
                        </div>
                    </div>
                    <div className="content--infos-product">
                        <div className="content--name-product">
                            <h2 className="productName">Camiseta Hummel Brick Infantil</h2>
                        </div>
                        <div className="content--sku-reference">
                            <div className="skuReference">BR000081-M_6</div>
                        </div>
                        <div className="plugin-preco">
                            <div className="descricao-preco">
                                <div className="skuListPrice"><del>R$ 64,90</del></div>
                                <div className="skuBestPrice">R$ 29,90</div>
                            </div>
                        </div>
                        <div className="content--variation-prod">
                            <ul className="ul--tamanho">
                                <li className="li--tamanho">
                                    Tamanho
                                </li>
                                <li>
                                <div className="div-tamanho">
                                    <input type="radio" data-value="6" className="input-tamanho" id="tamanho_0"/>
                                    <label htmlFor="tamanho_0" className="label-tamanho">6</label>

                                    <input type="radio" data-value="8" className="input-tamanho" id="tamanho_1"/>
                                    <label htmlFor="tamanho_1" className="label-tamanho">8</label>

                                    <input type="radio" data-value="10" className="input-tamanho" id="tamanho_2"/>
                                    <label htmlFor="tamanho_2" className="label-tamanho">10</label>

                                    <input type="radio" data-value="12" className="input-tamanho" id="tamanho_3"/>
                                    <label htmlFor="tamanho_3" className="label-tamanho">12</label>
                
                                    <input type="radio" data-value="14" className="input-tamanho" id="tamanho_3"/>
                                    <label htmlFor="tamanho_3" className="label-tamanho">14</label>
                                </div>
                                </li>
                            </ul> 
                        </div>
                        <ColorVariation/>
                        <div className="content--buy-prod">
                          <a href="/" target="_top" className="buy-button-ref" onClick={showAlert}></a>  
   
                        </div>
                        <div className="content--short-description-prod">
                            <h3>Descrição</h3>
                            <div className="productDescription">
                                <p>A camiseta infantil Brick, tem modelagem adequada para as crianças um visual despojado e o icônico logo da hummel na parte frontal. É uma camiseta causal, super confortável e com um design clássico....</p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default DetailsProd;