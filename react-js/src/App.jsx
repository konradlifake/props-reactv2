function App() {
  const students= ["Konrad", "Karim","Jamal","Kevin","Maksymilian"];
  const showStudents =["Konrad","Maksymilian"]

  return (
    <div>

        {students.filter((student) => showStudents.includes(student)).map((student, index) =>
          <h2 key={index}>{student}</h2>
        )}
    </div>
  );
}
export  default App;