import { useNavigate } from 'react-router-dom'
import NavBar from '../components/NavBar/NvaBar'


export const Usuario = ()=>{
    console.log('window', window.location.pathname);
    return(
        <>
        <NavBar />
        <h1>Meu Usuário</h1>
        </>
    )
}
