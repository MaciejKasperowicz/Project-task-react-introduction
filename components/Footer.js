import React from 'react';
import Copyrights from './Copyrights';
import Nav from './Nav';


const content = {
    name: "Macio",
    company: "superSoftWareHouse",
    date: "22.07.2022"
}

export class Footer extends React.Component {
    render() {
        return (
            <div>
                <div
                    style={
                        {
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "50%",
                            height: "100px",
                            margin: "10px auto",
                            backgroundImage: "linear-gradient(to right top, #051c37, #004a6f, #007e9c, #00b4b6, #12ebb9)",
                            color: "white"
                        }
                    }
                >
                    <Nav />
                </div>
                <div
                    style={
                        {
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }
                    }
                >
                    <Copyrights content={content} />
                </div>
            </div>
        )
    }
}

export default Footer;