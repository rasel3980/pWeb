import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const MainLayout = () => {
    return (
        <div className="bg-[#98f1df] ">
            <Navbar></Navbar>
            <div className="w-11/12 min-h-[500px] mx-auto">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;