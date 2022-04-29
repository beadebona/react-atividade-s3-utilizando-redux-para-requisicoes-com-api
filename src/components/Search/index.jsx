import { useState } from "react"
import { useDispatch } from "react-redux"
import addDigimonsThunk from "../../store/modules/digimons/thunks"
import InputArea from "./style"

const Search = () => {
    const [search, setSearch] = useState("")
    const dispatch = useDispatch()


    return (
        <InputArea>
            <h1>Pesquise aqui seu Digimon!</h1>
            <input onChange={ (evt)=> setSearch(evt.target.value)} />
            <button onClick={()=>{dispatch(addDigimonsThunk(search))}}>Pesquisar</button>
        </InputArea>
    )
}

export default Search