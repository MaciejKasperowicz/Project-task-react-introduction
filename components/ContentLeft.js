import React from 'react';

export class ContentLeft extends React.Component {
    render() {
        const { content } = this.props
        return (
            <div style={
                { width: "30%" }
            }>
                {content}
            </div>
        )
    }
}

export default ContentLeft;