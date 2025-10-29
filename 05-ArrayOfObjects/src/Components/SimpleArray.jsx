
const arr = [10, 20, 30, 40, 50]
const arr2 = ['Santosh','kumar','Td']
const SimpleArray = () => {
  return (
    <div>
      <div className='parent'>
        <h1>My Array of Objects</h1>
        <h1>arr</h1>
        <h1>{arr}</h1>

        <h1>
            {arr.map(function(elem){
                return elem
            })}
        </h1>

        <h1>
            {arr2.map(function(elem){
            return elem
            })}
        </h1>
    </div>
    </div>
  )
}

export default SimpleArray
