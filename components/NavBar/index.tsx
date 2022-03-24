import Link from "next/link"
import DropDown from "./DropDown"
import Github from "./Github"
import Search from "./Search"
import ThemeToggle from "./ThemeToggle"

const Navbar = ()=>{

    return (
        <div className="navbar bg-base-100 shadow-xl rounded-box fixed z-10">
            <div className="navbar-start" >
                <DropDown/>
            </div>
            <div className="navbar-center align-middle">
                <img className="h-10 w-10" src={`${process.env.NEXT_PUBLIC_ASSETS || ''}/nuv-logo.png`} />
                <Link href={'/'}>
                    <a className="normal-case text-xl ">
                        Nuv-Docs
                    </a>
                </Link>
            </div>
            <div className="navbar-end">
               <Search/>
               <Github/>
               <ThemeToggle/>
            </div>
        </div>
    )
}

export default Navbar;