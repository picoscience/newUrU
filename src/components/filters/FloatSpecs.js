import React from 'react'
import Desplegable from './Desplegable'

const FloatSpecs = ({ product, specs }) => {
    return (
        <div>            
            <div className="collapse collapseSpecs" id="collapseSpecs">                
                <div className='closeMoreSpecs' data-bs-toggle="collapse" data-bs-target="#collapseSpecs"><span>x</span></div>
                <div className='contBodySpecs'>
                    <div className="bodySpecs">                        
                        <div className='row'>
                            {Object.values(specs).map(spec => (
                            <Desplegable
                                key={spec.id} // Asegúrate de proporcionar una clave única
                                specsDict={spec}
                            />
                            ))}        
                        </div> 
                        <div className='buttonSearch d-flex align-items-center justify-content-center'><div>buscar</div></div>                       
                    </div>
                </div>
                <div className='footSpecs'></div>
            </div>                    
        </div>
    )
}

export default FloatSpecs