function Hero(props) {
    return(
         <section style={{
            padding:"30px",
            border:"2px white solid",
            
            marginTop:"50px"
            
         }}>
            <h2>{props.headline}</h2>
            <p>{props.description}</p>
         </section>
    );
}
export default Hero;