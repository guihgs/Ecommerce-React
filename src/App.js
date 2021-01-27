import React, { Component } from 'react';
import './App.scss';
import Navbar from './Components/Navbar';
import SimpleReactLightbox from 'simple-react-lightbox';
import MainProd from './Components/MainProd';
import DetailsProd from './Components/DetailsProd';
import TabDescription from './Components/TabDescription';
import ShelfProd from './Components/ShelfProd';
import BuyFloat from './Components/BuyFloat';

class App extends Component {
  state= {
    activeClass: ''
  }


  pageScroll() { 
    if (document.documentElement.scrollTop > 160) {
       this.setState({
         activeClass: 'active'
       })
     }else{
      this.setState({
        activeClass: ''
      })
      }
   }
   componentDidMount(){
      window.onscroll = () => this.pageScroll()
  }
  
  render(){
    return (
      <div className="App">
        <Navbar />
        <section className="main-product">
        <SimpleReactLightbox>
            <MainProd/>
        </SimpleReactLightbox>
            <DetailsProd/>
          </section>
        <TabDescription/>
        <ShelfProd/>
        <BuyFloat activeClass={this.state.activeClass}/>
      </div>
    );
  }
}

export default App;
