import React from 'react';

export const Logo = (props) => {

    const { url, src, alt } = props

    return (<div

    >
        <a
            style={
                {
                    color: "white",
                    textDecoration: "none"
                }
            }
            href={url}> <img src={src} alt={alt} /></a>
    </div>)

}



export default Logo