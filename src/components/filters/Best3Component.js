import React, { useState } from 'react'
import downArrow from '../../images/chevron-down-icon.svg'
import RowBodyOthersDesktop from './RowBodyOthersDesktop'
//import upArrow from '../../images/chevron-up-icon.svg'

const Best3Component = (props) => {
    const [moreSellers,setMoreSellers] = useState(false)
    const { imgPorcen, imgDisp, nameSeller, porcentaje, first, precio } = props
    const handleClick = () => {
        setMoreSellers(!moreSellers)
    }
    return (
        <div className='contBest3Desktop'>
            <div className='best3Desktop'>
                <div className={`floatCalifDesktop ${(first) ? 'first' : ''}`}>
                    <span className='numberPorcenDesktop'>{porcentaje}<span>%</span></span>
                    <div className='titlePorcenDektop'><span>porcentaje de coincidencia</span></div>
                    <div><img src={imgPorcen} alt='porcentCalif'/></div>
                </div>
                <div className='contImgBest3'>
                    <div className='subContImg3'>
                        <img src={imgDisp} alt='pcDemo'/>
                        <div className='floatNameDesktopShow'>{nameSeller}</div>
                        <div className='floatLogoDesktopShow'>LOGO<br/>VENDEDOR</div>
                        <div className='precioBest3Desktop'>
                            <div className='numberPrecio'><span>{precio}</span></div>
                            <div className='buttonComercio'><span>ir al comercio</span></div>
                        </div>
                    </div>
                </div>
                <div className='contDescBest3'>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit felis hac vivamus, augue dui sociosqu enim consequat.
                </div>
            </div>
            <div className='otherSellersDesktop'>
                <div className='contOthersSellersDekstop' onClick={()=> handleClick()}>
                    <span className='w-100'>otros vendedores</span>
                    <img src={downArrow} alt='arrowSellers'/>
                </div>
                    <div className={`bodyOthersSellerDesktop ${(moreSellers) ? 'active' : ''}`}>
                        <div className='cantidadResults'>cantidad de resultados</div>
                        <RowBodyOthersDesktop />
                        <RowBodyOthersDesktop />
                        <RowBodyOthersDesktop />
                    </div>
            </div>
        </div>
    )
}

export default Best3Component