function App() {
  const students= ["Konrad", "Karim","Jamal","Kevin","Maksymilian"];

  return (
    <div>

        {students.slice(2,3).map((student, index) =>
          <h2 key={index}>{student}</h2>
        )}
    </div>
  );
}
export  default App;