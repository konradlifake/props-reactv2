function Footer(props) {
    return(
        <section style={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            border:"2px white solid",
            height:"50px",
            marginTop:"20px"
        }}>
            <p>{props.text}</p>
        </section>
    );
}
export default Footer;