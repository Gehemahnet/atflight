import {Routes, Route} from "react-router-dom"
import './app.sass'
import Layout from "../layout/Layout"
import Home from "../../pages/home/Home"

const App = () => {

    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>}/>
                {/*<Route path='blog' element={}/>*/}
                {/*<Route path='blog/:id' element={}/>*/}
                {/*<Route path='adds'/>*/}
                {/*<Route path='settings'/>*/}
            </Route>
        </Routes>
    )
}

export default App