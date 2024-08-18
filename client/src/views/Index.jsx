import { useEffect, useState } from 'react'
import axios from 'axios'
import Header from '../components/Header';
import PirateList from '../components/PirateList';

const Index = ({ deletePirate }) => {
    const [pirates, setPirates] = useState([]);

    useEffect(() => {
        getPirates()
    }, []);

    const getPirates = () => {
        axios.get("http://localhost:8000/api/pirates")
            .then(res => {
                setPirates(res.data);
            })
            .catch(err => {
                console.error("Error fetching pirates:", err);
            });
    }

    
    const removeFromDom = pirateId => {
        setPirates(pirates.filter(pirate => pirate._id !== pirateId));
    }

    return (
        <>
                <Header linkRoute="/pirates/add" paragraph="Pirates crew" linkName="Add pirates" />
                <PirateList deletePirate={deletePirate} pirates={pirates} removeFromDom={removeFromDom} />
        </>
    )
}

export default Index