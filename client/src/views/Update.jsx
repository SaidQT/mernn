import React, { useState, useEffect } from 'react'
import AuthorForm from '../components/PirateForm'
import Header from '../components/Header';
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';

const Update = ({ loaded, pirate, getPirate }) => {
    const { id } = useParams();
    const [errors, setErrors] = useState("")

    const navigate = useNavigate()

    useEffect(() => {
        getPirate(id)
    }, []);

  const updatePirate = (pirate) => {
    axios.patch('http://localhost:8000/api/pirate/' + id, pirate)
        .then(res => {
            console.log(res);
            navigate(-1);
        })
        .catch(err => {
            const errorResponse = err.response.data.errors;
            setErrors(errorResponse);
        });
};


    return (
        <>
            {loaded && <Header linkRoute={`/pirate/${pirate._id}/details`} linkName={"See details"} paragraph={`Update ${pirate.name}`}></Header>}

            <div className="container mt-5">
                {loaded && <AuthorForm onSubmit={updatePirate} 
                errors={errors} 
                 initialData={{name: pirate.name, image: pirate.image, position: pirate.position, chests: pirate.chests,
                  catchphrase:pirate.catchphrase,pegleg:pirate.pegleg,hookhand:pirate.hookhand,eyepatch:pirate.eyepatch}}
                  buttonName={"Edit pirate"} />}
            </div>
        </>
    )
}

export default Update