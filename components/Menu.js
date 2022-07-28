import React from 'react';
import MenuItem from './MenuItem';

// const menuItemProps = { textHome: "home", urlHome: "/", textKontakt: "kontakt", urlKontakt: "/contact" }


const Menu = (props) => {
    // console.log(props);
    const { items } = props;
    // console.log(items);
    return (
        <ul style={
            {
                display: "flex",
                justifyContent: "space-evenly",
                width: "100%",
                listStyle: "none",
                margin: "0",
                padding: "0",

            }
        } >
            {/* <MenuItem {...props} /> */}
            {/* {items.map(item => <MenuItem  {...item} />)} */}

            {items.map((item, i) => <MenuItem key={i} text={item.text} url={item.url} />)}
        </ul>
    )
}

export default Menu;