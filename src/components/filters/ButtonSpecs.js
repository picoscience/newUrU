import React, { useEffect, useState } from 'react'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle'

const ButtonSpecs = ({ product }) => {
    const [onlyFilSpecs,setOnlyFilSpecs] = useState(false)
    const onlySpecs = ['celular']
    useEffect(()=>{        
        setOnlyFilSpecs(onlySpecs.some(item => item === product))
    },[product])
    const handleClick = () => {
        const collapseSpecs = document.getElementById('collapseSpecs')
        const bsCollapse1 = new bootstrap.Collapse(collapseSpecs)
        if (collapseSpecs.classList.contains('show')) {
            bsCollapse1.hide()
        } else {
            bsCollapse1.show()
        } 
    }
    return (
        <>
            {onlyFilSpecs ? (
                <></>
            ) : (
            <div className='openSpecs' onClick={() => handleClick()}>
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