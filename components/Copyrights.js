import React from 'react';

export class Copyrights extends React.Component {
    render() {
        const { name, company, date } = this.props.content
        return (
            <div>
                <h6>Copyright by {name}, {company}, {date}</h6>
            </div>
        )
    }
}

export default Copyrights;