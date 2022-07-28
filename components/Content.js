import React from 'react';
import ContentLeft from './ContentLeft';
import ContentMain from './ContentMain';
import ContentRight from './ContentRight';
import Category from './Category';
import Gallery from './Gallery';

const mainContent = {
    title: "Treść Główna",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem ut fugit dolor ipsa recusandae rem eos esse ab, ratione dolorum laudantium necessitatibus maiores, aperiam dignissimos odio similique magnam illum ad!",
}

const comments = [
    {
        id: 11,
        title: "Podoba mi się ta strona",
        text: "Super stronka z fajnym CSS",
        author: "Janek777",
        date: "20.07.2022"
    },
    {
        id: 12,
        title: "Podoba mi się",
        text: "Super stronka",
        author: "Władek2",
        date: "21.07.2022"
    },
    {
        id: 13,
        title: "Lipa Totalna",
        text: "Co to za CSS z 1850roku",
        author: "Gienennnnk",
        date: "22.07.2022"
    },
    {
        id: 14,
        title: "Ostra średniawka",
        text: "Wygląd jak z kalkulatora",
        author: "Hankaa",
        date: "23.07.2022"
    },

]

export class Content extends React.Component {
    render() {
        return (
            <div>
                <div
                    style={
                        {
                            display: "flex",
                            justifyContent: "space-between",
                            width: "70%",
                            margin: "20px auto"
                        }
                    }
                >
                    <ContentLeft content={<Category />} />
                    <ContentRight content={<Gallery />} />
                </div>
                <ContentMain
                    mainContent={mainContent}
                    comments={comments}
                />
            </div>
        )
    }
}

export default Content