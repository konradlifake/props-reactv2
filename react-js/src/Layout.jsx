function Layout(props) {
    return (
        <div style={{
            border: "3px solid white",
            borderRadius: "8px",
            padding:"20px",
            margin:"20px",
        }}> 
            <h2>{props.title} </h2>
            <h3>{props.desc}</h3>
        </div>
    );
}
export default Layout;