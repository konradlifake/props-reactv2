function Header({title,nav1,nav2,nav3,nav4}) {
    return (
        <div style={{
            height:"50px",
            margin:"20px",
        }}> 

        <h1>{title}</h1>
        
        <nav>
            <a href="#" style={{ marginRight:"15px"}}>{nav1}</a>
            <a href="#" style={{ marginRight:"15px"}}>{nav2}</a>
            <a href="#" style={{ marginRight:"15px"}}>{nav3}</a>
            <a href="#" style={{ marginRight:"15px"}}>{nav4}</a>
        </nav>
        
        </div>
    );
}
export default Header;