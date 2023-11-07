import React from 'react'
import PriceSelector from './PriceSelector'
import UseSelector from './UseSelector'

const UserNeeds = ({ product, flag }) => {
    return (
        <div className='container-fluid ps-lg-3 pe-lg-3'>
            <div className='row p-0 m-0'>
                <div className='col-12 p-0 m-0'>
                    <PriceSelector product={product} flag={flag}/>
                    <UseSelector product={product} flag={flag}/>
                </div>
            </div>
        </div>
    )
}

export default UserNeeds