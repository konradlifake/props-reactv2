function Header(props) {
    return (
        <div style={{
            height:"50px",
            margin:"20px"
        }}> 

        <h1>{props.title}</h1>
        
        <nav>
            <a href="#" style={{ marginRight:"15px"}}>{props.nav1}</a>
            <a href="#" style={{ marginRight:"15px"}}>{props.nav2}</a>
            <a href="#" style={{ marginRight:"15px"}}>{props.nav3}</a>
            <a href="#" style={{ marginRight:"15px"}}>{props.nav4}</a>
        </nav>
        </div>
    );
}
export default Header;