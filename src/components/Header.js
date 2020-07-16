import React from 'react';
import {connect} from 'react-redux'
const Header = ({amount, total}) => {
    return (
      <div className='header p-4'>
        <div className="d-flex flex-r">
        <h1 className="p-2 text-center">SHOPPING CARTS </h1>
      </div>
      <div className="d-flex flex-row-reverse ">
        <div className="p-2 ">Total Item Selected : {total}</div>
      </div>
      <div className="d-flex flex-row-reverse ">
        <div className="p-2 ">Total Price : ${amount.toFixed(2)}</div>
      </div>
    </div>
    );
  }

const mapStateToProps = state => {
   return {amount:state.amount, total: state.total}
}

export default connect(mapStateToProps) (Header);