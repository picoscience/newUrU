import React from 'react'
import ItemProdDesktop from './ItemProdDesktop'

const ShowDesktopBest = ({ cols }) => {
    return (
        <div className='row m-0 rowShowProdDesktop'>
            <ItemProdDesktop cols={cols}/>
            <ItemProdDesktop cols={cols}/>
            <ItemProdDesktop cols={cols}/>
            <ItemProdDesktop cols={cols}/>
            <ItemProdDesktop cols={cols}/>
            <ItemProdDesktop cols={cols}/>
            <ItemProdDesktop cols={cols}/>
            <ItemProdDesktop cols={cols}/>
            <ItemProdDesktop cols={cols}/>
            <ItemProdDesktop cols={cols}/>
        </div>
    )
}

export default ShowDesktopBest