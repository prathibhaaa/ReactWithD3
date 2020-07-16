import React from 'react'
import { ADD } from '../store/actions';

function Card({items, dispatch}) {

    return (
        <div id='board-1' className="board d-flex flex-column m-3">
            {items.map((item) => <div 
            key={item.id}
            id={item.id}
            className='card p-2'
            onClick={()=>dispatch({type: ADD, id: item.id}) }
            draggable={!item.selected}>
                {!item.selected ? item.name : <div>
                {item.name}
                <span className='tick'>&#10003;</span>
                </div>}
            </div>)}
        </div>
    )

}
export default Card