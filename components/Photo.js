import React from 'react';

export const Photo = (props) => {
    const { src, title, date, author } = props
    return (
        <div style={
            {
                display: "flex",
                flexDirection: "column",
                // justifyContent: "center",
                alignItems: "center",
                width: "45%",
                height: "300px",
                border: "2px solid red",
                borderRadius: "10px",
                margin: "2px",
                backgroundImage: "linear-gradient(to bottom, #1ac8c4, #24ccc9, #2dcfcd, #34d3d2, #3bd7d7, #2dd7e5, #2ad6f1, #36d4fc, #62cbff, #94bfff, #c1b0fe, #e3a2e6)"
            }
        }>
            <img src={src} alt={title}
                style={
                    {
                        flexBasis: "60%"
                    }
                }
            />
            <div
                style={
                    {
                        flexBasis: "30%"
                    }
                }
            >
                <h5>Tytuł: {title} </h5>
                <h6>Data wykonania: {date}</h6>
                <h6>Autor: {author}</h6>
            </div>

        </div>
    )
}

export default Photo;