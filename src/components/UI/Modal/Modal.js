import React from 'react'

import classes from './Modal.css'
import Aux from '../../../HOC/Aux'
import Backdrop from '../Backdrop/Backdrop'


const modal = (props) => {
    return (
        <Aux>
        <Backdrop 
        showOrder = {props.showOrder}
        clicked = {props.closed} />
        <div
            className={classes.Modal}

            style={{
                transform: props.showOrder ? 'translateY(0)':'translateY(-100vh)',
                opacity: props.showOrder ? '1': '0'
            }}>
            {props.children}
        </div>
        </Aux>

    )
}

export default modal;