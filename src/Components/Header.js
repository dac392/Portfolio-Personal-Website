import React, { useState } from "react";
import ManueIcon from "./MenueIcon";
import MainNav from "./MainNav";

const Header = ()=>{

    const [navbarStatus, setNavbarStatus] = useState(false);

    return (
        <header>
            <nav>
                <ManueIcon status={navbarStatus} setVisible={setNavbarStatus} />
                <MainNav status={navbarStatus} setVisible={setNavbarStatus} />

            </nav>
        </header>
    );
}

export default Header;