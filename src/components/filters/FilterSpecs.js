import React from 'react'
import OnlySpecs from './OnlySpecs'
import FloatSpecs from './FloatSpecs'

const FilterSpecs = (props) => {
    const { onlySpecs, product }= props
    return (
        <div className='d-lg-none'>
        {onlySpecs ? 
            <OnlySpecs product={product}/>
        :
            <FloatSpecs product={product}/>
        }
        </div>
    )
}

export default FilterSpecs