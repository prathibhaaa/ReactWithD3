import React, { useEffect } from "react";
import Items from '../assets/Items.json';
import {connect} from 'react-redux'
import {ADD, REMOVE, ADDPRICE} from '../store/actions'

function Board(props, dispatch) {
    useEffect (()=>{
        props.addPrice()
    })

    const removeItem = (e) => {
        props.remove(e.target.id)
    }
    
    return (
        <div>
            {props.items.map((item) => {return item.selected && <div key={item.id} id={item.id} className='card m-2' draggable="true">
                <div className='row p-2'>
                    <div className='col-6'>{item.name} </div>
                    <div className='col-4'>{item.currency}{item.value.toFixed(2)}</div>
                    <div className='col-1'>
                        <button type="button"
                            id={item.id}
                            onClick={(e)=>removeItem(e)}
                            className="btn btn-xs btn-danger img-circle"
                            ><span id={item.id} aria-hidden="true">&times;</span></button></div>
                    </div></div>})}
            </div>
    )

}

const mapDispatchToProps = (dispatch, ownState) => {
    return {
        remove:(id) => dispatch({type: REMOVE, id: id }),
        addPrice:() =>dispatch({type: ADDPRICE }),
        addItem:(id) =>dispatch({type: ADD ,id: id}),
    }
}

function mapStateToProps(store){
    return {
      items: store.items
    }
  }

export default connect (mapStateToProps, mapDispatchToProps)(Board)