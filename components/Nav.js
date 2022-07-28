import React from 'react';
import Menu from "./Menu"

const Nav = () => {
    return (
        <nav style={
            {
                width: "100%",
            }
        }>
            <Menu
                items={[
                    { text: 'strona główna', url: '/main' },
                    { text: 'o nas', url: '/aboutus' },
                    { text: 'produkty', url: '/products' },
                    { text: 'kontakt', url: '/contact' },
                ]}
            />
        </nav>
    )
}
export default Nav;