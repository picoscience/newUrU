import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setCelularMaxPrice, setCelularMinPrice } from '../../features/celular/celularSlice'
import { setPortatilMaxPrice, setPortatilMinPrice } from '../../features/portatil/portatilSlice'
import { setPcMaxPrice, setPcMinPrice } from '../../features/pc/pcSlice'
import { setTabletMaxPrice, setTabletMinPrice } from '../../features/tablet/tabletSlice'
import ReactSlider from 'react-slider'

const PriceSelector = ({ product }) => {
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
        <div className='container-fluid priceSelector'>
            <div className='row titlePrice'>
                <h2 className='mb-3 mb-sm-1 mb-md-0'>
                    valor
                </h2>
                <span>
                    {'(ajusta el rango de precio del equipo que buscas)'}  
                </span>
            </div>
            <div className='row containerSlider'>                
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
                <div className='col-12 col-md-10'>
                    <div className='row minMaxCont justify-content-around mb-3'>
                        <div className='col-4 min'>
                            <span>min</span>
                            <div>{tempVar.minPrice}</div>
                        </div>
                        <div className='col-4 max'>
                            <span>máx</span>  
                            <div>{tempVar.maxPrice}</div>                  
                        </div>
                    </div>
                </div>
            </div>
            <div className='row lineSeparator mb-3'>                
            </div>
        </div>
    )
}

export default PriceSelector