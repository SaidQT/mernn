import React from 'react'
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import PirateForm from '../components/PirateForm'
const Create = () => {
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate()

    const createPirate = pirate => {
        axios.post('http://localhost:8000/api/pirate', pirate)
            .then(res => {
                navigate(-1)
                
            })
            .catch(err => {
                const errorResponse = err.response.data.errors;
                setErrors(errorResponse);
            })
    }

    return (
        <>
                <Header linkRoute="/pirates" paragraph="New Pirate" linkName="See crew" />
                <PirateForm 
                onSubmit={createPirate} 
                errors={errors} 
                initialData={{name: "", image:"", position:"", chests: 0, catchphrase:"", pegleg: false, hookhand: false, eyepatch: false}}
                buttonName={"Add pirate"}  />
        </>
    )
}

export default Create