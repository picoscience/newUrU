import React from 'react'
import { Provider } from 'react-redux'
import { store } from './app/store'
import Home from './containers/Home'
import Error404 from './containers/errors/Error404'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Filters from './containers/Filters'

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    {/* Error404 */}
                    <Route path='*' element={<Error404/>}/>
                    {/* Routes */}
                    <Route exact path='/filters' element={<Home/>}/>
                    <Route exact path='/' element={<Filters/>}/>
                </Routes>
            </Router>                        
        </Provider>      
    )
}

export default App
