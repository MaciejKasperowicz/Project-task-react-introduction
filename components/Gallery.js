import React from 'react';
import Photo from './Photo';

const photos = [
    {
        src: "",
        title: "photo1",
        date: "01.01.2001",
        author: "Jan Kowalski"
    },
    {
        src: "",
        title: "photo2",
        date: "02.02.2002",
        author: "Jan Nowak"
    },
    {
        src: "",
        title: "photo3",
        date: "03.03.2003",
        author: "Ewa Sikor"
    },
    {
        src: "",
        title: "photo4",
        date: "04.04.2004",
        author: "Janina Dymna"
    }
]

export const Gallery = () => {
    return (
        <div style={
            {
                display: "flex",
                flexWrap: "wrap"
            }
        }>
            {photos.map((photo, i) => (
                <Photo key={i}
                    src={photo.src}
                    title={photo.title}
                    date={photo.date}
                    author={photo.author}
                />))}
        </div>
    )
}

export default Gallery;