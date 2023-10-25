import React from 'react'

const Rowprods = (props) => {
    const { prod1, prod2, down } = props
    let bgColor = 'container-fluid'
    if (down) {
        bgColor = 'container-fluid down'
    }
    return (
        <div className='row mb-5'>
            <div className='col-6 leftProd'>
                <div className={bgColor}>
                    <div className='row rowImgs justify-content-center'>
                        <img src={prod1.img}></img>
                    </div>
                    <div className='row'>
                        <span className='nameProds'>
                            {prod1.name} 
                        </span>
                    </div>
                </div>
            </div>
            <div className='col-6 rightProd'>
                <div className={bgColor}>
                    <div className='row rowImgs justify-content-center'>
                        <img src={prod2.img}></img>
                    </div>
                    <div className='row'>
                        <span className='nameProds'>
                            {prod2.name} 
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rowprods