import React from "react";

function Navigation(props) {
    const tabs = ["about", "contact", "portfolio"];

    return (
        <section>
          <ul>
            {tabs.map((tab) => (
              <li key={tab}>
                <a
                  href={"#" + tab} 
                  onClick={() => props.handlePageChange(tab)}
                >
                  {tab}
                </a>
              </li>
            ))}
          </ul>
        </section>
    );
}

export default Navigation;