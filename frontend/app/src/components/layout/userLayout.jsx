import { Outlet } from "react-router-dom";
import TopBar from "./TopBar";
import NavBar from "./NavBar";

const UserLayout = () => {
    return (
        <>
            {/*Header*/}
            <header className="fixed top-0 left-0 w-full z-50">
                <TopBar />
                <NavBar />
            </header>
            {/*Main Content*/}
            <main className="pt-10">
                <Outlet />
            </main>
            {/*Footer*/}
        </>
    );
};

export default UserLayout
