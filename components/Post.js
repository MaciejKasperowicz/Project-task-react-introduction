import React from 'react';

export class Post extends React.Component {
    render() {
        const { id, title, text, author, date, width } = this.props
        return (
            <div
                style={
                    {
                        width: width,
                        border: "1px solid black",
                        margin: "5px",
                        backgroundImage: "linear-gradient(to right top, #b7ede4, #a2e5ed, #98dbf6, #9ecefb, #b2bff7, #b0bffa, #adbefc, #aabeff, #7bd0ff, #30e1ff, #00f0ff, #0bfbe4)"
                    }
                }
                key={id}>
                <h4>Tytuł: {title}</h4>
                <p>{text}</p>
                <h5>Autor: {author}</h5>
                <h5>Data: {date}</h5>
            </div>
        )
    }
}

export default Post