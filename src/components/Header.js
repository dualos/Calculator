import React from "react";

function Header() {
    return (
        <div className="App">
            <header className="calc-header">Jake's Calculator</header>
            <input type="text" class="calc-screen" value="0" disabled />
        </div>
    );
}

export default Header;
