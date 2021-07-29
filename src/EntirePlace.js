import React from 'react';
import './EntirePlace.css';
import SearchResult from './SearchResult';
import { Button } from '@material-ui/core';

function EntirePlace() {
    return (
        <div className='entirePlace'>
            <div className='entirePlace__info'>
                <p>300+ stays</p>
                <h1>Entire homes</h1>
                <Button variant="outlined">Filters.2</Button>
                <SearchResult
                    img="https://a0.muscache.com/im/pictures/286fcb82-b102-4685-981f-c94b30ef3750.jpg?im_w=960"
                    location="Entire house.Kodaikanal"
                    title="Mistover-secluded mountain cottage"
                    description="3 guests · 1 bedroom · 1 bed · 1 private bathroom · Wifi · Kitchen · Air Conditioning · Garden"
                    star={4.81}
                    price="₹7,500/ night"
                />

                <SearchResult
                    img="https://a0.muscache.com/im/pictures/7b40ca95-0c71-4853-b7f7-10bcff27221b.jpg?im_w=960"
                    location="Entire house.Chennai"
                    title="Cloudscape15"
                    description="8 guests · 3 bedrooms · 3 beds · 5 bathrooms · Private pool . Free parking"
                    star={4.84}
                    price="₹6,859/ night"
                />
                <SearchResult
                    img="https://a0.muscache.com/im/pictures/c14ca1e9-5971-469e-8d16-f124aca92d18.jpg?im_w=960"
                    location="Entire house.Goa"
                    title="2bhk villa- 8min Vagator beach-private pool"
                    description="5 guests · 2 bedrooms · 2 beds · 2 bathrooms · Pool · Wifi · Kitchen"
                    star={5.0}
                    price="₹1,255/ night"
                />
                <SearchResult
                    img="https://a0.muscache.com/im/pictures/4dd44b7c-aa71-42d5-a67a-778cf3114945.jpg?im_w=720"
                    location="Entire house.Chennai"
                    title="Seaside Getaway | East Coast Road, Kovalam"
                    description="8 guests · 2 bedrooms · 4 beds · 2 bathrooms · Wifi · Kitchen"
                    star={4.76}
                    price="₹2,889/ night"
                />
                <SearchResult
                    img="https://a0.muscache.com/im/pictures/094c77d2-419d-43c0-91cd-d4c1afb19044.jpg?im_w=1200"
                    location="Entire house.Goa"
                    title="Charming villa - private pool - 9min Vagator beach"
                    description="5 guests · 2 bedrooms · 3 beds · 2.5 bathrooms · Wifi · Kitchen"
                    star={5.0}
                    price="₹19,714/ night"
                />
                <SearchResult
                    img="https://a0.muscache.com/im/pictures/miso/Hosting-46573743/original/e49bc4b5-d67e-4b9e-9992-15b96ce2c664.jpeg?im_w=960"
                    location="Entire House.Mumbai"
                    title="Zest - Beautiful, artsy well done up 1BHK."
                    description="2 guests · 1 bedroom · 1 bed · 1 bathroom · Wifi · Kitchen"
                    star={5.0}
                    price="₹3,599/ night"
                />
                <SearchResult
                img="https://a0.muscache.com/im/pictures/a7d6b08e-febe-43e9-b126-d20a39e481b7.jpg?im_w=960"
                location="Entire house.Tambon Rawai"
                title="NEW 5-bedroom Villa, SUPERB Pool, Nature, Naiharn"
                description="12 guests · 5 bedrooms · 8 beds · 5 bathrooms · Pool · Wifi · Kitchen "
                star={4.74}
                price="₹6,384/ night"
            />
            </div>
        </div>
    )
}

export default EntirePlace
