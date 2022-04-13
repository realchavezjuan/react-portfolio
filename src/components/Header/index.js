import React, {useState} from "react";
import Navigation from "../Navigation";
import About from '../About';
import Contact from '../Contact';
import Portfolio from "../Portfolio";

function Header() {
    const [currentPage, handlePageChange] = useState("about");

    const renderPage = () => {
        switch (currentPage) {
            case "about":
                return <About />;
            case "contact":
                return <Contact />;
            case "portfolio":
                return <Portfolio />
            default:
                return <About />;
        }
    };

    return (
        <>
        <header>
            <h1>Juan C. Chavez</h1>
            <Navigation handlePageChange={handlePageChange} />
        </header>
        <main>
            <div>{renderPage(currentPage)}</div>
        </main>
        </>
    )
}

export default Header;