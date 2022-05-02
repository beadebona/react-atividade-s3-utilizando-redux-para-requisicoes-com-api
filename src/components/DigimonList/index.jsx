import { useSelector } from "react-redux"
import Container from "./style"

const DigimonList = () =>{
    const digimons = useSelector(state=> state.digimons)
    return (
        <Container>
            {digimons.map(digimon=><div key={digimon.name}>
             <h1>{digimon.name}</h1>
            <img alt="img" src={digimon.img}/>
            <p>{digimon.level}</p>
            </div>  )}
        </Container>
    )
}

export default DigimonList