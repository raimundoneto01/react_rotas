import NavBar from "../components/NavBar/NvaBar"

export const Cadastro = ()=>{
    console.log('window', window.location.pathname);
    
    return(
        <>
        <NavBar/>
        <h1>Minha página de Cadastro</h1>
        </>
    )
}