import React from 'react'
import Desplegable from './Desplegable'

const FiltersDesktop = ({ product, specs }) => {
    
    return (
        <div className='row'>
            {Object.values(specs).map(spec => (
            <Desplegable
                key={spec.id} // Asegúrate de proporcionar una clave única
                specsDict={spec}
            />
            ))}        
        </div> 
    )
}

export default FiltersDesktop