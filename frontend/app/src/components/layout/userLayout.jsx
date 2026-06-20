import { Outlet } from "react-router-dom";
import Topbar from "./Topbar";
import NavBar from "./NavBar";
import Footer from "./Footer";

const UserLayout = () => {
    return (
        <>
            {/* Topbar scrolls away naturally */}
            <Topbar />
            
            {/* NavBar is sticky and manages its own transitions */}
            <NavBar />
            
            {/* Main Content flows naturally without artificial top padding */}
            <main className="relative">
                <Outlet />
            </main>
            
            {/*Footer*/}
            <Footer />
        </>
    );
};

export default UserLayout;
