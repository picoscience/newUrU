import React from 'react'
import { useSelector } from 'react-redux'
import PriceSelector from './PriceSelector'
import UseSelector from './UseSelector'

const UserNeeds = () => {
    const product = useSelector((state) => state.product)
    return (
        <div className='container-fluid'>
            <PriceSelector product={product.name}/>
            <UseSelector product={product.name}/>
        </div>
    )
}

export default UserNeeds