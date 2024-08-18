import { useState } from 'react'
import './App.css'
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import Index from './views/Index';
import Create from './views/Create';
import Update from './views/Update';
import Detail from './views/Detail';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

function App() {

  const [loaded, setLoaded] = useState(false)
  const [pirate, setPirate] = useState("")
  const navigate = useNavigate()

  const getPirate = (id) => {
    axios.get('http://localhost:8000/api/pirate/' + id)
      .then(res => {
        setPirate(res.data)
        setLoaded(true)
      })
      .catch(err => {
        console.error(err)
      })
  }


  const deletePirate = (pirateId, direction) => {
    axios.delete('http://localhost:8000/api/pirate/' + pirateId)
      .then(res => {
        navigate(direction)
      })
      .catch(err => {
        console.error(err)
      });
  }

  return (
    <>
      <Routes>
        <Route path="/pirates" element={<Index deletePirate={deletePirate} />} />
        <Route path="/pirates/add" element={<Create />} />
        <Route path="/pirate/:id/update" element={<Update loaded={loaded} getPirate={ getPirate } pirate={pirate} />} />
        <Route path='/pirate/:id/details' element={<Detail loaded={loaded} getPirate={ getPirate } deletePirate={deletePirate} pirate={pirate} />} />
      </Routes>
    </>
  )
}

export default App