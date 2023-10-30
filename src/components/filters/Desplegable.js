import React from 'react'
import { useDispatch } from 'react-redux'

const Desplegable = ({ specsDict }) => {    
    const dispatch = useDispatch()
    const {          
        name,
        state,
        setter,
        options
    } = specsDict
           
    const handleClick = (val,sett) => {
        dispatch(sett(val))
    }

    return (
        <div className='col-6 col-md-4'>
            <div className='pilarDesp'>
                <div className='columDesp'>
                    <div className='titleDesplegable'>
                        <span>{name}</span>
                    </div>
                    <div className='rowDesplegable'>
                        <div className="desplegable">
                            <div className="contDesplegable">
                                <div className='nameDesple d-flex justify-content-center align-items-center'>
                                    <span>{state}</span>
                                </div>
                                {Object.values(options).map(option => (
                                    <div key={option.value} className='optDesple' onClick={() => handleClick(option.value, setter)}>
                                        <span>{option.text}</span>
                                    </div>
                                ))}
                                        
                                <div className='closeDecorator'>
                                    <div className='downDecorator'></div>                                            
                                </div>                                      
                            </div>
                            <div className="buttonDesplegable">
                                <div className='downArrow'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Desplegable