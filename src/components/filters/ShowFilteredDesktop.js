import React from 'react'
import ShowDesktopBest3 from './ShowDesktopBest3'
import ShowDesktopBest from './ShowDesktopBest'

const ShowFilteredDesktop = () => {
    return (
        <div className='container-fluid p-0 m-0 rowdesktopFiltereds'>
            <div className='orderResultsDesktop'>
                <div className='numColumns'>CHOOSE</div>
            </div>
            <ShowDesktopBest3 />
            <ShowDesktopBest cols={1}/>
        </div>
    )
}

export default ShowFilteredDesktop