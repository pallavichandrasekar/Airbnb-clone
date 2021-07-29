import React from 'react';
import { Link } from 'react-router-dom';
import Banner from './Banner';
import Card from './Card';
import './Home.css';

function Home() {
    return (
        <div className='home'>
            <Banner></Banner>
            <div className="home__section">
                <Link to="/entireplace">
                        <Card
                            image="https://a0.muscache.com/im/pictures/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg?im_w=720" 
                            title="Entire homes"
                            description="Comfortable private places with room for friends or family"
                        />
                </Link>
                <Link to="/uniquestays">
                    <Card
                        image="https://a0.muscache.com/im/pictures/36f53e61-db8d-403c-9122-5b761c0e4264.jpg?im_w=720"
                        title="Unique stays"
                        description="Spaces that are more than just a place to sleep"
                    />
                </Link>
                <Link to="/farm">
                    <Card
                        image="https://a0.muscache.com/im/pictures/7f254627-3922-4880-b8fa-545b8551117e.jpg?im_w=720"
                        title="Farms and nature"
                        description="Places where you can live with nature"
                    />
                </Link>
            </div>
            <div className="home__section">
                <Card
                    image="https://a0.muscache.com/im/pictures/b0d317b8-31b0-45d6-8270-1829e33eb1e8.jpg?im_w=960"
                    title="Casa Lakshmi in Puducherry"
                    description="Your own private Villa steps from the ocean! Casa Lakshmi offers you the ultimate seaside luxury"
                    price="₹3,271/ night"
                />
                <Card
                    image="https://a0.muscache.com/im/pictures/92c6d59e-ea9d-42cc-98e5-8e515eac37fd.jpg?im_w=960"
                    title="Colonial 4BR Home in Coonoor"
                    description="Beautiful old British Colonel's residence restored to perfection. It is a blend of old world British aristocracy coupled with modern day amenities and comfort"
                    price="₹6,236/night"
                />
                <Card
                    image="https://a0.muscache.com/im/pictures/1bb28978-7bdf-4949-9acc-a6fecc084acf.jpg?im_w=1200" 
                    title="The Black Box in Tamil Nadu"
                    description="Share a unique experience in a modern industrial-design guest house, build out of recycled shipping containers surrounded by nature and horses"
                    price="₹5,371/ night"
                />

                
            </div>
        </div>
    )
}

export default Home
