import { useState } from 'react';

const PirateForm = (props) => {
    const { onSubmit, initialData, errors, buttonName } = props;
    const [name, setName] = useState(initialData.name);
    const [position, setPosition] = useState(initialData.position);
    const [catchphrase, setCatchphrase] = useState(initialData.catchphrase);
    const [chests, setChests] = useState(initialData.chests);
    const [image, setImage] = useState(initialData.image);
    const [pegleg, setPegleg] = useState(initialData.pegleg);
    const [hookhand, setHookhand] = useState(initialData.hookhand);
    const [eyepatch, setEyepatch] = useState(initialData.eyepatch);
    const [err, setErr] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ 
            name,
            image,
            chests,
            catchphrase,
            position,
            pegleg,
            eyepatch,
            hookhand,
         });
    };

    const handleName = (e) => {
        setName(e.target.value);
        let newArr = [...err];
        if (e.target.value.length < 5) {
            newArr[0] = "Pirate name must be at least 5 characters";
        } else if (e.target.value.length > 30) {
            newArr[0] = "Pirate name must be at most 30 characters";
        } else {
            newArr[0] = ""; 
        }
        setErr(newArr);
    };

    const handleCatchphrase = (e) => {
        setCatchphrase(e.target.value);
        let newArr = [...err];
        if (e.target.value.length < 5) {
            newArr[1] = "Catchphrase must be at least 5 characters";
        } else {
            newArr[1] = ""; 
        }
        setErr(newArr);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group mb-4">
                            <label htmlFor="name">Pirate Name:</label>
                            <input
                                type="text"
                                id="name"
                                className="form-control"
                                value={name}
                                onChange={handleName}
                            />
                            {!errors.name && err[0] && <p className="text-danger">{err[0]}</p>}
                            {errors.name && <p className="text-danger">{errors.name.message}</p>}
                        </div>
                        
                        <div className="form-group mb-4">
                            <label htmlFor="image">Image URL:</label>
                            <input
                                type="text"
                                id="image"
                                className="form-control"
                                value={image}
                                onChange={(e) => setImage(e.target.value)}
                            />
                        </div>

                        <div className="form-group mb-4">
                            <label htmlFor="chests"># of Treasure Chests:</label>
                            <input
                                type="number"
                                id="chests"
                                className="form-control"
                                value={chests}
                                onChange={(e) => setChests(e.target.value)}
                            />
                        </div>
                        
                        <div className="form-group mb-4">
                            <label htmlFor="catchphrase">Pirate Catchphrase:</label>
                            <input
                                type="text"
                                id="catchphrase"
                                className="form-control"
                                value={catchphrase}
                                onChange={handleCatchphrase}
                            />
                            {!errors.catchphrase && err[1] && <p className="text-danger">{err[1]}</p>}
                            {errors.catchphrase && <p className="text-danger">{errors.catchphrase.message}</p>}
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="form-group mb-4">
                            <label htmlFor="position">Position:</label>
                            <select
                                id="position"
                                className="form-control"
                                value={position}
                                onChange={(e) => setPosition(e.target.value)}
                            >
                                <option value="Sailor">Sailor</option>
                                <option value="Captain">Captain</option>
                                <option value="First Mate">First Mate</option>
                            </select>
                        </div>

                        <div className="form-group mb-4">
                            <label htmlFor="pegleg">Peg Leg:</label>
                            <input
                                type="checkbox"
                                id="pegleg"
                                checked={pegleg}
                                onChange={(e) => setPegleg(e.target.checked)}
                            />
                        </div>

                        <div className="form-group mb-4">
                            <label htmlFor="hookhand">Hook Hand:</label>
                            <input
                                type="checkbox"
                                id="hookhand"
                                checked={hookhand}
                                onChange={(e) => setHookhand(e.target.checked)}
                            />
                        {errors.hookhand && <p className="text-danger">{errors.hookhand.message}</p>}

                        </div>

                        <div className="form-group mb-4">
                            <label htmlFor="eyepatch">Eye Patch:</label>
                            <input
                                type="checkbox"
                                id="eyepatch"
                                checked={eyepatch}
                                onChange={(e) => setEyepatch(e.target.checked)}
                            />
                        </div>
                       {
                        initialData.name == '' && err[0] !== '' && err[1] !== '' ? 
                        <button type="submit" className="btn btn-light mt-3 border border-1 border-dark" disabled>{buttonName}</button>
                        : 
                        <button type="submit" className="btn btn-light mt-3 border border-1 border-dark">{buttonName}</button>
                        }
                    </div>
                </div>
            </div>
        </form>
    );
};

export default PirateForm;
