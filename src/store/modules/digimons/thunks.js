import axios from "axios";
// import { useState } from "react";
import addDigimons from "./actions";

const addDigimonsThunk = (input)=> (dispatch, getState) => {

    // const { digimons } = getState();
    // const [digi, setDigi] = useState([])

    // const updatedUser = { ...digimons,  };

	// nessa linha damos o dispatch na nossa action, com a alteração feita
    

    axios.get(`https://digimon-api.vercel.app/api/digimon/name/${input}`)
        .then(res => {dispatch(addDigimons(res.data[0]));})
        .catch(error => {console.log(error)})

    
    
}

export default addDigimonsThunk