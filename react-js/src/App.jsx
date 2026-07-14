

function App() {
    function handleClick() {
      alert("Hello React:")
    }
  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}
export default App;