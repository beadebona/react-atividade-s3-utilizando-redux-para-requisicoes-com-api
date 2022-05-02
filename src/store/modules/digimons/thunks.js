import axios from "axios";
import addDigimons from "./actions";
import { toast } from "react-toastify";

const addDigimonsThunk = (input)=> (dispatch) => {

    axios.get(`https://digimon-api.vercel.app/api/digimon/name/${input}`)
        .then(res => {dispatch(addDigimons(res.data[0]));})
        .catch(_ => {toast.error("Ops! Tente outro nome!")})
}

export default addDigimonsThunk