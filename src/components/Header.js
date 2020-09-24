import React from "react";
import "./Header.css";

function Header() {
    return (
        <div class="App">
            <header class="calc-header">Jake's Calculator</header>
            <input type="text" class="calc-screen" value="0" disabled />
        </div>
    );
}
export default Header;
