import React from 'react'
import Layout from '../hocs/Layout'
import { useSelector } from 'react-redux'
import backHome from '../images/fondocelular.png'
import backHomePC from '../images/fondoPc.png'
import BodyFilter from '../components/filters/BodyFilter'
import SelectPrice from '../components/filters/SelectPrice'

const Filters = () => {
    const product = useSelector((state) => state.product.name)
        
    
    return (
        <Layout>
            <div className="container-fluid containerHome">
            <img src={backHome} alt="Background" className="d-lg-none img-fluid imgBack"/>
            <img src={backHomePC} alt="Background" className="d-none d-lg-flex img-fluid imgBack"/>
                <div className='container-fluid contFilters'>
                    <div className='container-fluid rowFilters'>
                        <SelectPrice product={product}/>
                        <BodyFilter product={product}/>
                    </div>                  
                </div>    
                           
            </div>
        </Layout>
    )
}

export default Filters