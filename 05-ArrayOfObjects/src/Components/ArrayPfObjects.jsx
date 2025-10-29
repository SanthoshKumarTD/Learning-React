
const arrayofobjects = [
  {Name:'Santhosh', Age:33},
  {Age:36},
  {Salary:35000}
]

const ArrayPfObjects = () => {
  return (
    <div className="arrOfObj">
      <h2>
          {arrayofobjects.map(function(elem){
            return (<li><div>{elem.Name} {elem.Age} {elem.Salary}</div></li>)
          })}
      </h2>
    </div>
  )
}

export default ArrayPfObjects
