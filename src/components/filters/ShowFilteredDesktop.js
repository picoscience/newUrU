import React, { useState } from 'react'
import ShowDesktopBest3 from './ShowDesktopBest3'
import ShowDesktopBest from './ShowDesktopBest'

import ContOrderCols from './ContOrderCols'
import ContNumCols from './ContNumCols'
import { useSelector } from 'react-redux'

const ShowFilteredDesktop = ({ product }) => {
    const [cols,setCols] = useState(0)
    const [prod,setProd] = useState(0)
    const [size,setSize] = useState(0)
    const [image,setImage] = useState(0)
    const columnsView = useSelector((state) => state.columnsView) 
    const handleBusqueda = () => {
        setCols(columnsView.itemsRow)
        setProd(columnsView.itemsPage)
        setSize(columnsView.fontSize)
        setImage(columnsView.imgSearch)
    }
    return (
        <div className='container-fluid p-0 m-0 rowdesktopFiltereds'>
            <div className='orderResultsDesktop'>
                <ContOrderCols product={product}/>
                <ContNumCols product={product}>
                    <div className='buttonSearchConfig pointerCurs' onClick={() => handleBusqueda()}>aplicar búsqueda</div>    
                </ContNumCols>                
            </div>
            <ShowDesktopBest3 />
            <ShowDesktopBest cols={cols} prod={prod} size={size} image={image}/>
        </div>
    )
}

export default ShowFilteredDesktop