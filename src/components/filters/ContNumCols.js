import React, { useState } from 'react'
import listaIcon from '../../images/Listas.svg'
import personalize from '../../images/Configuracion.svg'
import { useDispatch, useSelector } from 'react-redux'
import {  
    setColumnsViewItemsPage, 
    setColumnsViewItemsRow, 
    setColumnsViewFontSize,
    setColumnsViewImgSearch,
} from '../../features/columsView/columnsViewSlice'

const ContNumCols = (props) => {
    const [openNum,setOpenNum] = useState(false)
    const [openConf,setOpenConf] = useState(false)
    const dispatch = useDispatch()
    const columnsView = useSelector((state) => state.columnsView) 
    const handleItemsPerPage = (itemsPage) => {
        dispatch(setColumnsViewItemsPage(itemsPage))
    }
    const handleItemsPerRow = (itemsRow) => {
        dispatch(setColumnsViewItemsRow(itemsRow))
    }
    const handleItemsFontSize = (font) => {
        dispatch(setColumnsViewFontSize(font))
    }
    const handleItemsImg = (showImg) => {
        dispatch(setColumnsViewImgSearch(showImg))
    }
    const handleClick1 = () => {
        setOpenNum(!openNum)
        if (openNum) {
            setOpenConf(false)
        }
    }
    const handleClick2 = () => {
        setOpenConf(!openConf)
    }
    return (
        <div className='contNumColumns'>
            <div className='numColumns' onClick={() => handleClick1()}>
                <div className='subNumColumns'>
                    <div className='lineH'></div>
                    <div className='lineV'></div>
                </div>
            </div>
            <div className={`bodyNumCols ${(openNum) ? 'active' : ''}`}>
                <div className='opsOrderCols mt-2'>
                    <span className='pointerCurs'>ver como lista</span>                            
                    <img className='listIconOrder pointerCurs' src={listaIcon} alt='listIcon'/>  
                </div>
                <div className='contBodyConfigs'>
                    <div className='opsOrderCols last'>
                        <span className='pointerCurs' onClick={() => handleClick2()}>personalizado</span>                            
                        <img className='listIconOrder config pointerCurs' src={personalize} alt='configIcon' onClick={() => handleClick2()}/> 
                    </div>
                    <div className={`bodyConfigs ${(openConf) ? 'active' : ''}`}>
                        <div className='contOpsOrderCols'>
                            <div className='opsOrderCols mt-2'>productos por página</div>
                            <div className='selectOpsOrder'>
                                <div className={`itemsPerPage pointerCurs ${(columnsView.itemsPage === 50) ? 'active' : ''}`} onClick={() => handleItemsPerPage(50)}>50,</div>
                                <div className={`itemsPerPage pointerCurs ${(columnsView.itemsPage === 100) ? 'active' : ''}`} onClick={() => handleItemsPerPage(100)}>100,</div>
                                <div className={`itemsPerPage pointerCurs ${(columnsView.itemsPage === 200) ? 'active' : ''}`} onClick={() => handleItemsPerPage(200)}>200</div>
                            </div>
                        </div>
                        <div className='contOpsOrderCols'>
                            <div className='opsOrderCols'>productos por fila</div>
                            <div className='selectOpsOrder'>
                                <div className={`itemsPerPage pointerCurs ${(columnsView.itemsRow === 3) ? 'active' : ''}`} onClick={() => handleItemsPerRow(3)}>3,</div>
                                <div className={`itemsPerPage pointerCurs ${(columnsView.itemsRow === 4) ? 'active' : ''}`} onClick={() => handleItemsPerRow(4)}>4,</div>
                                <div className={`itemsPerPage pointerCurs ${(columnsView.itemsRow === 5) ? 'active' : ''}`} onClick={() => handleItemsPerRow(5)}>5,</div>
                                <div className={`itemsPerPage pointerCurs ${(columnsView.itemsRow === 6) ? 'active' : ''}`} onClick={() => handleItemsPerRow(6)}>6</div>
                            </div>
                        </div>
                        <div className='contOpsOrderCols'>
                            <div className='opsOrderCols'>tamaño de la fuente</div>
                            <div className='selectOpsOrder'>
                                <div className={`itemsPerPage pointerCurs fontSize ${(columnsView.fontSize === 1) ? 'active' : ''}`} onClick={() => handleItemsFontSize(1)}>pequeño,</div>
                                <div className={`itemsPerPage pointerCurs fontSize ${(columnsView.fontSize === 2) ? 'active' : ''}`} onClick={() => handleItemsFontSize(2)}>mediano,</div>
                                <div className={`itemsPerPage pointerCurs fontSize ${(columnsView.fontSize === 3) ? 'active' : ''}`} onClick={() => handleItemsFontSize(3)}>grande</div>
                            </div>
                        </div>
                        <div className='contOpsOrderCols'>
                            <div className='opsOrderCols last'>quitar imagen de busqueda</div>
                            <div className='selectOpsOrder'>
                                <div className={`itemsPerPage pointerCurs showImg`} onClick={() => handleItemsImg(1)}>
                                    <span>Si</span>
                                    <div className={`boxShowImg ${(columnsView.imgSearch === 1) ? 'active' : ''}`}></div>
                                </div>
                                <div className={`itemsPerPage pointerCurs showImg`} onClick={() => handleItemsImg(2)}>
                                    <span>No</span>
                                    <div className={`boxShowImg ${(columnsView.imgSearch === 2) ? 'active' : ''}`}></div>
                                </div>
                            </div>
                        </div>
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContNumCols