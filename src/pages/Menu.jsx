import NavBar from "../components/NavBar/NvaBar"


export const Menu = ()=>{
    console.log('window', window.location.pathname);
    return(
        <>
        <NavBar/>
        <h1>Menu de Cadastro</h1>
        </>
    )
}