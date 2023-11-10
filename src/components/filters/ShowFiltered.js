import React from 'react'
import ShowFilteredRow from './ShowFilteredRow'
import ShowFilteredDesktop from './ShowFilteredDesktop'

const ShowFiltered = ({ product }) => {
    return (
        <>
        <div className='d-lg-none'>
            <div className='container-fluid numberProducts p-0'>
                <h3><span>234</span> productos</h3>            
            </div>
            <div className='container resultsFilters p-0'>
                <ShowFilteredRow porcentaje={99} isBest1={true}/>
                <ShowFilteredRow porcentaje={95} isBest2={true} isSecond={true}/>
                <ShowFilteredRow porcentaje={90} isThird={true} isBest2={true}/>
                <ShowFilteredRow porcentaje={85} />
                <ShowFilteredRow porcentaje={80} />
                <ShowFilteredRow porcentaje={75} />
                <ShowFilteredRow porcentaje={70} />
                <ShowFilteredRow porcentaje={65} />
                <ShowFilteredRow porcentaje={60} />
                <ShowFilteredRow porcentaje={55} />
                <ShowFilteredRow porcentaje={50} isLast={true}/>
            </div>
        </div>
        <div className='row d-none d-lg-block ps-4 pe-4'>
            <div className='showDesktopFilters col-12 col-xl-11 col-xxl-10 d-flex justify-content-center align-items-center'>
                <div className='d-block w-100 p-3'>
                    <div className='row numberProductsDesktop p-0 m-0'>
                        <h3><span>234</span> productos</h3>            
                    </div>
                    <div className='row resultsFiltersDesktop p-0 m-0'>
                        <ShowFilteredDesktop product={product}/>
                    </div>    
                </div>           
            </div>
        </div>
        </>
    )
}

export default ShowFiltered