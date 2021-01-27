import React, { Component } from 'react';
import './style.scss';

class TabDescription extends Component {
    state = {
        active: false,
        active2: false,
        active3: false

    }

    render(){
        //const setActive = () => this.setState({active: !this.state.active})
        return (
            <section className="specification">
            <div className="content">
                <div className="content--description-prod" onClick={() => this.setState({active: !this.state.active})}>
                    <h2 className={this.state.active ? "atv" : " "}>Descrição</h2>
                    <div className={this.state.active ? "productDescription atv" : "productDescription"}>
                        A camiseta infantil Brick, tem modelagem adequada para as crianças um visual despojado e o icônico logo da hummel na parte frontal. É uma camiseta causal, super confortável e com um design clássico.
                    </div>
                </div>
                <div className="content--specification-prod">
                    <div className="caracteristicas" onClick={() => this.setState({active2: !this.state.active2})}>
                        <h4 className={this.state.active2 ? "group especificacoes atv" : "group especificacoes"}>Caracteristicas</h4>
                    </div>
                    <table cellSpacing="0" className={this.state.active2 ? "table--descricao atv" : "table--descricao"}>
                        <tbody>
                            <tr className="even">
                                <th className="name-field genero">Gênero</th>
                                <td className="value-field genero">Infantil</td>
                            </tr>
                            <tr>
                                <th className="name-field cor">Cor</th>
                                <td className="value-field cor">Cinza</td>
                            </tr>
                            <tr className="even">
                                <th className="name-field caracteristicas">Características</th>
                                <td className="value-field caracteristicas">
                                    • modelagem infantil
                                    <br/>
                                    • extremamente confortável
                                    <br/>
                                    • design clássico
                                </td>
                            </tr>
                            <tr>
                                <th className="name-field composicao">Composição</th>
                                <td className="value-field composicao">88% Algodão, 12% Poliéster</td>
                            </tr>
                            <tr className="even">
                                <th className="name-field guia-tamanho">Guia de Tamanhos</th>
                                <td className="value-field guia-tamanho">
                                    <table>
                                        <tbody className="tabela-tamanhos">
                                            <tr>
                                                <td className="vertical-top first-line"></td>
                                                <td className="vertical-middle first-line">Comprimento</td>
                                                <td className="vertical-bottom first-line">Torax</td>
                                                <td className="vertical-bottom first-line">Cintura</td>
                                                <td className="vertical-bottom first-line">Quadril</td>
                                            </tr>
                                            <tr>
                                                <td className="vertical-bottom first-line">P</td>
                                                <td className="vertical-bottom first-line">178</td>
                                                <td className="vertical-top first-line">94</td>
                                                <td className="vertical-bottom first-line">82</td>
                                                <td className="vertical-bottom first-line">97</td>
                                            </tr>
                                            <tr>
                                                <td className="vertical-bottom first-line">M</td>
                                                <td className="vertical-bottom first-line">182</td>
                                                <td className="vertical-bottom first-line">99</td>
                                                <td className="vertical-top first-line">87</td>
                                                <td className="vertical-top first-line">102</td>
                                            </tr>
                                            <tr>
                                                <td className="vertical-bottom first-line">G</td>
                                                <td className="vertical-bottom first-line">186</td>
                                                <td className="vertical-bottom first-line">104</td>
                                                <td className="vertical-bottom first-line">92</td>
                                                <td className="vertical-bottom first-line">107</td>
                                            </tr>
                                            <tr>
                                                <td className="vertical-bottom first-line">GG</td>
                                                <td className="vertical-bottom first-line">190</td>
                                                <td className="vertical-bottom first-line">110</td>
                                                <td className="vertical-bottom first-line">98</td>
                                                <td className="vertical-bottom first-line">113</td>
                                            </tr>
                                            <tr>
                                                <td className="vertical-bottom first-line">EGG</td>
                                                <td className="vertical-bottom first-line">194</td>
                                                <td className="vertical-bottom first-line">116</td>
                                                <td className="vertical-bottom first-line">104</td>
                                                <td className="vertical-bottom first-line">119</td>
                                            </tr>
                                            <tr>
                                                <td className="vertical-bottom first-line">EEGG</td>
                                                <td className="vertical-bottom first-line">194</td>
                                                <td className="vertical-bottom first-line">122</td>
                                                <td className="vertical-bottom first-line">110</td>
                                                <td className="vertical-bottom first-line">125</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="mob-guia-tamanho" onClick={() => this.setState({active3: !this.state.active3})}>
                        <h4 className={this.state.active3 ? "group tamanho atv" : "group tamanho"}>Guia de Tamanhos</h4>
                        <table cellSpacing="0" className={this.state.active3 ? "table--tamanho atv" : "table--tamanho"}>
                        <tbody>
                            <tr className="even">
                                <td className="value-field guia-tamanho">
                                    <table>
                                        <tbody className="tabela-tamanhos">
                                            <tr>
                                                <td className="vertical-top first-line"></td>
                                                <td className="vertical-middle first-line">Comprimento</td>
                                                <td className="vertical-bottom first-line">Torax</td>
                                                <td className="vertical-bottom first-line">Cintura</td>
                                                <td className="vertical-bottom first-line">Quadril</td>
                                            </tr>
                                            <tr>
                                                <td className="vertical-bottom first-line">P</td>
                                                <td className="vertical-bottom first-line">178</td>
                                                <td className="vertical-top first-line">94</td>
                                                <td className="vertical-bottom first-line">82</td>
                                                <td className="vertical-bottom first-line">97</td>
                                            </tr>
                                            <tr>
                                                <td className="vertical-bottom first-line">M</td>
                                                <td className="vertical-bottom first-line">182</td>
                                                <td className="vertical-bottom first-line">99</td>
                                                <td className="vertical-top first-line">87</td>
                                                <td className="vertical-top first-line">102</td>
                                            </tr>
                                            <tr>
                                                <td className="vertical-bottom first-line">G</td>
                                                <td className="vertical-bottom first-line">186</td>
                                                <td className="vertical-bottom first-line">104</td>
                                                <td className="vertical-bottom first-line">92</td>
                                                <td className="vertical-bottom first-line">107</td>
                                            </tr>
                                            <tr>
                                                <td className="vertical-bottom first-line">GG</td>
                                                <td className="vertical-bottom first-line">190</td>
                                                <td className="vertical-bottom first-line">110</td>
                                                <td className="vertical-bottom first-line">98</td>
                                                <td className="vertical-bottom first-line">113</td>
                                            </tr>
                                            <tr>
                                                <td className="vertical-bottom first-line">EGG</td>
                                                <td className="vertical-bottom first-line">194</td>
                                                <td className="vertical-bottom first-line">116</td>
                                                <td className="vertical-bottom first-line">104</td>
                                                <td className="vertical-bottom first-line">119</td>
                                            </tr>
                                            <tr>
                                                <td className="vertical-bottom first-line">EEGG</td>
                                                <td className="vertical-bottom first-line">194</td>
                                                <td className="vertical-bottom first-line">122</td>
                                                <td className="vertical-bottom first-line">110</td>
                                                <td className="vertical-bottom first-line">125</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        </section>
        )
    }
}
export default TabDescription;