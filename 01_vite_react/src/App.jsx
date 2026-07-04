import One from "./script"
function App() {
  // We can inject a variable using curly braces
  const name = "Muwahid Cheema"
  return (
    <>
      <One/>
      <h1>My Name is {name}</h1>
    </>
  )
}
export default App
// You can return only single tag in .jsx so the solution to was to return a div tag which can have multiple tags so react solved this issue by allowing to returning only empty tag <></> this is called as fragment.
// The functions that you want to export must capitalize the name of function for working.
// You must name the file with .jsx extension in react vite
