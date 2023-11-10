import React from 'react'
import pcImgDemo from '../../images/port.png'

const ItemProdDesktop = (props) => {
    const { cols } = props
    let classShowProd = 'showProdDesktop'
    if (cols === 3) {
        classShowProd += ' tres'
    }
    if (cols === 4) {
        classShowProd += ' cuatro'
    }
    if (cols === 5) {
        classShowProd += ' cinco'
    }
    if (cols === 6) {
        classShowProd += ' seis'
    }
    return (
        <div className={classShowProd}>
            <div className='bodyShowProdDesktop'>
                <div className='bodyProds'>
                    <div className='izqBarShowBody'></div>
                    <div className='contentShowBody'>
                        <div className='titleItemsBody'>
                            <div className='logoBodyItem'>logo<br/>vendedor</div>
                            <div className='nameBodyItem'>name</div>
                        </div>
                        <img src={pcImgDemo} alt='elementProd'/>
                    </div>
                    <div className='derBarShowBody'></div>
                </div>
                <div className='precioProds'>999999</div>
            </div>
        </div>
    )
}

export default ItemProdDesktop