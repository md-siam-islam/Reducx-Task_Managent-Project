import Navbar from "@/Navbar/Navbar"
import { Outlet } from "react-router"

function Homelayout(){
    return(
        <div>
            <Navbar></Navbar>
            <div className='min-h-[calc(100vh-260px)]'>
                <Outlet></Outlet>
            </div>
        </div>
    )
}

export default Homelayout