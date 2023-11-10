import React from 'react'
import ShowDesktopBest3 from './ShowDesktopBest3'
import ShowDesktopBest from './ShowDesktopBest'

import ContOrderCols from './ContOrderCols'
import ContNumCols from './ContNumCols'
import { useSelector } from 'react-redux'

const ShowFilteredDesktop = () => {
    const columnsView = useSelector((state) => state.columnsView) 
    return (
        <div className='container-fluid p-0 m-0 rowdesktopFiltereds'>
            <div className='orderResultsDesktop'>
                <ContOrderCols />
                <ContNumCols>
                    <div className='buttonSearchConfig pointerCurs'>aplicar búsqueda</div>    
                </ContNumCols>                
            </div>
            <ShowDesktopBest3 />
            <ShowDesktopBest cols={1}/>
        </div>
    )
}

export default ShowFilteredDesktop