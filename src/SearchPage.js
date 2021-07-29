import { Button } from '@material-ui/core';
import React from 'react';
import "./SearchPage.css";
import SearchResult from './SearchResult';

function SearchPage() {
    return (
        <div className="searchPage">
            <div className='searchPage__info'>
                <p>62 stays · 03 April to 07 April · 2 guest</p>
                <h1>Stays nearby</h1>
                <Button variant="outlined">Cancellation Flexibility</Button>
                <Button variant="outlined">Type of place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and beds</Button>
                <Button variant="outlined">More filters</Button>
                <SearchResult
                    img="https://a0.muscache.com/im/pictures/698368cf-37a4-4dcf-ae75-f1c418df3e84.jpg?im_w=720"
                    location="Entire house.Kottakuppam"
                    title="Casa Vista - Apartment with full sea view"
                    description="4 guests · 1 bedroom · 3 beds · 1 bathroom · Wifi · Kitchen"
                    star={4.58}
                    price="₹3,794/ night"
                    total="₹17,890 total"
                />

                <SearchResult
                    img="https://a0.muscache.com/im/pictures/23a8f65e-7d36-4c63-bbb1-3a9f4700fac8.jpg?im_w=720"
                    location="Private room.Puducherry"
                    title="The House of Blue Mangoes Room"
                    description="3 guests · 1 bedroom · 1 bed · 1 private bathroom · Wifi · Kitchen . Air Conditioning . Garden"
                    star={4.76}
                    price="₹1,634/ night"
                    total="₹7,456 total"
                />

                <SearchResult
                    img="https://a0.muscache.com/im/pictures/99891308/58352244_original.jpg?im_w=720"
                    location="Entire Chalet.Kalapet"
                    title="Sea View Wooden Chalet @ Tanto Far Beach"
                    description="4 guests · 2 bedrooms · 2 beds · 1 bathroom . Pool . Beachfront . Kitchen"
                    star={4.53}
                    price="₹4,165/ night"
                    total="₹17,159 total"
                />
                <SearchResult
                    img="https://a0.muscache.com/im/pictures/310dd60f-79ff-4884-a8ae-e95b79027b3e.jpg?im_w=720"
                    location="Private room.Puducherry"
                    title="House of Zanzibar Room 2"
                    description="4 guests · 1 bedroom · 1 bed · 1.5 bathrooms · Wifi · Kitchen"
                    star={5.0}
                    price="₹1,255/ night"
                    total="₹5,729 total"
                />
                <SearchResult
                    img="https://a0.muscache.com/im/pictures/e2852e84-3c17-4b88-8528-b3b4ce018d92.jpg?im_w=720"
                    location="Entire house.Villupuram"
                    title="La Maison Bleue - Serenity Beach"
                    description="4 guests · 1 bedroom · 3 beds · 1 bathroom · Wifi · Kitchen . Washing Machine"
                    star={4.74}
                    price="₹5,000/ night"
                    total="₹23,394 total"
                />
                <SearchResult
                    img="https://a0.muscache.com/im/pictures/523b63e9-ffda-4b71-a679-397833628431.jpg?im_w=720"
                    location="Private room.Puducherry"
                    title="Kariappa House-Private Room (Garden & Pool)"
                    description="2 guests · 1 bedroom · 1 bed · 1 private bathroom · Wifi · Pool"
                    star={4.95}
                    price="₹5,175/ night"
                    total="₹23,622 total"
                />
                <SearchResult
                img="https://a0.muscache.com/im/pictures/miso/Hosting-48636209/original/995355d4-f8c3-4f1c-83da-4b32c8322383.jpeg?im_w=720"
                location="Entire flat.Puducherry"
                title="Bungalow Living-1BHK in Auroville Main Rd"
                description="4 guests · 1 bedroom · 2 beds · 2 bathrooms · Wifi · Kitchen · TV"
                star={3.85}
                price="₹2,853/ night"
                total="₹11,412 total"
            />
            </div>
        </div>
    )
}

export default SearchPage
