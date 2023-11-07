import React from 'react'
import { useDispatch } from 'react-redux'
import { setProduct } from '../../features/product/productSlice'
import activeFilter from '../../images/active.png'
import activeIzqFilter from '../../images/activeIzq.png'
import activeDerFilter from '../../images/activeDer.png'
import imgCelular from '../../images/Celular.svg'
import imgPc from '../../images/PC.svg'
import imgPortatil from '../../images/Portatil.svg'
import imgTablet from '../../images/Tablet.svg'

const SelectPrice = ({ product }) => {
    const dispatch = useDispatch()
        
    const handleClick = (product) => {
        dispatch(setProduct(product))
    }
    return (
        <>
        {/* MOBILE */}
        <div className='d-lg-none row activeFilter justify-content-center'>
            <div className={`col-3 colsProds izquierda ${product === 'pc' ? 'active' : ''}`}>
                <span onClick={() => handleClick('pc')}>pc</span>                                
                <img src={activeIzqFilter} alt='Fondo'></img> 
                <div className='activeBar'></div>
                <div className='noActiveProd' onClick={() => handleClick('pc')}></div>
            </div>
            <div className={`col-3 colsProds center1 ${product === 'portatil' ? 'active' : ''}`}>
                <span onClick={() => handleClick('portatil')}>portátil</span>                                
                <img src={activeFilter}  alt='Fondo'></img> 
                <div className='activeBar'></div>
                <div className='noActiveProd' onClick={() => handleClick('portatil')}></div>
            </div>
            <div className={`col-3 colsProds center2 ${product === 'celular' ? 'active' : ''}`}>
                <span onClick={() => handleClick('celular')}>celular</span>                                
                <img src={activeFilter}  alt='Fondo'></img> 
                <div className='activeBar'></div>
                <div className='noActiveProd' onClick={() => handleClick('celular')}></div>
            </div>
            <div className={`col-3 colsProds derecha ${product === 'tablet' ? 'active' : ''}`}>
                <span onClick={() => handleClick('tablet')}>tablet</span>                                
                <img src={activeDerFilter}  alt='Fondo'></img> 
                <div className='activeBar'></div>
                <div className='noActiveProd' onClick={() => handleClick('tablet')}></div>
            </div>
        </div>
        {/* DESKTOP */}
        <div className='row d-none d-lg-flex justify-content-center align-items-center'>
            <div className='col-12 col-xl-11 col-xxl-10 d-flex justify-content-center align-items-center p-0'>
                <div className='row activeFilterDesktop'>
                    <div className={`col-3 d-flex contColactiveDesktop ${product === 'pc' ? 'active' : ''}`}>
                        <div className='colactiveDesktop' onClick={() => handleClick('pc')}>
                            <span>pc</span>
                        </div>
                        <div className='contImgProdDesktop' onClick={() => handleClick('pc')}>
                            <img src={imgPc} alt='iconoProducto'/>                            
                        </div>
                    </div>
                    <div className={`col-3 d-flex contColactiveDesktop ${product === 'portatil' ? 'active' : ''}`}>
                        <div className='colactiveDesktop' onClick={() => handleClick('portatil')}>
                            <span>portátil</span>
                        </div>
                        <div className='contImgProdDesktop' onClick={() => handleClick('portatil')}>
                            <img src={imgPortatil} alt='iconoProducto'/>                            
                        </div>
                    </div>
                    <div className={`col-3 d-flex contColactiveDesktop ${product === 'celular' ? 'active' : ''}`}>
                        <div className='colactiveDesktop' onClick={() => handleClick('celular')}>
                            <span>celular</span>
                        </div>
                        <div className='contImgProdDesktop' onClick={() => handleClick('celular')}>
                            <img src={imgCelular} alt='iconoProducto'/>                            
                        </div>
                    </div>
                    <div className={`col-3 d-flex contColactiveDesktop ${product === 'tablet' ? 'active' : ''}`}>
                        <div className='colactiveDesktop' onClick={() => handleClick('tablet')}>
                            <span>tablet</span>
                        </div>
                        <div className='contImgProdDesktop' onClick={() => handleClick('tablet')}>
                            <img src={imgTablet} alt='iconoProducto'/>                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default SelectPrice