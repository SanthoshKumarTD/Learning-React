import ArrayPfObjects from "./Components/ArrayPfObjects";
import ListOfArrayOfObjects from "./Components/ListOfArrayOfObjects";
import SimpleArray from "./Components/SimpleArray";


const App = () => {
  return (
    <div className='parent'>
      {<SimpleArray/>}
      {<ArrayPfObjects/>}
      {<ListOfArrayOfObjects/>}
    </div>
  )
}

export default App
