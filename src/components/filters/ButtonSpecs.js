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
                <></>
            ) : (
            <div className='openSpecs' data-bs-toggle="collapse" data-bs-target="#collapseSpecs">
                <div className='text-center'>filtros avanzados</div>
                <div className='row justify-content-center align-items-center'>
                <div className='buttonSpecs'></div>
                </div>
            </div>
            )}
        </>
    )
}

export default ButtonSpecs