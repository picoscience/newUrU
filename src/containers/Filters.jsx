import React from 'react'
import Layout from '../hocs/Layout'
import { useDispatch, useSelector } from 'react-redux'
import { setProduct } from '../features/product/productSlice'
import backHome from '../images/fondocelular.png'
import activeFilter from '../images/active.png'
import activeIzqFilter from '../images/activeIzq.png'
import activeDerFilter from '../images/activeDer.png'
import BodyFilter from '../components/filters/BodyFilter'

const Filters = () => {
    const product = useSelector((state) => state.product.name)
    const dispatch = useDispatch()
        
    const handleClick = (product) => {
        dispatch(setProduct(product))
    }
    
    return (
        <Layout>
            <div className="container-fluid containerHome">
            <img src={backHome} alt="Background" className="img-fluid imgBack"/>
                <div className='container-fluid contFilters d-lg-none'>
                    <div className='container-fluid rowFilters'>
                        <div className='row activeFilter justify-content-center'>
                            <div className={`col-3 colsProds izquierda ${product === 'pc' ? 'active' : ''}`}>
                                <span onClick={() => handleClick('pc')}>PC</span>                                
                                <img src={activeIzqFilter} alt='Fondo'></img> 
                                <div className='activeBar'></div>
                                <div className='noActiveProd' onClick={() => handleClick('pc')}></div>
                            </div>
                            <div className={`col-3 colsProds center1 ${product === 'portatil' ? 'active' : ''}`}>
                                <span onClick={() => handleClick('portatil')}>Portátil</span>                                
                                <img src={activeFilter}  alt='Fondo'></img> 
                                <div className='activeBar'></div>
                                <div className='noActiveProd' onClick={() => handleClick('portatil')}></div>
                            </div>
                            <div className={`col-3 colsProds center2 ${product === 'celular' ? 'active' : ''}`}>
                                <span onClick={() => handleClick('celular')}>CELULAR</span>                                
                                <img src={activeFilter}  alt='Fondo'></img> 
                                <div className='activeBar'></div>
                                <div className='noActiveProd' onClick={() => handleClick('celular')}></div>
                            </div>
                            <div className={`col-3 colsProds derecha ${product === 'tablet' ? 'active' : ''}`}>
                                <span onClick={() => handleClick('tablet')}>TABLET</span>                                
                                <img src={activeDerFilter}  alt='Fondo'></img> 
                                <div className='activeBar'></div>
                                <div className='noActiveProd' onClick={() => handleClick('tablet')}></div>
                            </div>
                        </div>
                        <BodyFilter product={product}/>
                    </div>                  
                </div>    
                           
            </div>
        </Layout>
    )
}

export default Filters