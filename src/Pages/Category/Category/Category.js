import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewSummeryCard from '../../Shared/NewSummeryCard/NewSummeryCard';

const Category = () => {
    const categoryNews = useLoaderData();
    console.log(categoryNews);
    return (
        <div>
            <h2>This Category has {categoryNews.length} news</h2>
            {
                categoryNews.map(news => <NewSummeryCard
                    key={news._id}
                    news={news}
                ></NewSummeryCard>)
            }

        </div>
    );
};

export default Category;