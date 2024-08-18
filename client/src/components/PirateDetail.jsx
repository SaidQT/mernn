import React from 'react'
import { Link } from "react-router-dom";

const PirateDetail = ({ loaded, pirate }) => {
    return (
        <>
            {!loaded && <p>This pirate doesn't exist the database</p>}

            {loaded && (
                <>
               <div className="container">
  <div className="row align-items-center">
    <div className="col-md-4 text-center">
  <div>
    <img src={pirate.image} alt={pirate.name} className="img-fluid" style={{ maxWidth: "150px", border: "none" }} />
  </div>
  <div>
    <Link to={`/pirate/${pirate._id}/update`} className="btn btn-light mt-3">
      Edit {pirate.name}
    </Link>
  </div>
</div>
    <div className="col-md-8 py-3 mt-5 w-25">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">About</h5>
          <p>Position: {pirate.position}</p>
          <p>Treasures: {pirate.chests ? pirate.chests : 0}</p>
          <p>Peg Leg: {pirate.pegleg ? "Yes" : "No"}</p>
          <p>Eye Patch: {pirate.eyepatch ? "Yes" : "No"}</p>
          <p>Hook Hand: {pirate.hookhand ? "Yes" : "No"}</p>
        </div>
      </div>
    </div>
  </div>
</div>

</>
            )}
        </>
    )
}

export default PirateDetail