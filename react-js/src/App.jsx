function App() {
  const students= ["Konrad", "Karim","Jamal"];

  return (
    <div>
        {students.map((student) =>
          <h2>{student}</h2>
        )}
    </div>
  );
}
export  default App;