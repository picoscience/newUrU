import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setCelularMaxPrice, setCelularMinPrice } from '../../features/celular/celularSlice'
import { setPortatilMaxPrice, setPortatilMinPrice } from '../../features/portatil/portatilSlice'
import { setPcMaxPrice, setPcMinPrice } from '../../features/pc/pcSlice'
import { setTabletMaxPrice, setTabletMinPrice } from '../../features/tablet/tabletSlice'
import ReactSlider from 'react-slider'

const PriceSelector = ({ product, flag }) => {
    const dispatch = useDispatch()
    const portatil = useSelector((state) => state.portatil)
    const celular = useSelector((state) => state.celular)
    const pc = useSelector((state) => state.pc)
    const tablet = useSelector((state) => state.tablet)
    let tempVar = null
    if (product === 'portatil') {
        tempVar = portatil
    }
    if (product === 'celular') {
        tempVar = celular
    }
    if (product === 'pc') {
        tempVar = pc
    }
    if (product === 'tablet') {
        tempVar = tablet
    }
    const handleChange = (values) => {
        const minValue = values[0]
        const maxValue = values[2]
        if (product === 'portatil') {
            dispatch(setPortatilMinPrice(minValue))
            dispatch(setPortatilMaxPrice(maxValue))
        }
        if (product === 'celular') {
            dispatch(setCelularMinPrice(minValue))
            dispatch(setCelularMaxPrice(maxValue))
        }
        if (product === 'pc') {
            dispatch(setPcMinPrice(minValue))
            dispatch(setPcMaxPrice(maxValue))
        }
        if (product === 'tablet') {
            dispatch(setTabletMinPrice(minValue))
            dispatch(setTabletMaxPrice(maxValue))
        }
    }
    return (
        <div className='row p-0 m-0 justify-content-center align-items-center'>
            <div className='col-12'>
                <div className='container-fluid priceSelector'>
                    <div className={`row titlePrice desktop ${(flag) ? 'active' : ''}`}>
                        <h2 className='mb-3 mb-sm-1 mb-md-0 d-lg-none'>
                            valor
                        </h2>
                        <span>
                            <p className='d-none d-lg-inline'>valor</p>
                            {'(ajusta el rango de precio del equipo que buscas)'}                              
                        </span>
                    </div>
                    <div className={`row containerSlider ${(flag) ? 'active' : ''}`}>                
                        <ReactSlider
                            className="horizontal-slider"
                            thumbClassName="example-thumb"
                            trackClassName="example-track"
                            defaultValue={[700, 1100, 1500]}
                            ariaLabel={['Leftmost thumb', 'Middle thumb', 'Rightmost thumb']}
                            renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
                            onChange={(value) => handleChange(value)}
                            pearling
                            min={100}
                            max={3000}
                            minDistance={400}
                        />
                    </div>  
                    <div className='row justify-content-center'>
                        <div className='col-12'>
                            <div className='row minMaxCont justify-content-around justify-content-lg-between mb-3'>
                                <div className={`rellenatorLeft d-none d-lg-flex ${(flag) ? 'active' : ''}`}></div>
                                <div className='col-12 middleRell'>
                                    <div className='row justify-content-around justify-content-lg-between ps-lg-3 pe-lg-3'>
                                        <div className={`col-5 col-lg-6 min ${(flag) ? 'active' : ''}`}>
                                            <span>min</span>
                                            <div>{tempVar.minPrice}</div>
                                        </div>
                                        <div className={`col-5 col-lg-6 max ${(flag) ? 'active' : ''}`}>
                                            <span>máx</span>  
                                            <div>{tempVar.maxPrice}</div>                  
                                        </div>
                                    </div>
                                </div>
                                <div className={`rellenatorRight d-none d-lg-flex ${(flag) ? 'active' : ''}`}></div>
                            </div>
                        </div>
                    </div>
                    <div className='row lineSeparator mb-3 d-lg-none'>                
                    </div>
                </div>        
            </div>
        </div>
    )
}

export default PriceSelector