
import Menu from "../../components/home/menu/Menu"
import Main from "../../components/home/main/Main"

const Home = () => {
    return (
        <>
            <section className="menu">
                <div className="wrapper">
                    <Menu/>
                </div>
            </section>
            <section className="main">
                <div className="wrapper">
                    <Main/>
                </div>
            </section>
        </>

    )
}

export default Home