import { ADD_DIGIMONS } from "./actionTypes";

const addDigimons = (digimon) =>{
    return {
        type: ADD_DIGIMONS,
        digimon
    }
}

export default addDigimons