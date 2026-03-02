import { Outlet } from "react-router-dom";
import Topbar from "./Topbar";
import NavBar from "./NavBar";
import Footer from "./Footer";

const UserLayout = () => {
    return (
        <>
            {/*Header*/}
            <header className="fixed top-0 left-0 w-full z-50">
                <Topbar />
                <NavBar />
            </header>
            {/*Main Content*/}
            <main className="pt-10">
                <Outlet />
            </main>
            {/*Footer*/}
            <Footer />
        </>
    );
};

export default UserLayout
