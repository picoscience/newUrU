import React from 'react'
import UsosProductos from './UsosProductos'

const UseSelector = ({ product, flag }) => {
    return (
        <div className='container-fluid'>
            <div className={`row titlePrice ${(flag) ? 'active' : ''}`}>
                <h2 className='mb-3 mb-sm-1 mb-md-0 d-lg-none'>
                    uso
                </h2>
                <span>
                    <p className='d-none d-lg-inline'>uso</p>
                    {'(elige solo una opción)'}                               
                </span>
            </div>
            <div className='usosContainer'>
            {
                <UsosProductos product={product}/>
            }
            </div>
        </div>
    )
}

export default UseSelector