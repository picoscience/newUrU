import React, { useEffect, useState } from 'react'
import downArrow from '../../images/chevron-down-icon.svg'
import { useDispatch, useSelector } from 'react-redux'
import { 
    setColumnsViewOrder, 
} from '../../features/columsView/columnsViewSlice'

const ContOrderCols = (props) => {
    const { product } = props 
    const [openOrder,setOpenOrder] = useState(false)  
    const dispatch = useDispatch() 
    const columnsView = useSelector((state) => state.columnsView) 
    const handleOrderItems = (order) => {
        dispatch(setColumnsViewOrder(order))
    }

    useEffect(()=>{   
        setOpenOrder(false)        
    },[product])

    const handleClick = () => {
        setOpenOrder(!openOrder)
    }
    return (
        <div className='contOrderColsBy'>
            <div className='orderColsBy' onClick={() => handleClick()}>
                ordenar por
                <img className='downArrowOrderColsBy' src={downArrow} alt='chevronDown'/>                   
            </div>
            <div className={`bodyOrderCols ${(openOrder) ? 'active' : ''}`}>
                <div className='contOpsOrderCols1'>
                    <div className='opsOrderCols pointerCurs' onClick={() => handleOrderItems(1)}>
                        <span >mayor precio</span>
                        <div className={`boxShowImg orderBy ${(columnsView.order === 1) ? 'active' : ''}`}></div>
                    </div>
                </div>
                <div className='contOpsOrderCols1'>
                    <div className='opsOrderCols pointerCurs' onClick={() => handleOrderItems(2)}>
                        <span>menor precio</span>
                        <div className={`boxShowImg orderBy ${(columnsView.order === 2) ? 'active' : ''}`}></div>
                    </div>
                </div>
                <div className='contOpsOrderCols1'>
                    <div className='opsOrderCols pointerCurs' onClick={() => handleOrderItems(3)}>
                        <span>fecha de lanzamiento</span>
                        <div className={`boxShowImg orderBy ${(columnsView.order === 3) ? 'active' : ''}`}></div>
                    </div>
                </div>
                <div className='contOpsOrderCols1'>
                    <div className='opsOrderCols last pointerCurs' onClick={() => handleOrderItems(4)}>
                        <span>ciudad</span>
                        <div className={`boxShowImg orderBy ${(columnsView.order === 4) ? 'active' : ''}`}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContOrderCols