function Student({ name, age, city }) {
    return (
        <div style={{
            border:"3px solid red",
            borderRadius:"10px"
        }}>
            <h2>Name: {name}</h2> 
            <h3>Age: {age}</h3> 
            <h3>City: {city}</h3>
        </div>
    );
 }
 export default Student;