import React from 'react'
import UsosProductos from './UsosProductos'

const UseSelector = ({ product }) => {
    return (
        <div className='container-fluid'>
            <div className='row titlePrice'>
                <h2 className='mb-3 mb-sm-1 mb-md-0'>
                    uso
                </h2>
                <span>
                    {'(elige solo una opción)'}  
                </span>
            </div>
            <div className='row usosContainer justify-content-center align-items-start'>
            {
                <UsosProductos product={product}/>
            }
            </div>
        </div>
    )
}

export default UseSelector