import React from 'react'

import Aux from '../../../HOC/Aux'

const orderSummary = (props)=>{
    const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey =>{
        return (<li key = {igKey}>
             <span style = {{textTransform:'capitalize',fontWeight:'bold'}}>
             {igKey}: {props.ingredients[igKey]} 
             </span>
             </li>)
    })
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>Your order with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
        </Aux>
    )
}
export default orderSummary