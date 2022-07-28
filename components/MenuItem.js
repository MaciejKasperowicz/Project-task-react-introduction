import React from 'react';
import PropTypes from 'prop-types';


export const MenuItem = (props) => {
    const { text, url, id } = props;
    return (
        <>
            <li>
                <a
                    style={
                        {
                            textDecoration: "none",
                            color: "white"
                        }
                    }
                    key={id} href={url}> {text}</a>
            </li>
        </>
    )
}

MenuItem.propTypes = {
    text: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}




export default MenuItem;