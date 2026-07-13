function App() {
  const students= ["Konrad", "Karim","Jamal","Kevin","Maksymilian"];

  return (
    <div>

        {students.map((student, index) =>
          <h2 key={index}>{student}</h2>
        )}
    </div>
  );
}
export  default App;