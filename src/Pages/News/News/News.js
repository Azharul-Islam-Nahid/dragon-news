import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link, useLoaderData } from 'react-router-dom';

const News = () => {
    const news = useLoaderData();
    const { title, details, image_url, category_id } = news;

    return (
        <div>
            <Card>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{details}</Card.Text>
                    <Link to={`category/${category_id}`}>
                        <Button variant="primary">All news in this category</Button>
                    </Link>
                </Card.Body>
            </Card>

        </div>
    );
};

export default News;