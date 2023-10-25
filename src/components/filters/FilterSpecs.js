import React from 'react'
import OnlySpecs from './OnlySpecs'
import FloatSpecs from './FloatSpecs'

const FilterSpecs = (props) => {
    const { onlySpecs, product }= props
    return (
        <>
        {onlySpecs ? 
            <OnlySpecs product={product}/>
        :
            <FloatSpecs product={product}/>
        }
        </>
    )
}

export default FilterSpecs