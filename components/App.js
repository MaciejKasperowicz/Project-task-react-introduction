import React from 'react';

import Header from './Header';
import Content from './Content';
import Footer from './Footer';

export const App = () => (
    <div
        style={
            {
                margin: 0,
                padding: 0,
                boxSizing: "border-box",
                fontFamily: "sans-serif",
                // backgroundImage: "linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)",
                backgroundImage: "linear-gradient(to bottom, #2e9fe9, #00b6f2, #00caeb, #00dcd6, #12ebb9)",
                color: "#0B32A5"
            }
        }
    >
        <Header />
        <Content />
        <Footer />
    </div>
)

export default App