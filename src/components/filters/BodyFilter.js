import React, { useEffect, useState } from 'react'
import UserNeeds from './UsersNeeds'
import FilterProduct from './FilterProduct'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle'
import ButtonSpecs from './ButtonSpecs'
import ShowFiltered from './ShowFiltered'
import downArrow from '../../images/chevron-down-icon.svg'
import upArrow from '../../images/chevron-up-icon.svg'
import FiltersDesktop from './FiltersDesktop'

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
        <div className='row justify-content-center cuerpoFilter ps-lg-3 pe-lg-3'>
            <div className={`col-12 col-xl-11 col-xxl-10 contCuerpoFilter ${product === 'pc' ? 'izquierda' : product === 'tablet' ? 'derecha' : ''} ${(flag) ? 'active' : ''}`}>
                <div className='container-fluid p-0 m-0'>
                    <div className='row p-3 pb-0'>
                        <UserNeeds product={product} flag={flag}/>
                    </div>
                    <div className='row mt-2 mb-2 p-0 justify-content-center text-center'>
                        <span className={`text-center masFiltros ${(flag) ? 'active' : ''}`}>más opciones</span>
                    </div>     
                </div>               
            </div>                                              
        </div>                              
        <div className='row moreFilters justify-content-center'>
            <div onClick={()=>handleClickClose()} className={`toggleFilters d-flex justify-content-center align-items-start ${(flag) ? 'active' : ''}`}>
                <span className='d-lg-none'></span>
                <img src={downArrow} alt='chvronDown' className='d-none d-lg-flex chevronDown'/>
            </div>
        </div>  
        <div className='container-fluid'>
            <div className='row expandedFilters'>
                <div className="row p-0">
                    <div className="col p-0">
                        <div id="collapseMoreOptions" className='collapse multi-collapse p-0'>
                            <div className="card card-body m-0 p-0">
                                <div className='closeButton d-lg-none'></div>
                                <div className='closeButton1 d-lg-none'>
                                    <span onClick={() => handleClickClose()} >X</span>
                                </div>
                                <div className='closeText'></div>
                                <div className='closeText1' onClick={() => handleClickClose()}>
                                    menos opciones
                                    <img src={upArrow} alt='iconClose' className='d-none d-lg-flex upArrowClose'></img>
                                </div>
                                <div className='row p-0 m-0 justify-content-center align-items-center'>
                                    <div className='contentBodyOptions col-12 col-xl-11 col-xxl-10'>
                                        <div className='rowBodyOptions row justify-content-center'>
                                            <div className='closeText1Line d-none d-lg-flex mt-4 mb-3'></div>
                                            <div className={`col-12 col-lg-6 ${(product==='celular') ? 'divisorDesktop' : ''}`}>
                                                <FilterProduct product={product}/>
                                            </div>
                                            <div className={`d-none d-lg-inline col-6 ${(product==='celular') ? 'divisorDesktop1' : ''}`}>
                                                <FiltersDesktop product={product}/>
                                            </div>
                                            <div className='closeText1Line d-none d-lg-flex mb-5 mt-3'></div>
                                        </div>
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