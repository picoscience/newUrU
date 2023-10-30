import React from 'react'
import Layout from '../hocs/Layout'
import backHome from '../images/fondocelular.png'
import imgCel from '../images/cel.png'
import imgPort from '../images/port.png'
import imgPc from '../images/comp.png'
import imgTab from '../images/tab.png'
import Rowprods from '../components/home/Rowprods'

const Home = () => {
    const dictCel = {
        img: imgCel,
        name: 'Celular'
    }
    const dictPort = {
        img: imgPort,
        name: 'Portátil'
    }
    const dictPc = {
        img: imgPc,
        name: 'PC'
    }
    const dictTab = {
        img: imgTab,
        name: 'Tablet'
    }
    return (
        <Layout>
            <div className="container-fluid containerHome">
                <img src={backHome} alt="Background" className="img-fluid imgBack"/>
                <div className='titleMenu'>
                    <span className='text-center'>
                    ¿QUÉ EQUIPO BUSCAS?  
                    </span>
                </div>
                <div className='container-fluid m-0 cont-celulares'>
                    <Rowprods prod1={dictPort} prod2={dictCel} down={false}/>    
                    <Rowprods prod1={dictPc} prod2={dictTab} down={true}/>                
                </div>                
            </div>
        </Layout>
    )
}

export default Home