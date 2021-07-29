import { Button } from '@material-ui/core';
import React from 'react';
import SearchResult from './SearchResult';
import "./UniqueStays.css";

function UniqueStays() {
    return (
        <div className='uniqueStays'>
            <div className='uniqueStays__info'>
                <p>300+ stays</p>
                <h1>Unique Stays</h1>
                <Button variant="outlined">Cancellation Flexibility</Button>
                <Button className='active' variant="outlined">Entire Place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and beds</Button>
                <Button className='active' variant="outlined">More filters.30</Button>
                <SearchResult
                    img="https://a0.muscache.com/im/pictures/bb36473b-4c84-4c40-9468-dc9be329580f.jpg?im_w=960"
                    location="Farm stay.Bengaluru"
                    title="Berigai Hill Home. Great View"
                    description="4 guests · 1 bedroom · 2 beds · 1 bathroom · Wifi · Kitchen · Free parking"
                    star={5.0}
                    price="₹5,000/ night"
                />

                <SearchResult
                    img="https://a0.muscache.com/im/pictures/eb11a270-4c43-4271-b4d5-470736d053d2.jpg?im_w=960"
                    location="Tree house.Yelagiri"
                    title="Yelagiri Tree house"
                    description="4 guests · 1 bedroom · 2 beds · 1 bathroom · Free parking"
                    star={4.87}
                    price="₹3,200/ night"
                />
                <SearchResult
                    img="https://a0.muscache.com/im/pictures/miso/Hosting-45211806/original/54145d23-1e48-4c5d-8c51-7cd66c944779.jpeg?im_w=960"
                    location="Dome house.Chikkamagaluru"
                    title="Birds Eye Estate Geodesic Glamping Domes"
                    description=" 6 guests · 2 bedrooms · 2 beds · 2 bathrooms · Free parking · Wifi · Kitchen"
                    star={4.78}
                    price="₹7,499/ night"
                />
                <SearchResult
                    img="https://a0.muscache.com/im/pictures/d6ce60ec-c096-47c6-a67a-9db6dd02456f.jpg?im_w=960"
                    location="Tree house.Roha"
                    title="Seaside Getaway | East Coast Road, Kovalam"
                    description="4 guests · 1 bedroom · 2 beds · 1.5 bathrooms · Wifi · Free parking"
                    star={4.62}
                    price="₹2,499/ night"
                />
                <SearchResult
                    img="https://a0.muscache.com/im/pictures/2eca55b5-0b51-4a56-84c0-00520af38db0.jpg?im_w=960"
                    location="Farm stay.Bengaluru"
                    title="Aikya Farm - a happy place"
                    description="10 guests · 2 bedrooms · 4 beds · 2 bathrooms · Free parking · Kitchen"
                    star={4.20}
                    price="₹6,430/ night"
                />
                <SearchResult
                    img="https://a0.muscache.com/im/pictures/miso/Hosting-48617245/original/a972672a-c950-4069-b607-88c6e7a934aa.jpeg?im_w=960"
                    location="Dome house.Jari"
                    title="A Cozy Dome with Attic in Parvati Valley"
                    description="5 guests · 1 bedroom · 2 beds · 1.5 bathrooms · Wifi · Kitchen"
                    star={4.73}
                    price="₹5,500/ night"
                />
                <SearchResult
                img="https://a0.muscache.com/im/pictures/b1f50ca1-304d-40a0-8351-0c80659c5468.jpg?im_w=960"
                location="Tree house.Madikeri"
                title="Forestvalley Tree House"
                description="6 guests · 2 bedrooms · 2 beds · 2 bathrooms · Free parking · Wifi"
                star={4.86}
                price="₹13,652/ night"
            />
            </div>
        </div>
    )
}

export default UniqueStays
