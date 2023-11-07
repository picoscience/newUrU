import React from 'react'
import ShowDesktopBest3 from './ShowDesktopBest3'
import ShowDesktopBest from './ShowDesktopBest'

const ShowFilteredDesktop = () => {
    return (
        <div className='container-fluid p-0 m-0 rowdesktopFiltereds'>
            <ShowDesktopBest3 />
            <ShowDesktopBest />
        </div>
    )
}

export default ShowFilteredDesktop