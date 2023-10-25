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

const OnlySpecs = ({ product }) => {
    const celular = useSelector((state) => state.celular)
    const specsCelular = {
        ram:{
            id:1,
            state:celular.ram,
            setter:setCelularRam,
            options:{
                1:{value:1,text:'1'},
                2:{value:2,text:'2'},
                3:{value:3,text:'3'}
            }
        },
        rom:{
            id:2,
            state:celular.rom,
            setter:setCelularRom,
            options:{
                1:{value:1,text:'1'},
                2:{value:2,text:'2'},
                3:{value:3,text:'3'}
            }
        }, 
        os:{
            id:3,
            state:celular.os,
            setter:setCelularOs,
            options:{
                1:{value:1,text:'1'},
                2:{value:2,text:'2'},
                3:{value:3,text:'3'}
            }
        },
        size:{
            id:4,
            state:celular.size,
            setter:setCelularSize,
            options:{
                1:{value:1,text:'1'},
                2:{value:2,text:'2'},
                3:{value:3,text:'3'}
            }
        },
        camera:{
            id:5,
            state:celular.camera,
            setter:setCelularCamera,
            options:{
                1:{value:1,text:'1'},
                2:{value:2,text:'2'},
                3:{value:3,text:'3'}
            }
        },
        marca:{
            id:6,
            state:celular.marca,
            setter:setCelularMarca,
            options:{
                1:{value:1,text:'1'},
                2:{value:2,text:'2'},
                3:{value:3,text:'3'}
            }
        },
    }
    return (
        <div></div>
    )
}

export default OnlySpecs