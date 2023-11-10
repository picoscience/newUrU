import React from 'react'
import leftArrow from '../../images/chevron-left-icon.svg'
import rigthArrow from '../../images/chevron-right-icon.svg'

const PaginationProds = () => {
    return (
        <div className='paginationProds container-fluid m-0 p-0'>
            <div className='row m-0 p-0 justify-content-center align-items-center'>
                <div className='paginationLeft pointerCurs'>
                    <img src={leftArrow} alt='leftArrow' />
                </div>
                <div className='itemPagination pointerCurs active'><span>1</span></div>
                <div className='itemPagination pointerCurs'><span>2</span></div>
                <div className='itemPagination pointerCurs'><span>3</span></div>
                <div className='itemPagination pointerCurs'><span>4</span></div>
                <div className='paginationRight pointerCurs'>
                    <img src={rigthArrow} alt='rigthArrow' />
                </div>
            </div>
        </div>
    )
}

export default PaginationProds