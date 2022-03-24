import Footer from "./Footer"
import NavBar from "./NavBar"

const Layout : React.FC = ({children})=>{

    return (
        <div className="flex flex-col h-screen justify-between">
            <div>
                <NavBar/>
                <main className="container mx-auto mt-20">{children}</main>
            </div>
            <Footer/>
        </div>
    )
}

export default Layout;