import React, { useState, useEffect } from "react";
import Header from './Header';
import Board from './Board'
import Card from './Card'
import './ItemList.css';
import {connect} from 'react-redux'
import D3PriceChart from '../visualization/d3PriceChart';

const MainContent= ({items= [], dispatch}) => {
    return (
        <main>
            <Header/>
            <div className='row'>
              <div className='sidebar col-3'>
                <h4 className='label pt-4 text-center'> Click Below Items </h4>
                <Card items={items} dispatch={dispatch}/>
              </div>
              <div className='content col-4'>
                <h4 className='label p-4 text-center'> Item On Your Cart</h4>
                <Board/>
              </div>
              <div className='content col-5 text-center'>
                <h4 className='label p-4 text-center'> Chart Based on Price</h4>
                <D3PriceChart 
                  data={items.filter(item => item.selected)}
                  width={300}
                  height={300}
                  innerRadius={30}
                  outerRadius={150}/>
              </div>
            </div>
        </main>
    );
}
function mapStateToProps(store){
  return {
    items: store.items
  }
}

export default connect(mapStateToProps)(MainContent);
