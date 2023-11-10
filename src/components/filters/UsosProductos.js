import React from 'react'
import usoBasico from '../../images/usos/Basico.svg'
import usoColegial from '../../images/usos/Colegial.svg'
import usoDisenio from '../../images/usos/Disenio.svg'
import usoEdirenders from '../../images/usos/Edirenders.svg'
import usoTecnologia from '../../images/usos/esTecnologia.svg'
import usoGaming from '../../images/usos/Gaming.svg'
import usoOficina from '../../images/usos/Oficina.svg'
import usoUniversitario from '../../images/usos/Universitario.svg'
import { useDispatch, useSelector } from 'react-redux'
import { setPcQ1 } from '../../features/pc/pcSlice'
import { setPortatilQ2 } from '../../features/portatil/portatilSlice'
import { setCelularQ1 } from '../../features/celular/celularSlice'
import { setTabletQ1 } from '../../features/tablet/tabletSlice'

const UsosProductos = ({ product }) => {
    const pc = useSelector((state) => state.pc)
    const portatil = useSelector((state) => state.portatil)
    const celular = useSelector((state) => state.celular)
    const tablet = useSelector((state) => state.tablet)
    const dispatch = useDispatch()
    let tempVar = null
    let questions = null
    const questionsPc = [
        { id: 1, text: 'Q1PC' , img: usoBasico },
        { id: 2, text: 'Q2PC' , img: usoTecnologia },
        { id: 3, text: 'Q3PC' , img: usoGaming },
        { id: 4, text: 'Q4PC' , img: usoUniversitario },
    ]
    const questionsPort = [
        { id: 1, text: 'básico' , img: usoBasico },
        { id: 2, text: 'colegial' , img: usoColegial },
        { id: 3, text: 'diseño' , img: usoDisenio },
        { id: 4, text: 'renders' , img: usoEdirenders },
        { id: 5, text: 'tech' , img: usoTecnologia },
        { id: 6, text: 'gaming' , img: usoGaming },
        { id: 7, text: 'universidad' , img: usoUniversitario },
    ]
    const questionsCel = [
        { id: 1, text: 'redes y wa' , img: usoBasico },
        { id: 2, text: 'influencer' , img: usoDisenio },
        { id: 3, text: 'gamer' , img: usoGaming },
        { id: 4, text: 'videollamadas y docs' , img: usoBasico },
        { id: 5, text: 'fotografía' , img: usoOficina },
    ]
    const questionsTab = [
        { id: 1, text: 'Q1Tab' , img: usoBasico },
        { id: 2, text: 'Q2Tab' , img: usoEdirenders },
        { id: 3, text: 'Q3Tab' , img: usoOficina },
        { id: 4, text: 'Q4Tab' , img: usoGaming },
        { id: 5, text: 'Q5Tab' , img: usoColegial },
        { id: 6, text: 'Q6Tab' , img: usoUniversitario },
        { id: 7, text: 'Q7Tab' , img: usoOficina },
    ]
    if (product === 'portatil') {
        tempVar = portatil.Q2
        questions = questionsPort
    }
    if (product === 'celular') {
        tempVar = celular.Q1
        questions = questionsCel
    }
    if (product === 'pc') {
        tempVar = pc.Q1
        questions = questionsPc
    }
    if (product === 'tablet') {
        tempVar = tablet.Q1
        questions = questionsTab
    }
    const handleClick = (value) => {
        if (product === 'portatil') {
            dispatch(setPortatilQ2(value))
        }
        if (product === 'celular') {
            dispatch(setCelularQ1(value))
        }
        if (product === 'pc') {
            dispatch(setPcQ1(value))
        }
        if (product === 'tablet') {
            dispatch(setTabletQ1(value))
        }
    }
    return (
        <>
        <div className='row justify-content-center align-items-start'>
            {questions.map((question) => (
                <div key={question.id} className='col-3 colsNeeds p-0'>
                    <div onClick={() => handleClick(question.id)} className={`contUserNeeds ${tempVar === question.id ? 'active' : ''}`}>
                        <span className='d-lg-none'>{question.text}</span>
                        <div className='semiBorder d-lg-none'></div>
                        <div className='dektopUsosOptions d-none d-lg-flex justify-content-center'>
                            <img src={question.img} alt='usoDemo'/>
                            <span>{question.text}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        </>
    )
}

export default UsosProductos
