import { useState } from 'react'
function App() {
  // Hooks in ReactJS to propagate a change in a variable
  let [counter, setCounter] =  useState(0)
  const addValue = () => {
    if (counter < 20) {
      counter++;
      setCounter(counter);
    }
  }
  const decValue = () => {
    if (counter > 0) {
      counter--
      setCounter(counter)
    }
  }
  return (
    <>
      <h1>Muwahid Cheema</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Increase Value</button>
      <br />
      <br />
      <button onClick={decValue}>Decrease Value</button>
    </>
  )
}
export default App
// When we write multiple set counter hook in a single function like below:
//setCounter(counter + 1);
//setCounter(counter + 1);
//setCounter(counter + 1);
//setCounter(counter + 1);
// This won't increase the variable content by 4 on a single click beacuse task is sent in batches so it doesn't see  any change so it doesn't execute them all but if you want to do this task you can use call back function as an argument like below:
//setCounter((counter) => counter + 1);
//setCounter((counter) => counter + 1);
//setCounter((counter) => counter + 1);
//setCounter((counter) => counter + 1);
// This call back method would now increase the value by 4 on a single click.