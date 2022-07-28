import React from "react";

import Post from "./Post";

export class ContentMain extends React.Component {
    render() {
        const { title, text } = this.props.mainContent;
        const { comments } = this.props;
        return (
            <div style={
                {

                    border: "5px solid green",
                    width: "80%",
                    margin: "0 auto"
                }
            }>
                <div
                    style={
                        {
                            width: "80%",
                            margin: "0 auto"
                        }
                    }
                >
                    <h2>{title}</h2>
                    <p> {text}</p>
                    <section
                        style={
                            {
                                display: "flex",
                                justifyContent: "center",
                                flexWrap: "wrap",
                                width: "80%",
                                margin: "0 auto"
                            }
                        }
                    >
                        {comments.map(comment => <Post key={comment.id} title={comment.title} text={comment.text} author={comment.author} date={comment.date} width={"40%"} />)}
                    </section>
                </div>
            </div>
        )


    }
}

export default ContentMain;