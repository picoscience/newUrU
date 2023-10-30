import React, { useEffect, useState } from 'react'
import UserNeeds from './UsersNeeds'
import FilterProduct from './FilterProduct'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle'
import ButtonSpecs from './ButtonSpecs'
import ShowFiltered from './ShowFiltered'

const BodyFilter = ({ product }) => {
    const [flag,setFlag] = useState(false)
    
    const handleClickClose = () => {        
        setFlag(!flag)
        const collapseMoreOptions = document.getElementById('collapseMoreOptions')
        const bsCollapse = new bootstrap.Collapse(collapseMoreOptions)
        if (collapseMoreOptions.classList.contains('show')) {
            bsCollapse.hide()
        } else {
            bsCollapse.show()
        }      
        const collapseSpecs = document.getElementById('collapseSpecs')
        if (collapseSpecs) {
            if (collapseSpecs.classList.contains('show')) {
                const bsCollapse1 = new bootstrap.Collapse(collapseSpecs, { toggle: false })
                bsCollapse1.hide()
            }
        }
    }

    useEffect(()=>{   
        setFlag(false)
        const collapseMoreOptions = document.getElementById('collapseMoreOptions')
        if (collapseMoreOptions.classList.contains('show')) {
            const bsCollapse = new bootstrap.Collapse(collapseMoreOptions, { toggle: false })
            bsCollapse.hide()
        }
        const collapseMoreSpecs = document.getElementById('collapseSpecs')
        if (collapseMoreSpecs) {
            if (collapseMoreSpecs.classList.contains('show')) {
                const bsCollapse1 = new bootstrap.Collapse(collapseMoreSpecs, { toggle: false })
                bsCollapse1.hide()
            }
        }
    },[product])

    return (
        <>
        <div className='row cuerpoFilter'>
            <div className={`container-fluid contCuerpoFilter ${product === 'pc' ? 'izquierda' : product === 'tablet' ? 'derecha' : ''}`}>
                <div className='row p-3 pb-0'>
                    <UserNeeds/>
                </div>
                <div className='row mt-2 mb-2 p-0 justify-content-center text-center'>
                    <span className={`text-center masFiltros ${(flag) ? 'active' : ''}`}>más opciones</span>
                </div>                
            </div>                                              
        </div>                              
        <div className='row moreFilters justify-content-center'>
            <div onClick={()=>handleClickClose()} className={`toggleFilters d-flex justify-content-center align-items-start ${(flag) ? 'active' : ''}`}>
                <span></span>
            </div>
        </div>  
        <div className='container-fluid'>
            <div className='row expandedFilters'>
                <div className="row p-0">
                    <div className="col p-0">
                        <div id="collapseMoreOptions" className='collapse multi-collapse p-0'>
                            <div className="card card-body m-0 p-0">
                                <div className='closeButton'></div>
                                <div className='closeButton1'>
                                    <span onClick={() => handleClickClose()} >X</span>
                                </div>
                                <div className='closeText'></div>
                                <div className='closeText1' onClick={() => handleClickClose()} >
                                    menos opciones
                                </div>
                                <div className='contentBodyOptions'>
                                    <div className='rowBodyOptions'>
                                        <FilterProduct product={product}/>
                                    </div>
                                </div>
                                <ButtonSpecs product={product}/>
                            </div>                     
                        </div>
                    </div>
                </div>
            </div>  
        </div>        
                <ShowFiltered product={product}/>
        </>
    )
}

export default BodyFilter