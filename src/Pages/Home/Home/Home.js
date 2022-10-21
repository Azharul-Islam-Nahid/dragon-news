import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewSummeryCard from '../../Shared/NewSummeryCard/NewSummeryCard';

const Home = () => {
    const allNews = useLoaderData();
    return (
        <div>
            <h2>This is Home Component :{allNews.length}</h2>
            {
                allNews.map(news => <NewSummeryCard
                    key={news._id}
                    news={news}
                ></NewSummeryCard>)
            }
        </div>
    );
};

export default Home;