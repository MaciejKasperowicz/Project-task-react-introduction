import React from 'react';
import Logo from './Logo';
import Nav from './Nav';

export const Header = () => (
    <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "50%",
        height: "100px",
        margin: "0 auto",
        backgroundImage: "linear-gradient(to right top, #051c37, #004a6f, #007e9c, #00b4b6, #12ebb9)",
        borderRadius: "10px"

    }
    }>
        <Logo
            url="/" src="/" alt="Logo firmy"
        />
        <Nav />
    </div>
)

export default Header