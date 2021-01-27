import React, { Component } from 'react';
import './style.scss';

class ColorVariation extends Component{

    state = {
        isLoaded: false,
        varia0: [],
        varia1: [],
        varia2: [],
    }

    componentDidMount(){
        fetch("/api/catalog_system/pub/products/crossselling/similars/3760")
        .then(res => res.json())
        .then((result) => {
            this.setState({
                isLoaded: true,
                varia0: result[0].items[0].images[0].imageUrl,
                varia1: result[1].items[0].images[0].imageUrl,
                varia2: result[2].items[0].images[0].imageUrl,
            })
        })
    }

    render(){
        const {varia0, varia1, varia2, isLoaded} = this.state;
        return (
            <div className="component--similar-prod">
                {isLoaded && 
                <div className="content--boxSimilar">
                <div className="titleColor">
                    <h3>Cores</h3>
                </div>
                <div className="infosSimilar">
                    <div className="boxSimilar">
                        <a href="/">
                            <img src={varia0}/>
                        </a>
                    </div>
                    <div className="boxSimilar">
                        <a href="/">
                            <img src={varia1}/>
                        </a>
                    </div>
                    <div className="boxSimilar">
                        <a href="/">
                            <img src={varia2}/>
                        </a>
                    </div>
                </div>
            </div>
                }
            </div>
        )
    }
}
export default ColorVariation;