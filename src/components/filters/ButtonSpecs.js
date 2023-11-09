import React from 'react'

const ButtonSpecs = () => {
    return (                    
        <>
        <div className='openSpecs d-lg-none' data-bs-toggle="collapse" data-bs-target="#collapseSpecs">
            <div className='text-center'>filtros avanzados</div>
            <div className='row justify-content-center align-items-center'>
            <div className='buttonSpecs'></div>
            </div>
        </div>
        <div className='buttonSearchPC d-none d-lg-flex'>aplicar búsqueda</div>
        </>  
    )
}

export default ButtonSpecs