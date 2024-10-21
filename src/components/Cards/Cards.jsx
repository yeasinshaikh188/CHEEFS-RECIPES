import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const Cards = ({handleCook}) => {
    const [cards, setCards] = useState([]); 

    // data load from publick file
    useEffect(() =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data =>setCards(data))
        .catch(error => console.error(error)); 
    },[])



    return (
        <div className='w-full md:w-[66%]'>
            <h1 className='text-4xl font-bold my-16 text-center'>Our Recpies</h1>
           <div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
           {
                cards.map(card =><Card handleCook={handleCook} key={card.id} card={card}></Card>)
            }
           </div>
        </div>
    );
};

export default Cards;