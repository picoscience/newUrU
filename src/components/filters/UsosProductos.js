import React from 'react'
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
        { id: 1, text: 'Q1PC' },
        { id: 2, text: 'Q2PC' },
        { id: 3, text: 'Q3PC' },
        { id: 4, text: 'Q4PC' },
    ]
    const questionsPort = [
        { id: 1, text: 'Q1Port' },
        { id: 2, text: 'Q2Port' },
        { id: 3, text: 'Q3Port' },
        { id: 4, text: 'Q4Port' },
        { id: 5, text: 'Q5Port' },
    ]
    const questionsCel = [
        { id: 1, text: 'Q1PCEL' },
        { id: 2, text: 'Q2PCEL' },
        { id: 3, text: 'Q3PCEL' },
        { id: 4, text: 'Q4PCEL' },
        { id: 5, text: 'Q5PCEL' },
        { id: 6, text: 'Q6PCEL' },
    ]
    const questionsTab = [
        { id: 1, text: 'Q1Tab' },
        { id: 2, text: 'Q2Tab' },
        { id: 3, text: 'Q3Tab' },
        { id: 4, text: 'Q4Tab' },
        { id: 5, text: 'Q5Tab' },
        { id: 6, text: 'Q6Tab' },
        { id: 7, text: 'Q7Tab' },
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
            {questions.map((question) => (
                <div key={question.id} className='col-3 colsNeeds p-0'>
                    <div onClick={() => handleClick(question.id)} className={`contUserNeeds ${tempVar === question.id ? 'active' : ''}`}>
                        <span>{question.text}</span>
                        <div className='semiBorder'></div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default UsosProductos
