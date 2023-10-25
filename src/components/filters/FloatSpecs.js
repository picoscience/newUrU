import React from 'react'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle'

const FloatSpecs = ({ product }) => {
    const handleClick = () => {
        const collapseMoreSpecs = document.getElementById('collapseSpecs')
        if (collapseMoreSpecs.classList.contains('show')) {
            const bsCollapse1 = new bootstrap.Collapse(collapseMoreSpecs, { toggle: false })
            bsCollapse1.hide()
        }
    }
    return (
        <div>            
            <div class="collapse collapseSpecs" id="collapseSpecs">                
                <div className='closeMoreSpecs' onClick={() => handleClick()}><span>x</span></div>
                <div className='contBodySpecs'>
                    <div class="bodySpecs">
                        Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                        Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                        Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                        Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                        Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                        Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                    </div>
                </div>
                <div className='footSpecs'></div>
            </div>            
            
        </div>
    )
}

export default FloatSpecs