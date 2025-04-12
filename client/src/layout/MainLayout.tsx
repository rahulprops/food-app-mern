import Footer from "@/components/Footer"
import Navbar from "@/components/ui/Navbar"
import { Outlet } from "react-router-dom"


const MainLayout = () => {
  return (
    <div className=" flex flex-col min-h-screen m-2 md:m-0 ">
        {/* Navbar */}
        <header>
            <Navbar/>
        </header>
        <div className=" flex-1">
        <Outlet/>
        </div>
        <div>
            {/* Footer */}
            <Footer/>
        </div>

    </div>
  )
}

export default MainLayout