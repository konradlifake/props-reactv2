function App() {
  const students = [
    {
      name: "Konrad",
      age: "17",
      city: "Mircze"
    },
    {
      name: "Karim",
      age: 22,
      city: "Chittagong"
    },
    {
      name: "Jamal",
      age: 21,
      city: "Khulna"
    }
];

  return (
    <div>
      {students.map((student, index) =>
       <div key={index}>
         <h2>{student.name}</h2>
         <p>Age: {student.age}</p>
         <p>City: {student.city}</p> <br />
       </div> 
      )}
    </div>
  );
}
export default App;