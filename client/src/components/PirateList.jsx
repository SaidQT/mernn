import React from 'react'
import { Link } from "react-router-dom";

const PirateList = ({ deletePirate, removeFromDom, pirates }) => {

    const deletePir = (pirateId) => {
        deletePirate(pirateId, 0);
        removeFromDom((pirateId));
    }

    return (
        <>
            <div className="col-5 mt-5 mx-auto" >              
            {pirates.map((pirate, i) => (
    <div className="card mb-2" key={i}>
        <div className="row g-0">
            <div className="col-md-4">
                <img src={pirate.image} className="img-fluid rounded-start" alt={pirate.name} style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title mb-4">{pirate.name}</h5>
                    <Link to={`/pirate/${pirate._id}/details`} className="btn btn-primary me-2">
                        {pirate.name}
                    </Link>
                    <button className="btn btn-danger" onClick={() => deletePir(pirate._id)}>Walk the plank</button>
                </div>
            </div>
        </div>
    </div>
))}
                        
            </div>
        </>
    )
}

export default PirateList