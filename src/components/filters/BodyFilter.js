import React, { useEffect, useState } from 'react'
import UserNeeds from './UsersNeeds'
import FilterProduct from './FilterProduct'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle'
import ButtonSpecs from './ButtonSpecs'
import ShowFiltered from './ShowFiltered'
import downArrow from '../../images/chevron-down-icon.svg'
import upArrow from '../../images/chevron-up-icon.svg'
import FiltersDesktop from './FiltersDesktop'
import { useSelector } from 'react-redux'
import {  
    setCelularRam, 
    setCelularRom, 
    setCelularCapacidad, 
    setCelularRed, 
    setCelularAddON, 
    setCelularSize 
} from '../../features/celular/celularSlice'
import {    
    setPortatilRam,
    setPortatilRom,
    setPortatilMarca,
    setPortatilTamanio,
    setPortatilOS,
    setPortatilGPU,
    setPortatilCPU
} from '../../features/portatil/portatilSlice'

const BodyFilter = ({ product }) => {
    const [flag,setFlag] = useState(false) 
    const celular = useSelector((state) => state.celular)
    const portatil = useSelector((state) => state.portatil)
    const specsCelular = {
        ram:{
            id:1,
            name:'Ram',
            state:celular.ram,
            setter:setCelularRam,
            options:{
                1:{value:1,text:'1GB'},
                2:{value:2,text:'2GB'},
                3:{value:3,text:'3GB'},
                4:{value:4,text:'4GB'},
                5:{value:5,text:'6GB'},
                6:{value:6,text:'8GB o más'},
            }
        },
        rom:{
            id:2,
            name:'Almacenamiento',
            state:celular.rom,
            setter:setCelularRom,
            options:{
                1:{value:1,text:'16GB o menos'},
                2:{value:2,text:'32GB'},
                3:{value:3,text:'64GB o más'}
            }
        }, 
        capacidad:{
            id:3,
            name:'Capacidad Batería',
            state:celular.capacidad,
            setter:setCelularCapacidad,
            options:{
                1:{value:1,text:'2000 a 2999 mAh'},
                2:{value:2,text:'3000 a 3999 mAh'},
                3:{value:3,text:'4000 a 4999 mAh'},
                4:{value:4,text:'más de 5000 mAh'},
            }
        },
        red:{
            id:4,
            name:'Red de datos',
            state:celular.red,
            setter:setCelularRed,
            options:{
                1:{value:1,text:'2G'},
                2:{value:2,text:'3G'},
                3:{value:3,text:'4G'},
                4:{value:4,text:'5G'},
            }
        },
        tamanio:{
            id:5,
            name:'Tamaño',
            state:celular.size,
            setter:setCelularSize,
            options:{
                1:{value:1,text:"5' o menos"},
                2:{value:2,text:"de 5' a 6'"},
                3:{value:3,text:"más de 6'"}
            }
        },
        marca:{
            id:6,
            name:'Adicionales',
            state:celular.addOn,
            setter:setCelularAddON,
            options:{
                1:{value:1,text:'Plegable'},
                2:{value:2,text:'Resistencia al agua'},
                3:{value:3,text:'Reconocimiento facial'}
            }
        },
    }
    const specsPortatil = {
        tamanio:{
            id:1,
            name:'Tamaño',
            state:portatil.tamanio,
            setter:setPortatilTamanio,
            options:{
                1:{value:1,text:"10' o menos"},
                2:{value:2,text:"de 11' a 12'"},
                3:{value:3,text:"de 13' a 14'"}
            }
        },
        os:{
            id:2,
            name:'Sistema Operativo',
            state:portatil.OS,
            setter:setPortatilOS,
            options:{
                1:{value:1,text:'Windows'},
                2:{value:2,text:'Chrome OS'},
                3:{value:3,text:'Mac'},
                4:{value:4,text:'Linux'}
            }
        }, 
        marca:{
            id:3,
            name:'Marca',
            state:portatil.marca,
            setter:setPortatilMarca,
            options:{
                1:{value:1,text:'HP'},
                2:{value:2,text:'Lenovo'},
                3:{value:3,text:'Apple'},
                4:{value:4,text:'Acer'}
            }
        },
        ram:{
            id:4,
            name:'Ram',
            state:portatil.ram,
            setter:setPortatilRam,
            options:{
                1:{value:1,text:'32GB'},
                2:{value:2,text:'16GB'},
                3:{value:3,text:'12GB'},
                4:{value:4,text:'8GB'},
                5:{value:5,text:'4GB'}
            }
        },
        cpu:{
            id:5,
            name:'Procesador',
            state:portatil.CPU,
            setter:setPortatilCPU,
            options:{
                1:{value:1,text:'AMD'},
                2:{value:2,text:'Intel'},
                3:{value:3,text:'Apple'}
            }
        },
        gpu:{
            id:6,
            name:'Tarjeta gráfica',
            state:portatil.GPU,
            setter:setPortatilGPU,
            options:{
                1:{value:1,text:'GeForce® RTX '},
                2:{value:2,text:'AMD Radeon RX'}
            }
        },
        rom:{
            id:6,
            name:'Tarjeta gráfica',
            state:portatil.rom,
            setter:setPortatilRom,
            options:{
                1:{value:1,text:'2TB'},
                2:{value:2,text:'1TB'},
                3:{value:3,text:'512GB'},
                4:{value:4,text:'256GB o menos'},
            }
        },
    }
    let specsProd = {}
    if (product==='celular') {
        specsProd = specsCelular
    }
    else if (product==='portatil') {
        specsProd = specsPortatil
    }
    else {
        specsProd = specsPortatil        
    }
    
    const handleClickClose = () => {        
        setFlag(!flag)
        const collapseMoreOptions = document.getElementById('collapseMoreOptions')
        const bsCollapse = new bootstrap.Collapse(collapseMoreOptions)
        if (collapseMoreOptions.classList.contains('show')) {
            bsCollapse.hide()
        } else {
            bsCollapse.show()
        }      
        const collapseSpecs = document.getElementById('collapseSpecs')
        if (collapseSpecs) {
            if (collapseSpecs.classList.contains('show')) {
                const bsCollapse1 = new bootstrap.Collapse(collapseSpecs, { toggle: false })
                bsCollapse1.hide()
            }
        }
    }

    useEffect(()=>{   
        setFlag(false)
        const collapseMoreOptions = document.getElementById('collapseMoreOptions')
        if (collapseMoreOptions.classList.contains('show')) {
            const bsCollapse = new bootstrap.Collapse(collapseMoreOptions, { toggle: false })
            bsCollapse.hide()
        }
        const collapseMoreSpecs = document.getElementById('collapseSpecs')
        if (collapseMoreSpecs) {
            if (collapseMoreSpecs.classList.contains('show')) {
                const bsCollapse1 = new bootstrap.Collapse(collapseMoreSpecs, { toggle: false })
                bsCollapse1.hide()
            }
        }
    },[product])



    return (
        <>
        <div className='row justify-content-center cuerpoFilter ps-lg-3 pe-lg-3'>
            <div className={`col-12 col-xl-11 col-xxl-10 contCuerpoFilter ${product === 'pc' ? 'izquierda' : product === 'tablet' ? 'derecha' : ''} ${(flag) ? 'active' : ''}`}>
                <div className='container-fluid p-0 m-0'>
                    <div className='row p-3 pb-0'>
                        <UserNeeds product={product} flag={flag}/>
                    </div>
                    <div className='row mt-2 mb-2 p-0 justify-content-center text-center'>
                        <span className={`text-center masFiltros ${(flag) ? 'active' : ''}`}>más opciones</span>
                    </div>     
                </div>               
            </div>                                              
        </div>                              
        <div className='row moreFilters justify-content-center'>
            <div onClick={()=>handleClickClose()} className={`toggleFilters d-flex justify-content-center align-items-start ${(flag) ? 'active' : ''}`}>
                <span className='d-lg-none'></span>
                <img src={downArrow} alt='chvronDown' className='d-none d-lg-flex chevronDown'/>
            </div>
        </div>  
        <div className='container-fluid'>
            <div className='row expandedFilters'>
                <div className="row p-0">
                    <div className="col p-0">
                        <div id="collapseMoreOptions" className='collapse multi-collapse p-0'>
                            <div className="card card-body m-0 p-0">
                                <div className='closeButton d-lg-none'></div>
                                <div className='closeButton1 d-lg-none'>
                                    <span onClick={() => handleClickClose()} >X</span>
                                </div>
                                <div className='closeText'></div>
                                <div className='closeText1' onClick={() => handleClickClose()}>
                                    menos opciones
                                    <img src={upArrow} alt='iconClose' className='d-none d-lg-flex upArrowClose'></img>
                                </div>
                                <div className='row p-0 m-0 justify-content-center align-items-center'>
                                    <div className='contentBodyOptions col-12 col-xl-11 col-xxl-10'>
                                        <div className='rowBodyOptions row justify-content-center'>
                                            <div className='closeText1Line d-none d-lg-flex mt-4 mb-3'></div>
                                            <div className={`col-12 col-lg-6 d-flex justify-content-center align-items-center separatorAfterDesktop`}>
                                                <FilterProduct product={product} specs={specsProd}/>
                                            </div>
                                            <div className={`d-none d-lg-inline col-6`}>
                                                <FiltersDesktop product={product} specs={specsProd}/>
                                            </div>
                                            <div className='closeText1Line d-none d-lg-flex mb-5 mt-3'></div>
                                        </div>
                                    </div>
                                </div>
                                <ButtonSpecs />
                            </div>                     
                        </div>
                    </div>
                </div>
            </div>  
        </div>        
        <ShowFiltered product={product}/>
        </>
    )
}

export default BodyFilter