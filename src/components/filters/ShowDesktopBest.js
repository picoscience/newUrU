import React from 'react'
import ItemProdDesktop from './ItemProdDesktop'

const ShowDesktopBest = ({ cols, prod, size, image }) => {
    return (
        <div className='row m-0 rowShowProdDesktop'>
            <ItemProdDesktop cols={cols} prod={prod} size={size} image={image}/>
            <ItemProdDesktop cols={cols} prod={prod} size={size} image={image}/>
            <ItemProdDesktop cols={cols} prod={prod} size={size} image={image}/>
            <ItemProdDesktop cols={cols} prod={prod} size={size} image={image}/>
            <ItemProdDesktop cols={cols} prod={prod} size={size} image={image}/>
            <ItemProdDesktop cols={cols} prod={prod} size={size} image={image}/>
            <ItemProdDesktop cols={cols} prod={prod} size={size} image={image}/>
            <ItemProdDesktop cols={cols} prod={prod} size={size} image={image}/>
            <ItemProdDesktop cols={cols} prod={prod} size={size} image={image}/>
            <ItemProdDesktop cols={cols} prod={prod} size={size} image={image}/>
        </div>
    )
}

export default ShowDesktopBest