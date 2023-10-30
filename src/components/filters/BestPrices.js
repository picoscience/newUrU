import React from 'react'

const BestPrices = () => {
    return (
        <div className='bestPricesSlice'>
            <div className='bestPriceButton text-center'>mejor precio</div>
            <div className='bestPricesCont'>
                <div className='row bestPriceTitle pt-2 pb-2'>
                    <span>BEST PRICE</span>
                </div>
                <div className='row pricesShow justify-content-center'>
                    <div className='col-5 p-0 text-center'>V1</div>
                    <div className='col-5 p-0 text-center'>P1</div>
                </div>
                <div className='row pricesShow justify-content-center'>
                    <div className='col-5 p-0 text-center'>V2</div>
                    <div className='col-5 p-0 text-center'>P2</div>
                </div>
                <div className='row pricesShow justify-content-center'>
                    <div className='col-5 p-0 text-center'>V3</div>
                    <div className='col-5 p-0 text-center'>P3</div>
                </div>
                <div className='row verMasPrices pt-2 pb-2'>
                    <span>ver mas</span>
                </div>
            </div>
        </div>
    )
}

export default BestPrices