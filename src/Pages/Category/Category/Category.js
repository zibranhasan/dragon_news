import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCart from '../../Shared/NewsSummaryCart/NewsSummaryCart';

const Category = () => {
    const categoryNews = useLoaderData();
    return (
        <div>
            <h2>This Category has news: {categoryNews.length}</h2>
            {
                categoryNews.map(news =><NewsSummaryCart
                key={news._id}
                news={news}
                ></NewsSummaryCart>)
            }
        </div>
    );
};

export default Category;