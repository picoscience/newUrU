import React from 'react'
import pcImgDemo from '../../images/port.png'
import mejorPorcen from '../../images/mejor_procen1.png'
import mejorPorcen1 from '../../images/mejor_procen2.png'

const ShowDesktopBest3 = () => {
    return (        
        <div className='row m-0 p-0 rowBest3Desktop justify-content-center'>
            <div className='best3Desktop'>
                <div className='floatCalifDesktop'>
                    <div className='titlePorcenDektop'><span>porcentaje de coincidencia</span></div>
                    <div><img src={mejorPorcen} alt='porcentCalif'/></div>
                </div>
                <div className='contImgBest3'>
                    <div className='subContImg3'>
                        <img src={pcImgDemo} alt='pcDemo'/>
                        <div className='floatNameDesktopShow'>NOMBRE1</div>
                        <div className='floatLogoDesktopShow'>LOGO1<br/>VENDEDOR</div>
                    </div>
                </div>
                <div className='contDescBest3'>Lorem ipsum dolor sit amet consectetur adipiscing elit felis hac vivamus, augue dui sociosqu enim consequat.</div>
            </div>
            <div className='best3Desktop'>
                <div className='floatCalifDesktop'>
                    <div className='titlePorcenDektop'><span>porcentaje de coincidencia</span></div>
                    <div><img src={mejorPorcen1} alt='porcentCalif'/></div>
                </div>
                <div className='contImgBest3'>
                    <div className='subContImg3'>
                        <img src={pcImgDemo} alt='pcDemo'/>
                        <div className='floatNameDesktopShow'>NOMBRE2</div>
                        <div className='floatLogoDesktopShow'>LOGO2<br/>VENDEDOR</div>
                    </div>                    
                </div>
                <div className='contDescBest3'>Lorem ipsum dolor sit amet consectetur adipiscing elit felis hac vivamus, augue dui sociosqu enim consequat.</div>
            </div>
            <div className='best3Desktop'>
                <div className='floatCalifDesktop'>
                    <div className='titlePorcenDektop'><span>porcentaje de coincidencia</span></div>
                    <div><img src={mejorPorcen1} alt='porcentCalif'/></div>                                    
                </div>
                <div className='contImgBest3'>
                    <div className='subContImg3'>
                        <img src={pcImgDemo} alt='pcDemo'/>
                        <div className='floatNameDesktopShow'>NOMBRE3</div>
                        <div className='floatLogoDesktopShow'>LOGO2<br/>VENDEDOR</div>
                    </div>                    
                </div>
                <div className='contDescBest3'>Lorem ipsum dolor sit amet consectetur adipiscing elit felis hac vivamus, augue dui sociosqu enim consequat.</div>
            </div>
        </div>
    )
}

export default ShowDesktopBest3