import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    const [coins, setCoins] = useState([]);
    const [query, setQuery] = useState("")

    const getData = () => {
    axios.get('https://api.coinstats.app/public/v1/coins?skip=0&limit=12&currency=EUR')
    .then(response => setCoins(response.data.coins))
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="container">
        <input placeholder="Enter Coin Name" onChange={event => setQuery(event.target.value)}/>
        <div className="cards">
        {coins.filter(coin => {
        if (query === '') {
        return coin;
        } else if (coin.id.toLowerCase().includes(query.toLowerCase())) {
        return coin;
        }
        }).map((coin) => (
            <CardItem src={coin.icon} id={coin.id} price={coin.price}/>
        ))}
        </div>
        </div>
    );
}

export default Cards;
