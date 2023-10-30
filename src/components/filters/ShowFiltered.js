import React from 'react'
import ShowFilteredRow from './ShowFilteredRow'

const ShowFiltered = ({ product }) => {
    return (
        <>
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
        </>
    )
}

export default ShowFiltered