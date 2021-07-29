import { Button } from '@material-ui/core';
import React from 'react';
import './Farm.css';
import SearchResult from './SearchResult';

function Farm() {
    return (
        <div class='farm'>
            <div className='farm__info'>
                <p>300+ stays</p>
                <h1>Unique Stays</h1>
                <Button variant="outlined">Cancellation Flexibility</Button>
                <Button className='active' variant="outlined">Entire Place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and beds</Button>
                <Button className='active' variant="outlined">More filters.18</Button>
                <SearchResult
                    img="https://a0.muscache.com/im/pictures/7c6b41a5-9a03-421f-a775-5d8e23446d8c.jpg?im_w=960"
                    location="Farm stay.Delhi"
                    title="The Barn - A farm cottage by the horses"
                    description="2 guests · 1 bed · 1 bathroom · Wifi · Kitchen · Free parking"
                    star={4.87}
                    price="₹5,539/ night"
                />

                <SearchResult
                    img="https://a0.muscache.com/im/pictures/86bac729-8394-464a-9a7f-8ed5db27a48b.jpg?im_w=960"
                    location="Earth house.Muddenahalli"
                    title="Nandi valley cottages Near Nandi Hills"
                    description="5 guests · 1 bedroom · 1 bed · 1.5 bathrooms · Wifi"
                    star={4.75}
                    price="₹3,157/ night"
                />
                <SearchResult
                    img="https://a0.muscache.com/im/pictures/d82f56d2-17c7-4442-abd8-0c2ab0827810.jpg?im_w=960"
                    location="Farm stay.Delhi"
                    title="Birdsong @ Asola farms"
                    description="14 guests · 5 bedrooms · 5 beds · 6 bathrooms · Free parking · Pool · Kitchen"
                    star={5.0}
                    price="₹20,000/ night"
                />
                <SearchResult
                    img="https://a0.muscache.com/im/pictures/miso/Hosting-46077082/original/164ef3f2-fc87-4af8-b560-2d23b826bc2a.jpeg?im_w=1200"
                    location="Farn stay.Sughandhagiry"
                    title="Family stay in the woods in unique A Frame House"
                    description="7 guests · 2 bedrooms · 5 beds · 2 bathrooms · Kitchen · Free parking"
                    star={4.80}
                    price="₹9,214/ night"
                />
                <SearchResult
                    img="https://a0.muscache.com/im/pictures/7b9baa1e-19e0-4677-aace-ce391a4da39c.jpg?im_w=960"
                    location="Farm stay.Chikballapur"
                    title="ESKAPE Vineyard"
                    description="16 guests · 4 bedrooms · 6 beds · 4 bathrooms · Free parking · Wifi"
                    star={4.95}
                    price="₹10,571/ night"
                />
                <SearchResult
                    img="https://a0.muscache.com/im/pictures/0ff9584d-6053-4c17-9e64-57c495bc4560.jpg?im_w=960"
                    location="Farm stay.Makireddypalli"
                    title="Perfect weekend getaway at TheMangoTree farmhouse"
                    description="8 guests · 2 bedrooms · 3 beds · 3 bathrooms · Indoor fireplace · Pool · Free parking"
                    star={4.0}
                    price="₹8,000/ night"
                />
                <SearchResult
                img="https://a0.muscache.com/im/pictures/f84a2b63-ef1d-4e87-9d8f-c3ec35594387.jpg?im_w=960"
                location="Farm stay.Manali"
                title="Himalaya Retreat"
                description="4 guests · 2 bedrooms · 2 beds · 1.5 bathrooms · Heating · Wifi"
                star={4.93}
                price="₹3,650/ night"
            />
            </div>
        </div>
    )
}

export default Farm
