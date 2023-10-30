import React from 'react'
import { useSelector } from 'react-redux'
import { 
    setCelularCamera, 
    setCelularMarca, 
    setCelularOs, 
    setCelularRam, 
    setCelularRom, 
    setCelularSize 
} from '../../features/celular/celularSlice'
import Desplegable from './Desplegable'

const OnlySpecs = ({ product }) => {
    const celular = useSelector((state) => state.celular)
    const specsCelular = {
        ram:{
            id:1,
            name:'Ram',
            state:celular.ram,
            setter:setCelularRam,
            options:{
                1:{value:1,text:'RAM1'},
                2:{value:2,text:'RAM2'},
                3:{value:3,text:'RAM3'}
            }
        },
        rom:{
            id:2,
            name:'Rom',
            state:celular.rom,
            setter:setCelularRom,
            options:{
                1:{value:1,text:'ROM1'},
                2:{value:2,text:'ROM2'},
                3:{value:3,text:'ROM3'}
            }
        }, 
        os:{
            id:3,
            name:'OS',
            state:celular.os,
            setter:setCelularOs,
            options:{
                1:{value:1,text:'OS1'},
                2:{value:2,text:'OS2'},
                3:{value:3,text:'OS3'}
            }
        },
        size:{
            id:4,
            name:'Tamaño',
            state:celular.size,
            setter:setCelularSize,
            options:{
                1:{value:1,text:'SIZE1'},
                2:{value:2,text:'SIZE2'},
                3:{value:3,text:'SIZE3'}
            }
        },
        camera:{
            id:5,
            name:'Camara',
            state:celular.camera,
            setter:setCelularCamera,
            options:{
                1:{value:1,text:'CAMERA1'},
                2:{value:2,text:'CAMERA2'},
                3:{value:3,text:'CAMERA3'}
            }
        },
        marca:{
            id:6,
            name:'Marca',
            state:celular.marca,
            setter:setCelularMarca,
            options:{
                1:{value:1,text:'MARCA1'},
                2:{value:2,text:'MARCA2'},
                3:{value:3,text:'MARCA3'}
            }
        },
    }
    return (
        <div>                          
            <div className='contBodySpecs onlySpecs'>
                <div className="bodySpecs onlySpecs">                        
                    <div className='row'>
                        {Object.values(specsCelular).map(spec => (
                        <Desplegable
                            key={spec.id} // Asegúrate de proporcionar una clave única
                            specsDict={spec}
                        />
                        ))}        
                    </div>  
                    <div className='buttonSearch d-flex align-items-center justify-content-center'><div>buscar</div></div>                  
                </div>
            </div>
        </div>   
    )
}

export default OnlySpecs