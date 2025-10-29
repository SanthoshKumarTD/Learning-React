const ListOfArrOfObjects = [
  { name: "Alice Johnson", age: 28, phone: "555-123-4567" },
  { name: "Brian Smith", age: 34, phone: "555-987-6543" },
  { name: "Catherine Lee", age: 22, phone: "555-456-7890" }
];

const ListOfArrayOfObjects = () => {
  return (
    <div className="arrOfObj">
      <h2>
        <ul>
        {ListOfArrOfObjects.map(function(elem){
          return (
          <li>
            <div>
                {elem.name} {elem.age} {elem.phone}
            </div>
          </li>)
        })}
        </ul>
      </h2>
    </div>
  )
}

export default ListOfArrayOfObjects
