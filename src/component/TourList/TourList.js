import React, { useState } from 'react'
import './TourList.scss';
import Tour from './../Tour/Tour';
import {tourData} from './data';


export default function TourList() {
    const [tours, setTours] = useState([...tourData]);
    
    function removeItem(id) {
        const temp = tours;
        const tempTours = temp.filter(tour => (tour.id !== id))
        setTours(() => tempTours);
    }
    

    return (
        <section className="tourlist">
           {tours.map(tour => {
               return (<Tour key={tour.id} tour={tour} 
               removeItem={removeItem}
               />)
           })}
        </section>
    )
}
