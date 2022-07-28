import React from 'react';

export const ContentRight = (props) => {
    const { content } = props
    return (
        <div style={
            { width: "60%" }
        }>
            {content}
        </div>
    )
}

export default ContentRight;