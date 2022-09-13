import {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import {set} from "../../redux/slices/themeSlice"
import "./theme-switcher.sass"
import sun from "../../assets/icons/layout/sun.svg"
import moon from "../../assets/icons/layout/moon.svg"


const ThemeSwitcher = () => {
    const theme = useSelector(state => state.theme)
    const dispatch = useDispatch()
    const handleChange = () => {
        const next = theme === "dark" ? "light" : "dark"
        dispatch(set(next))
        localStorage.setItem("theme", next)
    }
    useEffect(() => {
            const currentTheme = localStorage.getItem("theme")
            currentTheme === 'dark' ? document.body.classList.add('dark') : document.body.classList.remove('dark')
        }, [theme]
    )
    return (
        <button
            className={`theme-switcher ${theme}`}
            onClick={handleChange}
        >
            <img src={sun} alt="" draggable={false}/>
            <img src={moon} alt="" draggable={false}/>
        </button>
    )
}

export default ThemeSwitcher