import {Routes, Route} from "react-router-dom"
import './app.sass'
import Layout from "../layout/Layout"
import Home from "../../pages/home/Home"
import Settings from "../../pages/settings/Settings";
import {useSelector} from "react-redux"
import Error from "./Error"

const App = () => {
    const user = useSelector(state => state.user)
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>}/>
                {/*<Route path='blog' element={}/>*/}
                {/*<Route path='blog/:id' element={}/>*/}
                {/*<Route path='adds'/>*/}
                {(user.email !== null || user.phone !== null) && <Route path='settings' element={<Settings/>}/>}
                <Route path='*' element={<Error/>}/>

            </Route>
        </Routes>
    )
}

export default App