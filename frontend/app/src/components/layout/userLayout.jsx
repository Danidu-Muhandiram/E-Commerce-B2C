import { Outlet } from "react-router-dom";
import Topbar from "./Topbar";
import NavBar from "./NavBar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import CartDrawer from "../cart/CartDrawer";

const UserLayout = () => {
    return (
        <>
            <ScrollToTop />
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

            <CartDrawer />
        </>
    );
};

export default UserLayout;
