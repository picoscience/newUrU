import React from 'react'
import pcImgDemo from '../../images/port.png'
import mejorPorcen from '../../images/mejor_procen1.png'
import mejorPorcen1 from '../../images/mejor_procen2.png'
import Best3Component from './Best3Component'

const ShowDesktopBest3 = () => {
    return (        
        <div className='row m-0 p-0 rowBest3Desktop justify-content-center'>
            <Best3Component imgPorcen={mejorPorcen} imgDisp={pcImgDemo} nameSeller={'NAME1'} porcentaje={99} precio={9999999} first={true} />
            <Best3Component imgPorcen={mejorPorcen1} imgDisp={pcImgDemo} nameSeller={'NAME2'} porcentaje={90} precio={8999999} first={false} />
            <Best3Component imgPorcen={mejorPorcen1} imgDisp={pcImgDemo} nameSeller={'NAME3'} porcentaje={85} precio={7999999} first={false} />
        </div>
    )
}

export default ShowDesktopBest3