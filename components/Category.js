import React from 'react';

import Post from './Post';

const posts = [
    {
        id: 1,
        title: "Pan Tadeusz",
        text: "Litwo Ojczyzno moja",
        author: "Adam Mickiewicz",
        date: "01.01.1900"
    },
    {
        id: 2,
        title: "Krzyzażacy",
        text: "Nagie miecze",
        author: "Sienkiewicz",
        date: "02.02.1902"
    },
    {
        id: 3,
        title: "Przedwiośnie",
        text: "Szklane domy",
        author: "Żeromski",
        date: "03.03.1903"
    }
]

class Category extends React.Component {
    render() {
        return (
            <div>
                {posts.map(post => <Post key={post.id} title={post.title} text={post.text} author={post.author} date={post.date} />)}
            </div>
        )
    }
}

export default Category