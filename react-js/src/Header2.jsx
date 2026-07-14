
function Header2() {
    return (
        <header style={{backgroundColor:"Dodgerblue", display:"flex", justifyContent:"space-between", padding:"10px"}}>
            <h2>Myapp</h2>
            <nav>
                <a href="#" style={{textDecoration:"none", color:"white", margin:"5px"}}>Home </a>
                <a href="#" style={{textDecoration:"none", color:"white", margin:"5px"}}>Products </a>
                <a href="#" style={{textDecoration:"none", color:"white", margin:"5px"}}>About </a>
                <a href="#" style={{textDecoration:"none", color:"white", margin:"5px"}}>Contact</a>
            </nav>
        </header>
    );
}
export default Header2;