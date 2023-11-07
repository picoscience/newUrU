import React, { useEffect, useState } from 'react'

const ButtonSpecs = (props) => {
    const { product } = props
    const [onlyFilSpecs,setOnlyFilSpecs] = useState(false)
    const onlySpecs = ['celular']
    useEffect(()=>{        
        setOnlyFilSpecs(onlySpecs.some(item => item === product))
    },[product])
    return (
        <>
            {onlyFilSpecs ? (
                <>
                <div className='buttonSearchPC d-none d-lg-flex'>aplicar búsqueda</div>
                </>
            ) : (
            <>
            <div className='openSpecs d-lg-none' data-bs-toggle="collapse" data-bs-target="#collapseSpecs">
                <div className='text-center'>filtros avanzados</div>
                <div className='row justify-content-center align-items-center'>
                <div className='buttonSpecs'></div>
                </div>
            </div>
            <div className='buttonSearchPC d-none d-lg-flex'>aplicar búsqueda</div>
            </>            
            )}
        </>
    )
}

export default ButtonSpecs