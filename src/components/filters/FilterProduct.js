import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPortatilQ1, setPortatilQ3, setPortatilQ4 } from '../../features/portatil/portatilSlice'
import { setPcQ2, setPcQ3 } from '../../features/pc/pcSlice'
import { setTabletQ2 } from '../../features/tablet/tabletSlice'
import FilterSpecs from './FilterSpecs'

const FilterProduct = ({ product }) => {
    const pc = useSelector((state) => state.pc)
    const portatil = useSelector((state) => state.portatil)
    const celular = useSelector((state) => state.celular)
    const tablet = useSelector((state) => state.tablet)
    const dispatch = useDispatch()
    let subQuestions = null
    const SubQuestionsPc = {
        'SUB PC 1': {          
            1:{ id: 1, text: 'SQ1', state:pc.Q2, setter:setPcQ2},
            2:{ id: 2, text: 'SQ2', state:pc.Q2, setter:setPcQ2},
        },
        'SUB PC 2': {          
            1:{ id: 1, text: 'SQ3', state:pc.Q3, setter:setPcQ3},
            2:{ id: 2, text: 'SQ4', state:pc.Q3, setter:setPcQ3},
        },
    }
    const SubQuestionsPort = {
        'SUB PORT 1': {          
            1:{ id: 1, text: 'SQ1', state:portatil.Q1, setter:setPortatilQ1},
            2:{ id: 2, text: 'SQ2', state:portatil.Q1, setter:setPortatilQ1},
        },
        'SUB PORT 2': {          
            1:{ id: 1, text: 'SQ3', state:portatil.Q3, setter:setPortatilQ3},
            2:{ id: 2, text: 'SQ4', state:portatil.Q3, setter:setPortatilQ3},
        },
        'SUB PORT 3': {          
            1:{ id: 1, text: 'SQ5', state:portatil.Q4, setter:setPortatilQ4},
            2:{ id: 2, text: 'SQ6', state:portatil.Q4, setter:setPortatilQ4},
        },
    }
    const SubQuestionsCel = null
    const SubQuestionsTab = {
        'SUB TABLET 1': {          
            1:{ id: 1, text: 'SQ1', state:tablet.Q2, setter:setTabletQ2},
            2:{ id: 2, text: 'SQ2', state:tablet.Q2, setter:setTabletQ2},
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
                {subQuestions !== null 
                &&                    
                Object.keys(subQuestions).map((questionKey) => (
                    <div key={questionKey} className='row justify-content-center'>
                        <div className='row titlePrice'>
                            <h2 className='mb-3 mb-sm-1 mb-md-0'>{questionKey}</h2>
                            <span>{'(elige solo una opción)'}</span>
                        </div>
                        {Object.keys(subQuestions[questionKey]).map((subQuestionKey) => (
                            <div key={subQuestions[questionKey][subQuestionKey].id} className='col-3 colsNeeds p-0'>
                                <div onClick={() => handleClick(subQuestions[questionKey][subQuestionKey].id,subQuestions[questionKey][subQuestionKey].setter)} className={`contUserNeeds ${subQuestions[questionKey][subQuestionKey].state === subQuestions[questionKey][subQuestionKey].id ? 'active' : ''}`}>
                                    <span>{subQuestions[questionKey][subQuestionKey].text}</span>
                                    <div className='semiBorder'></div>
                                </div>
                            </div>
                        ))}
                    </div>
                ))
                }
                {subQuestions !== null ?
                <FilterSpecs onlySpecs={false} product={product}/>   
                    :
                <FilterSpecs onlySpecs={true} product={product}/>
                }
            </div>
        </div>
    )
}

export default FilterProduct