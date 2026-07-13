function Hero(props) {
    return(
         <section style={{
            padding:"30px",
            border:"2px white solid",
            backgroundColor:"lightblue",
            marginTop:"50px",
            color:"black"
            
         }}>
            <h2>{props.headline}</h2>
            <p>{props.description}</p> <br /> <br />
            <img src="profilowe.png" alt="" width={"200px"} />
         </section>
    );
}
export default Hero;