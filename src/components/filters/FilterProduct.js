import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPortatilQ1, setPortatilQ3, setPortatilQ4 } from '../../features/portatil/portatilSlice'
import { setPcQ2, setPcQ3 } from '../../features/pc/pcSlice'
import { setTabletQ2 } from '../../features/tablet/tabletSlice'
import { setCelularQ2, setCelularQ3 } from '../../features/celular/celularSlice'
import FloatSpecs from './FloatSpecs'
//
import despAuto from '../../images/Desplazamiento/Automovil.svg'
import despBici from '../../images/Desplazamiento/Bicicleta.svg'
import despMoto from '../../images/Desplazamiento/Motocicleta.svg'
import despCamina from '../../images/Desplazamiento/Caminando.svg'
import despBus from '../../images/Desplazamiento/Bus.svg'
//
import almDocs from '../../images/TipoArchivos/Doc.svg'
import almImg from '../../images/TipoArchivos/IMG.svg'
import almJuegos from '../../images/TipoArchivos/Juegos.svg'
import almMusica from '../../images/TipoArchivos/Musica.svg'
import almVideo from '../../images/TipoArchivos/Video.svg'


const FilterProduct = ({ product, specs }) => {
    const pc = useSelector((state) => state.pc)
    const portatil = useSelector((state) => state.portatil)
    const tablet = useSelector((state) => state.tablet)
    const celular = useSelector((state) => state.celular)
    const dispatch = useDispatch()
    let subQuestions = null
    const SubQuestionsPc = {
        'SUB PC 1': {          
            1:{ id: 1, text: 'SQ1', state:pc.Q2, setter:setPcQ2, img:despCamina},
            2:{ id: 2, text: 'SQ2', state:pc.Q2, setter:setPcQ2, img:despCamina},
        },
        'SUB PC 2': {          
            1:{ id: 1, text: 'SQ3', state:pc.Q3, setter:setPcQ3, img:despCamina},
            2:{ id: 2, text: 'SQ4', state:pc.Q3, setter:setPcQ3, img:despCamina},
        },
    }
    const SubQuestionsPort = {
        'Lo transportaré en:': {          
            1:{ id: 1, text: 'caminando', state:portatil.Q1, setter:setPortatilQ1, img:despCamina},
            2:{ id: 2, text: 'bicicleta', state:portatil.Q1, setter:setPortatilQ1, img:despBici},
            3:{ id: 3, text: 'motocicleta', state:portatil.Q1, setter:setPortatilQ1, img:despMoto},
            4:{ id: 4, text: 'automóvil', state:portatil.Q1, setter:setPortatilQ1, img:despAuto},
            5:{ id: 5, text: 'transporte público', state:portatil.Q1, setter:setPortatilQ1, img:despBus},
        },
        'conexión eléctrica necesaria': {          
            1:{ id: 1, text: 'en todo momento', state:portatil.Q3, setter:setPortatilQ3, img:despAuto},
            2:{ id: 2, text: 'muchas veces', state:portatil.Q3, setter:setPortatilQ3, img:despAuto},
            3:{ id: 3, text: 'pocas veces', state:portatil.Q3, setter:setPortatilQ3, img:despAuto},
        },
        'uso del almacenamiento': {          
            1:{ id: 1, text: 'imágenes', state:portatil.Q4, setter:setPortatilQ4, img:almImg},
            2:{ id: 2, text: 'videos', state:portatil.Q4, setter:setPortatilQ4, img:almVideo},
            3:{ id: 3, text: 'música', state:portatil.Q4, setter:setPortatilQ4, img:almMusica},
            4:{ id: 4, text: 'juegos', state:portatil.Q4, setter:setPortatilQ4, img:almJuegos},
            5:{ id: 5, text: 'documentos', state:portatil.Q4, setter:setPortatilQ4, img:almDocs},
        },
    }
    const SubQuestionsCel = {
        'conexión eléctrica necesaria': {          
            1:{ id: 1, text: 'en todo momento', state:celular.Q3, setter:setCelularQ3, img:despAuto},
            2:{ id: 2, text: 'muchas veces', state:celular.Q3, setter:setCelularQ3, img:despAuto},
            3:{ id: 3, text: 'pocas veces', state:celular.Q3, setter:setCelularQ3, img:despAuto},
        },
        'prefiero los celulares:': {          
            1:{ id: 1, text: 'Samsung', state:celular.Q2, setter:setCelularQ2, img:despCamina},
            2:{ id: 2, text: 'Apple', state:celular.Q2, setter:setCelularQ2, img:despBici},
            3:{ id: 3, text: 'Xiaomi', state:celular.Q2, setter:setCelularQ2, img:despMoto},
            4:{ id: 4, text: 'Honor', state:celular.Q2, setter:setCelularQ2, img:despAuto},
            5:{ id: 5, text: 'Vivo', state:celular.Q2, setter:setCelularQ2, img:despBus},
            6:{ id: 6, text: 'Oppo', state:celular.Q2, setter:setCelularQ2, img:despBus},
            7:{ id: 7, text: 'Tecno', state:celular.Q2, setter:setCelularQ2, img:despBus},
            8:{ id: 8, text: 'Motorola', state:celular.Q2, setter:setCelularQ2, img:despBus},
        },
        
    }
    const SubQuestionsTab = {
        'SUB TABLET 1': {          
            1:{ id: 1, text: 'SQ1', state:tablet.Q2, setter:setTabletQ2, img:despCamina},
            2:{ id: 2, text: 'SQ2', state:tablet.Q2, setter:setTabletQ2, img:despCamina},
        },
    }
    if (product === 'portatil') {
        subQuestions = SubQuestionsPort
    }
    if (product === 'celular') {
        subQuestions = SubQuestionsCel
    }
    if (product === 'pc') {
        subQuestions = SubQuestionsPc
    }
    if (product === 'tablet') {
        subQuestions = SubQuestionsTab
    }
    const handleClick = (value,setter) => {
        dispatch(setter(value))
    }
    return (
        <div className='container-fluid'>
            <div>                
                {                    
                Object.keys(subQuestions).map((questionKey) => (
                    <div key={questionKey} className='row justify-content-center'>
                        <div className='row titlePrice mb-4'>
                            <p className='mb-3 mb-sm-1 mb-md-0'>
                                {questionKey}
                                <span>{'(elige solo una opción)'}</span>
                            </p>
                        </div>
                        {Object.keys(subQuestions[questionKey]).map((subQuestionKey) => (
                            <div key={subQuestions[questionKey][subQuestionKey].id} className='colsNeeds1 col-3 col-lg-5 col-xxl-4 p-0'>
                                <div onClick={() => handleClick(subQuestions[questionKey][subQuestionKey].id,subQuestions[questionKey][subQuestionKey].setter)} className={`contUserNeeds secondary ${subQuestions[questionKey][subQuestionKey].state === subQuestions[questionKey][subQuestionKey].id ? 'active' : ''}`}>
                                    <div className={`contaSecondImg d-none d-lg-flex ${subQuestions[questionKey][subQuestionKey].text === 'transporte público' ? 'transPublic' : ''}`}>
                                        <img src={subQuestions[questionKey][subQuestionKey].img} alt='imgSecondUser'/>
                                    </div>
                                    <div className='text-center spanSecond'>{subQuestions[questionKey][subQuestionKey].text}</div>
                                    <div className='semiBorder d-lg-none'></div>
                                </div>
                            </div>
                        ))}
                    </div>
                ))
                }
                {
                <div className='d-lg-none'>
                {
                    <FloatSpecs product={product} specs={specs}/>
                }
                </div>
                }
            </div>
        </div>
    )
}

export default FilterProduct