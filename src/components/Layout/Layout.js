import React from 'react';
import classes from './Layout.css'

import Aux from '../../HOC/Aux'

const layout =(props)=>(
    <Aux>
        <div>
           {/* //components  */}
            <div>Toolbar</div>
            <div>sidedrawer</div>
            <div>backdrop</div>
        </div>
        <main className = {classes.Content}>
            {props.children}
        </main>
    </Aux>

    );

export default layout;