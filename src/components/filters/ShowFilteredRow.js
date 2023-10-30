import React from 'react'
import imgBest1 from '../../images/mejor_procen1.png'
import imgBest2 from '../../images/mejor_procen2.png'
import BestPrices from './BestPrices'

const ShowFilteredRow = (props) => {
    const { isThird = false,
            isLast = false,
            isBest1 = false,
            isBest2 = false,
            porcentaje,
            isSecond = false
        } = props
    const classParams = 'd-flex align-items-center justify-content-center'
    const classNames = () => {
        let classString = classParams
        if (isLast) {
            classString += ' last'
        }
        return classString
    }
    let nameClasses = 'porcentajeCoinci '
    if (isThird) {
        nameClasses += (classNames() + ' third')
    }
    if (isSecond) {
        nameClasses += (classNames() + ' segund')
    }
    if (isBest1) {
        nameClasses += (classNames() + ' first')
    }
    if (isBest1 || isBest2) {
        nameClasses += ' mejoresSpan'
    }
    if (isBest1) {
        nameClasses += ' mejorProduct'
    }

    return (
        <div className='row rowShowFiltered'>
            <div className={`marcaLog ${classNames()}`}>
                <span>MARCA LOGO</span>
            </div>
            <div className={`nameProducto ${classNames()}`}>
                <span>NOMBRE EQUIPO</span>
            </div>
            <div className={`bestPrice ${classNames()}`}>
                <BestPrices />
            </div>
            <div className={nameClasses}>
                {(isBest1 || isBest2) && <img src={isBest1 ? imgBest1 : imgBest2} alt='PorcenCoinci'></img>}
                {isThird && <div className='nameIconPorcentaje text-center'>porcentaje de coincidencia</div>}
                <span>{porcentaje}%</span>
            </div>
        </div>
    )
}

export default ShowFilteredRow