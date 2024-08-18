import { useEffect } from 'react'
import { useParams } from "react-router-dom";
import Header from '../components/Header';
import PirateDetail from '../components/PirateDetail';
const Detail = ({ loaded, pirate, getPirate }) => {
    const { id } = useParams();

    useEffect(() => {
        getPirate(id);
    }, []);

    return (
        <>
            <Header linkRoute="/pirates" paragraph={pirate.name} linkName="See crew" />

            <PirateDetail loaded={loaded} pirate={pirate}  />
        </>
    )
}

export default Detail